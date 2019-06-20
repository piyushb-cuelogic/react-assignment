import React, { Component } from 'react';
import axios from "../../axios-base"
import _ from "lodash"
import { Dimmer, Loader, Container, Button, Select } from 'semantic-ui-react'

import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Posts from "../../containers/Posts/Posts"
import { stripHtmlTags } from "../../shared/utility"
import Pagination from "../../components/UI/Pagination/Pagination"
import { NavLink } from 'react-router-dom';

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
        this.setState({
            isLoading: true
        });
        axios.get("/posts.json")
            .then((response) => {
                let posts = [];
                for (let key in response.data) {
                    if (response.data[key].isPublished) {
                        response.data[key].Id = key;
                        response.data[key].Description = stripHtmlTags(response.data[key].Description.substr(0, 240)) + "..."
                        this.allPosts.push(response.data[key])
                    }
                }
                this.totalPages = Math.ceil(this.allPosts.length / this.perPage);
                posts = this.allPosts.slice(0, this.perPage);
                this.setState({ posts: posts, isLoading: false });
            })
    }

    removePostHandler = (id) => {
        this.setState({
            isLoading: true
        });
        axios.delete("posts/" + id + ".json/")
            .then((response) => {
                let posts = this.state.posts.slice();
                _.remove(posts, post => post.Id === id);
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
        let posts = this.allPosts.slice(start, end);
        this.setState({ posts: posts, isLoading: false });
    }

    sortChangeHandler = (e, options) => {
        let sorted = _.sortBy(this.state.posts, (post) => post[options.value]);
        this.setState({ sortBy: options.value, posts: sorted });
    }

    render() {
        const posts = this.state.posts;
        let postsJsx;
        if (!this.state.isLoading) {
            postsJsx = posts.length ?
                <Aux>
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
                            style={{ marginTop: "20px", marginRight: "15px", float: "right" }}>
                            <Pagination onPageChange={this.onPageChange} totalPages={this.totalPages} />
                        </div>
                        : null}
                </Aux> :
                <Container style={{ margin: "0 auto", width: "400px" }} textAlign='justified'>
                    <b>No Records found</b>
                </Container>
        } else {
            postsJsx = <Dimmer active><Loader /></Dimmer>
        }

        return (
            <Aux>
                {postsJsx}
            </Aux >
        )
    }
}

export default withErrorHandler(Home, axios);