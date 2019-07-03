import React, { Component } from 'react';
import axios from "../../axios-base"
import remove from "lodash/remove"
import sortBy from "lodash/sortBy"
import { Dimmer, Loader, Container, Button, Select } from 'semantic-ui-react'

import ErrorBoundary from "../../hoc/ErrorBoundary/ErrorBoundary";
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Posts from "../../containers/Posts/Posts";
import Pagination from "../../components/UI/Pagination/Pagination";
import { NavLink } from 'react-router-dom';
import { API_ENDPOINTS } from "../../constants"
import postsWrapper from "../../hoc/postsWrapper/postsWrapper";

class Home extends Component {
    state = {
        posts: [],
        isLoading: false,
        sortBy: "created_on",
        isAdmin: localStorage.getItem("userType") === "ADMIN"
    }

    perPage = 10;
    allPosts = [];
    totalPages = 0;
    sortByOptions = [
        { key: "created_on", value: "created_on", text: "Created Time" },
        { key: "updated_on", value: "updated_on", text: "Updated Time" },
        { key: "Name", value: "Name", text: "Title" },
    ];


    componentDidMount() {
        this.setState({ posts: this.props.posts, isLoading: false });
    }

    removePostHandler = (id) => {
        this.setState({
            isLoading: true
        });
        axios.delete(API_ENDPOINTS.getPostApi(id))
            .then((response) => {
                let posts = this.state.posts.slice();
                remove(posts, post => post.Id === id);
                this.setState({ posts: posts, isLoading: false });
            });
    }

    onPageChange = (event, attrs) => {
        let end = attrs.activePage * this.perPage;
        let start = 0;
        if (attrs.activePage === 2) {
            start = this.perPage;
        } else {
            start = this.perPage * (attrs.activePage - 1);
        }
        let sortedPosts = this.sortData(this.allPosts, this.state.sortBy);
        let posts = sortedPosts.slice(start, end);
        this.setState({ posts: posts, isLoading: false });
    }

    sortChangeHandler = (e, options) => {
        let sorted = this.sortData(this.state.posts, options.value)
        this.setState({ sortBy: options.value, posts: sorted });
    }

    sortData = (posts, sortByValue) => {
        let sortedData = sortBy(posts, (post) => {
            if (sortByValue === "updated_on" || sortByValue === "created_on") {
                return new Date(parseInt(post[sortByValue]) * 1000)
            }
            if (typeof post[sortByValue] === "string") {
                return post[sortByValue].toLowerCase()
            }
            return post[sortByValue];
        });
        return sortedData;
    }

    render() {
        const posts = this.state.posts;
        let postsJsx;
        if (!this.state.isLoading) {
            postsJsx = posts.length ?
                <React.Fragment>
                    <div className="new-post-container">
                        <NavLink to="/post/new" className="pull-right margin-right-15">
                            <Button primary>New Post</Button>
                        </NavLink>
                        {this.state.isAdmin ? <NavLink to="/unpublished" className="pull-right margin-right-15">
                            <Button primary>Unpublished</Button>
                        </NavLink> : null}
                    </div>
                    <div className="new-post-container">
                        <Select
                            value={this.state.sortBy}
                            options={this.sortByOptions}
                            onChange={this.sortChangeHandler} />
                    </div>
                    <Posts clicked={this.removePostHandler} posts={posts}></Posts>
                    {this.totalPages > 1 ?
                        <div
                            style={{ overflow: "hidden" }}>
                            <Pagination onPageChange={this.onPageChange} totalPages={this.totalPages} />
                        </div>
                        : null}
                </React.Fragment> :
                <Container style={{ margin: "0 auto", width: "400px" }} textAlign='justified'>
                    <b>No Records found</b>
                </Container>
        } else {
            postsJsx = <Dimmer active><Loader /></Dimmer>
        }

        return (
            <ErrorBoundary>
                {postsJsx}
            </ErrorBoundary >
        )
    }
}

export default withErrorHandler(postsWrapper("published")(Home), axios);