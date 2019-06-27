import React, { Component } from 'react'
import { Card, Icon, Button, Container, Dimmer, Loader } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import ConfirmationModal from "../../components/UI/Modals/Confirmation"
import moment from "moment"
import axios from "../../axios-base"
import Pagination from "../../components/UI/Pagination/Pagination"
import { API_ENDPOINTS } from "../../constants"
import postsWrapper from "../../hoc/postsWrapper/postsWrapper"

class UnpublishedPosts extends Component {

    state = {
        posts: [],
        isLoading: false
    };

    publish = {};

    componentDidMount() {
        this.setState({ posts: this.props.posts, isLoading: false });
    }

    publish = (post) => {
        this.setState({ isLoading: true });
        let postToBeEdited = {
            ...post,
            updated_on: new Date().getTime() / 1000,
            isPublished: true
        };
        axios.put(API_ENDPOINTS.getPostApi(post.Id), postToBeEdited)
            .then(response => {
                this.setState({ isLoading: false });
                let posts = [...this.state.posts];
                posts = posts.filter(postItr => postItr.Id !== post.Id)
                this.setState({ posts });
            })
    }

    render() {
        if (this.state.isLoading) {
            return <Dimmer active><Loader /></Dimmer>
        }
        let pagination = this.props.totalPages > 1 ? <div style={{ marginTop: "20px", marginRight: "15px", float: "right" }}>
            <Pagination onPageChange={this.onPageChange} totalPages={this.props.totalPages} />
        </div> : null;

        let newPostJsx = this.state.posts.length ?
            <React.Fragment>
                <Card.Group>
                    {this.state.posts.map(post => {
                        let updatedDate = moment(moment.utc(new Date(post.updated_on * 1000)), "YYYYMMDD").fromNow();
                        return (
                            <Card key={post.Id}>
                                <Card.Content>
                                    <NavLink
                                        style={{ display: "inline-block" }}
                                        to={'/posts/' + post.Id}>
                                        <Card.Header>
                                            {post.Name}
                                        </Card.Header>
                                    </NavLink>
                                    <NavLink
                                        style={{ display: "inline-block" }}
                                        to={'/posts/edit/' + post.Id}>
                                        <Icon name='edit outline' />
                                    </NavLink>
                                    <Card.Meta>
                                        <span>{post.Author}</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <Button primary onClick={() => this.publish(post)}>
                                            Publish Post
                                    </Button>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <ConfirmationModal
                                        iconType="remove circle"
                                        modalTitle="Delete Post"
                                        ConfirmationMessage="Are you sure, you want to delete this post?"
                                        rejectionClick={() => { console.log("clicked") }}
                                        confirmationClick={() => { this.props.clicked(post.Id) }} />
                                    <span style={{ float: "right" }}>{updatedDate}</span>
                                </Card.Content>
                            </Card>
                        )
                    })}
                </Card.Group>
                {pagination}
            </React.Fragment>
            :
            <Container style={{ margin: "0 auto", width: "400px" }} textAlign='justified'>
                <b>No Records found</b>
            </Container>


        return newPostJsx;
    }
}

export default postsWrapper("unpublished")(UnpublishedPosts);