import React, { Component } from "react"
import { Dimmer, Loader, Divider } from "semantic-ui-react"

import axios from "./../../axios-base"
import Aux from "../../hoc/Aux/Aux"
import DonutChart from "./DonutChart"
import PieChart from "./PieChart"

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
        axios.get("categories.json/")
            .then((categoriesResponse) => {
                let categories = categoriesResponse.data;
                this.setState({ categories });
                return axios.get("/posts.json")
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
                <Aux>
                    <div>
                        <div className="chart-container">
                            <div className="chart-title">Donut Chart - Posts Per Category</div>
                            <DonutChart
                                posts={this.state.allPosts}
                                categories={this.state.categories} />
                        </div>
                        < Divider />
                        <div className="chart-container">
                            <div className="chart-title">Pie Chart - Posts Per Author</div>
                            <PieChart
                                posts={this.state.allPosts}
                                categories={this.state.categories} />
                        </div>
                    </div>
                </Aux>
            )
        } else {
            postsJsx = <Dimmer active><Loader /></Dimmer>
        }
        return postsJsx;
    }
}

export default Charts;