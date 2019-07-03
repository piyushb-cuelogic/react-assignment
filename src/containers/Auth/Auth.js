import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Validator from "validatorjs"

import { Button, Form, Message, Dimmer, Loader, Grid, Header, Segment } from 'semantic-ui-react'

import * as actions from '../../store/actions/index';

class Auth extends Component {

    state = {
        form: {
            email: "",
            password: "",
            fullName: ""
        },
        isSignup: false,
        errorMessage: {
            email: "",
            password: ""
        },
        isLoading: false,
        auth: {
            authRedirectPath: "/"
        }
    }

    handleChange = (e, { name, value }) => {
        let form = { ...this.state.form }
        form[name] = value;
        this.setState({ form });
    }

    handleSubmit = () => {
        if (!this.validate()) {
            let data = { ...this.state.form };
            this.props.onAuth(data, this.state.isSignup);
        }
    }

    validate = () => {
        const rules = {
            email: 'required|email|min:6|max:45',
            password: 'required|min:6|max:20',
            fullName: 'required|min:6|max:35'
        };

        let form = {...this.state.form};

        if (!this.state.isSignup) {
            delete form.fullName;
            delete rules.fullName;
        }

        console.log(form, rules)

        let validation = new Validator(form, rules);
        let isError = validation.fails();
        this.setState({ errorMessage: validation.errors.errors });
        return isError;
    }

    getValidationMessages = () => {
        let validationMessages = [];
        if (this.state.errorMessage.email) {
            validationMessages.push(<Message key="1"
                size='mini'
                error
                content={this.state.errorMessage.email} />)
        }
        if (this.state.errorMessage.password) {
            validationMessages.push(<Message key="2"
                size='mini'
                error
                content={this.state.errorMessage.password} />)
        }
        if (this.state.errorMessage.fullName) {
            validationMessages.push(<Message key="3"
                size='mini'
                error
                content={this.state.errorMessage.fullName} />)
        }
        return validationMessages;
    }

    toggleButtons = () => {
        this.setState({
            isSignup: !this.state.isSignup,
            errorMessage: []
        });
    }

    render() {

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }
        let { email, password, fullName } = this.state.form;

        let authJsx;
        let hrefLink = "#";
        const buttonTitle = this.state.isSignup ? "Sign Up" : "Sign In";
        const switchButtonTitle = this.state.isSignup ? "Sign in" : "Sign up";
        let validationMessages = this.getValidationMessages();

        if (!this.state.isLoading) {
            authJsx = <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
                {authRedirect}
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        {buttonTitle}
                    </Header>
                    {validationMessages.length ? <Segment style={{ display: "block" }} stacked>
                        {[...validationMessages]}
                    </Segment> : null}
                    <Form size='large' onSubmit={this.handleSubmit} noValidate>
                        <Segment stacked>
                            {
                                this.state.isSignup ?
                                    <Form.Input
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='Full Name'
                                        autoComplete='off'
                                        name='fullName'
                                        value={fullName}
                                        onChange={this.handleChange} /> : null
                            }
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='E-mail address'
                                autoComplete='off'
                                name='email'
                                value={email}
                                onChange={this.handleChange} />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                autoComplete='off'
                                name='password'
                                value={password}
                                onChange={this.handleChange}
                            />
                            <Button color='teal' fluid size='large'>
                                {buttonTitle}
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        {this.state.isSignup ? "" : "New to us?"} <a href={hrefLink}
                            onClick={this.toggleButtons}>{switchButtonTitle}</a>
                    </Message>
                </Grid.Column>
            </Grid>
        } else {
            authJsx = <Dimmer active><Loader /></Dimmer>
        }

        return authJsx
    }
}

const mapStateToProps = state => {
    return {
        loading: state.isLoading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (data, isSignup) => dispatch(actions.auth(data, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);