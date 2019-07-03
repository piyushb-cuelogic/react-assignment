import React, { Component } from "react"
import { Dimmer, Loader, Divider } from "semantic-ui-react"

import axios from "./../../axios-base"
import PostsByCategoryChart from "./PostsByCategoryChart"
import PostsByAuthorChart from "./PostsByAuthorChart"
import { API_ENDPOINTS } from "../../constants";

class Charts extends Component {
    state = {
        allPosts: [],
        categories: [],
        publishedPosts: [],
        unpublishedPosts: [],
        isLoading: false
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        axios.get(API_ENDPOINTS.CATEGORIES)
            .then((categoriesResponse) => {
                let categories = categoriesResponse.data;
                this.setState({ categories });
                return axios.get(API_ENDPOINTS.POSTS)
            })
            .then((response) => {
                let allPosts = [];
                let publishedPosts = [];
                let unpublishedPosts = [];
                for (let key in response.data) {
                    response.data[key].Id = key;
                    if (response.data[key].isPublished) {
                        publishedPosts.push(response.data[key])
                    } else {
                        unpublishedPosts.push(response.data[key])
                    }
                    allPosts.push(response.data[key])
                }
                this.setState({ allPosts, publishedPosts, unpublishedPosts, isLoading: false });
            });
    }

    render() {
        let postsJsx;
        if (!this.state.isLoading) {
            postsJsx = (
                <React.Fragment>
                    <div>
                        <div className="chart-container">
                            <div className="chart-title">Donut Chart - Posts Per Category</div>
                            <PostsByCategoryChart
                                posts={this.state.allPosts}
                                categories={this.state.categories} />
                        </div>
                        < Divider />
                        <div className="chart-container">
                            <div className="chart-title">Pie Chart - Posts Per Author</div>
                            <PostsByAuthorChart
                                posts={this.state.allPosts}
                                categories={this.state.categories} />
                        </div>
                    </div>
                </React.Fragment>
            )
        } else {
            postsJsx = <Dimmer active><Loader /></Dimmer>
        }
        return postsJsx;
    }
}

export default Charts;