import React, { useState, useEffect } from 'react'
import { Button, Form, Input, Container, Divider, Message, Dimmer, Loader, Select } from 'semantic-ui-react'
import FromInput from "../../components/UI/Input/Input"
import ReactQuill from 'react-quill';
import Validator from "validatorjs";
import axios from "../../axios-base";
import Post from "./Post/Post"
import forIn from "lodash/forIn"
import { API_ENDPOINTS } from "../../constants"

const NewPost = (props) => {
    const [Name, setName] = useState("");
    const [Author, setAuthor] = useState("");
    const [Description, setDescription] = useState("");
    const [Category, setCategory] = useState("Sports");
    const [categories, setCategories] = useState([]);
    const [isPreview, setIsPreview] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [validationMessages, setValidationMessages] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        axios.get(API_ENDPOINTS.CATEGORIES)
            .then((categoriesResponse) => {
                setCategories(categoriesResponse.data);
                if (!props.match.params.id) {
                    setIsLoading(false);
                    return;
                }
                axios.get(API_ENDPOINTS.getPostApi(props.match.params.id))
                    .then((postsResponse) => {
                        setIsLoading(false);
                        let post = postsResponse.data;
                        setName(post.Name);
                        setAuthor(post.Author);
                        setDescription(post.Description);
                        setCategory(post.Category);
                    });
            });
    }, []);

    const handleChange = (e, { name, value }) => {
        switch (name) {
            case "Name":
                setName(value);
                break;
            case "Author":
                setAuthor(value);
                break;
            case "Category":
                setCategory(value);
                break;
            case "Description":
                setDescription(value);
                break;
        }
    }

    const handleDesriptionChange = (content, delta, source, editor) => {
        setDescription(content);
    }

    const handleSubmit = () => {
        setName(Name);
        setAuthor(Author);
        setCategory(Category);
        setDescription(Description);
        let validation = new Validator({
            Name,
            Author,
            Description
        }, {
                Name: 'required',
                Author: 'required',
                Description: 'required'
            });
        if (validation.passes()) {
            setIsLoading(true);
            if (props.match.params.id) {
                editRequest()
            } else {
                createRequest();
            }
        } else {
            setValidationMessages(getValidationMessages(validation.errors.errors));
        }
    }

    const getValidationMessages = (errors) => {
        let validationMessages = [];
        forIn(errors, (value, key) => {
            validationMessages.push(<Message key={key}
                error
                content={value[0]} />);
        });
        return validationMessages;
    }

    const getErrorObj = () => {
        let errorObj = {};
        validationMessages.forEach(item => {
            errorObj[item.key] = { error: true };
        });
        return errorObj;
    }

    const createRequest = () => {
        let newPost = {
            Name,
            Author,
            Category,
            Description,
            created_on: new Date().getTime() / 1000,
            updated_on: new Date().getTime() / 1000
        };
        setIsLoading(true);
        axios.post(API_ENDPOINTS.POSTS, newPost)
            .then(response => {
                setIsLoading(false);
                props.history.push({
                    pathname: "/",
                    state: {
                        newPostCreated: true
                    }
                });
            })
    }

    const editRequest = () => {
        let editedPost = {
            Name,
            Author,
            Category,
            Description,
            updated_on: new Date().getTime() / 1000,
            isPublished: true
        };
        axios.put(API_ENDPOINTS.getPostApi(props.match.params.id), editedPost)
            .then(response => {
                setIsLoading(false);
                props.history.push({
                    pathname: "/",
                    state: {
                        newPostCreated: true
                    }
                });
            });
    }

    const changePreview = () => {
        let isPreviewNegation = !isPreview
        setIsPreview(isPreviewNegation);
    }

    let errorObj = getErrorObj();

    let categoryList = [];
    categories.forEach(cat => categoryList.push({ key: cat, value: cat, text: cat }));

    const pageTitle = props.match.params.id ? "Edit post" : "Create new post"
    const descriptionClassNames = errorObj.Description ? "field error" : "field";
    const buttonTitle = props.match.params.id ? "Update Post" : "Create Post"

    let continueButton = isPreview ? <Form.Field
        control={Button} primary onClick={() => changePreview()}>
        Continue Editing</Form.Field> : null

    let previewPost = Name || Author || Description
        ? <Form.Field
            control={Button} primary onClick={() => changePreview()}>
            Preview Post</Form.Field> : null

    let form = <Form onSubmit={handleSubmit} noValidate>
        <Form.Group widths='equal'>
            <FromInput
                name='Name'
                val={Name}
                handleChange={handleChange}
                inputProperties={{...errorObj.Name}}
                label='Name'
                placeholder='Name'
            />
            <FromInput
                name='Author'
                val={Author}
                handleChange={handleChange}
                inputProperties={{...errorObj.Author}}
                control={Input}
                label='Author'
                placeholder='Author' />
            <FromInput
                elementType="select"
                name='Category'
                val={Category}
                handleChange={handleChange}
                options={categoryList}
                label='Category'
                placeholder='Category' />
        </Form.Group>
        <div className={descriptionClassNames}>
            <label>Description</label>
            <ReactQuill
                name='Description'
                value={Description}
                {...errorObj.Description}
                onChange={handleDesriptionChange} />
        </div>
        <Form.Group>
            <Form.Field
                control={Button} primary>{buttonTitle}</Form.Field>
            {previewPost}
        </Form.Group>
    </Form>
    let post = {
        Name,
        Author,
        Description,
        Category
    };
    let postJsx = <Post previewPost="true" post={post} ></Post>
    let pageContent = isPreview ? postJsx : form;

    let newPostJsx;
    if (!isLoading) {
        newPostJsx = <Container textAlign='justified'>
            <b>{pageTitle}</b>
            <Divider />
            {[...validationMessages]}
            {pageContent}
            <br />
            {continueButton}
        </Container>
    } else {
        newPostJsx = <Dimmer active><Loader /></Dimmer>
    }

    return newPostJsx
}

export default NewPost;