import React, { Component } from 'react';
import axios from "../../axios-base"
import { Dimmer, Loader } from 'semantic-ui-react'
import { API_ENDPOINTS } from "../../constants"
import { stripHtmlTags } from "../../shared/utility";

const postsWrapper = wrapperProps => (WrappedComponent) => {
    return class extends Component {
        state = {
            posts: [],
            isLoading: false
        }

        perPage = 20;
        allPosts = [];
        totalPages = 0;

        componentDidMount() {
            this.setState({
                isLoading: true
            });
            axios.get(API_ENDPOINTS.POSTS)
                .then((response) => {
                    let posts = [];
                    for (let key in response.data) {
                        response.data[key].Id = key;
                        response.data[key].Description = stripHtmlTags(response.data[key].Description.substr(0, 240)) + "..."
                        if (wrapperProps === "unpublished" && !response.data[key].isPublished) {
                            this.allPosts.push(response.data[key])
                        } else if (wrapperProps !== "unpublished" && response.data[key].isPublished) {
                            this.allPosts.push(response.data[key])
                        }
                    }
                    this.totalPages = Math.ceil(this.allPosts.length / 20);
                    posts = this.allPosts.slice(0, 20);
                    this.setState({ posts: posts, isLoading: false });
                });
        }

        render() {
            let newPostJsx;
            if (this.state.isLoading) {
                newPostJsx = <Dimmer active><Loader /></Dimmer>
            } else {
                newPostJsx = <React.Fragment>
                    <WrappedComponent {...this.props} {...this.state} />
                </React.Fragment>
            }
            return newPostJsx
        }
    }
}

export default postsWrapper;