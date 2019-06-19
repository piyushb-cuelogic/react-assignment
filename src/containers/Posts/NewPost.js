import React, { Component } from 'react'
import { Button, Form, Input, Container, Divider, Message, Dimmer, Loader, Select } from 'semantic-ui-react'
import ReactQuill from 'react-quill';
import axios from "../../axios-base";
import Post from "./Post/Post"

class NewPost extends Component {
    state = {
        post: {
            Name: "",
            Author: "",
            Description: "",
            Category: "Sports"
        },
        categories: [],
        isPreview: false,
        isLoading: false
    }

    errorMessage = {
        Name: "",
        Author: "",
        Description: ""
    }

    // componentWillMount() {
    //     console.log("componentWillMount")
    // }

    // componentWillReceiveProps() {
    //     console.log("componentWillReceiveProps")
    // }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true;
    }

    // getSnapshotBeforeUpdate(a, b, c) {
    //     console.log(a,b,c);
    //     console.log("getSnapshotBeforeUpdate")
    //     return b;
    // }

    // componentWillUpdate() {
    //     console.log("componentWillUpdate")
    // }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        axios.get("categories.json/")
            .then((categoriesResponse) => {
                let categories = categoriesResponse.data;
                this.setState({ categories });
                if (!this.props.match.params.id) {
                    this.setState({ isLoading: false });
                    return;
                }
                axios.get("posts/" + this.props.match.params.id + ".json/")
                    .then((postsResponse) => {
                        this.setState({ isLoading: false });
                        let post = postsResponse.data;
                        this.setState({ post });
                    });
            });
    }

    validate = () => {
        this.errorMessage = {
            Name: "",
            Author: "",
            Description: ""
        };
        let isError = false;
        if (!this.state.post.Name) {
            this.errorMessage.Name = "Please enter title";
            isError = true;
        }
        if (!this.state.post.Author) {
            this.errorMessage.Author = "Please enter author's name";
            isError = true;
        }
        if (!this.state.post.Description) {
            this.errorMessage.Description = "Please enter description";
            isError = true;
        }
        return isError;
    }

    handleChange = (e, { name, value }) => {
        let post = { ...this.state.post }
        post[name] = value;
        this.setState({ post });
    }

    handleDesriptionChange = (content, delta, source, editor) => {
        console.log(content, delta, source, editor)
        let post = { ...this.state.post }
        post.Description = content;
        this.setState({ post });
    }

    handleSubmit = () => {
        const { Name, Author, Description, Category } = this.state.post;
        this.setState({ post: { Name, Author, Description, Category } });
        console.log(this.state)
        if (!this.validate()) {
            this.setState({ isLoading: true });
            if (this.props.match.params.id) {
                this.editRequest()
            } else {
                this.createRequest();
            }
        }
    }

    createRequest = () => {
        let post = {
            ...this.state.post,
            created_on: new Date().getTime() / 1000,
            updated_on: new Date().getTime() / 1000
        };
        axios.post("/posts.json", post)
            .then(response => {
                this.setState({ isLoading: false });
                this.props.history.push({
                    pathname: "/",
                    state: {
                        newPostCreated: true
                    }
                });

            })
    }

    editRequest = () => {
        let post = {
            ...this.state.post,
            updated_on: new Date().getTime() / 1000
        };
        axios.put("/posts/" + this.props.match.params.id + ".json", post)
            .then(response => {
                this.setState({ isLoading: false });
                this.props.history.push({
                    pathname: "/",
                    state: {
                        newPostCreated: true
                    }
                });

            })
    }

    getValidationMessage = () => {
        let validationMessage = [];
        if (this.errorMessage.Name) {
            validationMessage.push(<Message key="1"
                error
                content={this.errorMessage.Name} />)
        }
        if (this.errorMessage.Author) {
            validationMessage.push(<Message key="2"
                error
                content={this.errorMessage.Author} />)
        }
        if (this.errorMessage.Description) {
            validationMessage.push(<Message key="3"
                error
                content={this.errorMessage.Description} />)
        }
        return validationMessage;
    }

    changePreview() {
        this.setState({ isPreview: !this.state.isPreview })
    }

    render() {
        let categories = [];
        this.state.categories.forEach(cat => categories.push({ key: cat, value: cat, text: cat }));

        const { Name, Author, Description, Category } = this.state.post;

        const errorObj = {
            Name: {
                error: this.errorMessage.Name ? true : null
            },
            Author: {
                error: this.errorMessage.Author ? true : null
            },
            Description: {
                error: this.errorMessage.Description ? true : null
            },
        }
        const pageTitle = this.props.match.params.id ? "Edit post" : "Create new post"
        const descriptionClassNames = this.errorMessage.Description ? "field error" : "field";
        const buttonTitle = this.props.match.params.id ? "Update Post" : "Create Post"
        let validationMessage = this.getValidationMessage();

        let newPostJsx;

        let continueButton = this.state.isPreview ? <Form.Field
            control={Button} primary onClick={() => this.changePreview()}>
            Continue Editing</Form.Field> : null

        let previewPost = this.state.post.Id || this.state.post.Name || this.state.post.Author || this.state.post.Description
            ? <Form.Field
                control={Button} primary onClick={() => this.changePreview()}>
                Preview Post</Form.Field> : null

        let form = <Form onSubmit={this.handleSubmit} noValidate>
            <Form.Group widths='equal'>
                <Form.Field
                    autoComplete='off'
                    name='Name'
                    value={Name}
                    onChange={this.handleChange}
                    {...errorObj.Name}
                    control={Input}
                    label='Title'
                    placeholder='Title' />
                <Form.Field
                    autoComplete='off'
                    name='Author'
                    value={Author}
                    onChange={this.handleChange}
                    {...errorObj.Author}
                    control={Input}
                    label='Author'
                    placeholder='Author' />
                <Form.Field
                    name='Category'
                    value={Category}
                    onChange={this.handleChange}
                    control={Select}
                    options={categories}
                    label='Category'
                    placeholder='Category' />
            </Form.Group>
            <div className={descriptionClassNames}>
                <label>Description</label>
                <ReactQuill
                    name='Description'
                    value={Description}
                    {...errorObj.Description}
                    onChange={this.handleDesriptionChange} />
            </div>
            <Form.Group>
                <Form.Field
                    control={Button} primary>{buttonTitle}</Form.Field>
                {previewPost}
            </Form.Group>
        </Form>

        let post = <Post previewPost="true" post={this.state.post} ></Post>

        let pageContent = this.state.isPreview ? post : form;

        if (!this.state.isLoading) {
            newPostJsx = <Container textAlign='justified'>
                <b>{pageTitle}</b>
                <Divider />
                {[...validationMessage]}
                {pageContent}
                <br />
                {continueButton}
            </Container>
        } else {
            newPostJsx = <Dimmer active><Loader /></Dimmer>
        }

        return newPostJsx
    }
}

export default NewPost