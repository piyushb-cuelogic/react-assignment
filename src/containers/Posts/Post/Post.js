import React, { Component } from 'react'
import axios from '../../../axios-base'
// import _ from 'lodash'
// import { getAuthor } from "../../../shared/utility"
import { Container, Divider } from 'semantic-ui-react'
import { Dimmer, Loader } from 'semantic-ui-react'

class Post extends Component {

    state = {
        post: {}
    }

    componentDidMount() {
        if(this.props.previewPost) {
            this.setState({ post: this.props.post });            
            return;
        }
        axios.get("posts/" + this.props.match.params.id + ".json/")
            .then((response) => {
                let post = response.data;
                this.setState({ post });
            });
    }

    render() {

        let postsJsx;
        if (this.state.post.Name || this.state.post.Author || this.state.post.Description) {
            postsJsx = <div>
                <Container textAlign='center'>{this.state.post.Name}</Container>
                <Container textAlign='right'>{this.state.post.Category}</Container>
                <Container textAlign='justified'>
                    <b>{this.state.post.Author}</b>
                    <Divider />
                    <p dangerouslySetInnerHTML={{ __html: this.state.post.Description }} />
                </Container>
            </div>
        } else {
            postsJsx = <Dimmer active><Loader /></Dimmer>
        }

        return postsJsx
    }
}

export default Post


// const getPost = (id) => {
//     const posts = [{
//         Id: 1,
//         Name: "Rich Dad Poor Dad",
//         Description: "International Bestseller",
//         Author: "Robert Kiyosaki"
//     }, {
//         Id: 2,
//         Name: "Five Points Someone",
//         Description: "3 Idiots was inspired on this one",
//         Author: "Chetan Bhagat"
//     }, {
//         Id: 3,
//         Name: "The Secret",
//         Description: "Moral booster",
//         Author: "Rhonda Byrne"
//     }, {
//         Id: 4,
//         Name: "Saching Tendulkar: Playing it my way",
//         Description: "Autobiography of the god of the cricket",
//         Author: "Boria Majumdar"
//     }];
//     return _.find(posts, (post) => post.Id === id);
// };