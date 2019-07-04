import React, { Component } from 'react';
import axios from "../../axios-base"
import { Dimmer, Loader } from 'semantic-ui-react'
import { API_ENDPOINTS } from "../../constants"
import { stripHtmlTags } from "../../shared/utility";

const postsWrapper = wrapperProps => (WrappedComponent) => {
    return class extends Component {
        state = {
            posts: [],
            allPosts: [],
            isLoading: false,
            perPage: 10,
            totalPages: 0,
        }

        componentDidMount() {
            this.setState({
                isLoading: true
            });
            axios.get(API_ENDPOINTS.POSTS)
                .then((response) => {
                    let allPosts = [];
                    for (let key in response.data) {
                        response.data[key].Id = key;
                        response.data[key].Description = stripHtmlTags(response.data[key].Description.substr(0, 240)) + "..."
                        if (wrapperProps === "unpublished" && !response.data[key].isPublished) {
                            allPosts.push(response.data[key])
                        } else if (wrapperProps !== "unpublished" && response.data[key].isPublished) {
                            allPosts.push(response.data[key])
                        }
                    }
                    let totalPages = Math.ceil(allPosts.length / this.state.perPage);
                    let posts = allPosts.slice(0, this.state.perPage);
                    this.setState({ posts, allPosts, isLoading: false, totalPages });
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