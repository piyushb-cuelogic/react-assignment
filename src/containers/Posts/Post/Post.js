import React, { useState, useEffect } from 'react'
import axios from '../../../axios-base'
import { Container, Divider } from 'semantic-ui-react'
import { Dimmer, Loader } from 'semantic-ui-react'
import { API_ENDPOINTS } from "../../../constants";

const Post = (props) => {

    const [post, setPost] = useState({
        Name: "",
        Author: "",
        Description: "",
        Category: ""
    });

    useEffect(() => {
        if (props.previewPost) {
            setPost(props.post);
            return;
        }
        axios.get(API_ENDPOINTS.getPostApi(props.match.params.id))
            .then((response) => {
                setPost(response.data);
            });
    }, []);

    let postsJsx;
    if (post.Name || post.Author || post.Description) {
        postsJsx = <div>
            <Container textAlign='center'>{post.Name}</Container>
            <Container textAlign='right'>{post.Category}</Container>
            <Container textAlign='justified'>
                <b>{post.Author}</b>
                <Divider />
                <p dangerouslySetInnerHTML={{ __html: post.Description }} />
            </Container>
        </div>
    } else {
        postsJsx = <Dimmer active><Loader /></Dimmer>
    }

    return postsJsx
}

export default Post