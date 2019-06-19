import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkValidity } from "../../shared/utility"
import { Redirect } from 'react-router-dom';

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
        let stateProps = {
            email: "",
            password: ""
        };

        const rules = {
            email: {
                required: true,
                minLength: 6,
                maxLength: 45,
                isEmail: true,
            },
            password: {
                required: true,
                minLength: 6,
                maxLength: 20
            },
            fullName: {
                required: true,
                minLength: 6,
                maxLength: 35
            }
        };

        if (this.state.isSignup) {
            stateProps.fullName = "";
        }

        this.setState({
            errorMessage: stateProps
        });

        let isError = false;
        let errorMessage = { ...this.state.errorMessage };
        let emailValidity = checkValidity(this.state.form.email, rules.email)
        let passwordlValidity = checkValidity(this.state.form.password, rules.password)

        if (emailValidity.required) {
            errorMessage.email = "Please enter email"
            isError = true;
        } else if (emailValidity.minLength) {
            errorMessage.email = "Email address should at least contain " + rules.email.minLength + " characters";
            isError = true;
        } else if (emailValidity.maxLength) {
            errorMessage.email = "Email address should at max contain " + rules.email.maxLength + " characters";
            isError = true;
        } else if (emailValidity.isEmail) {
            errorMessage.email = "Invalid email address";
            isError = true;
        }

        if (passwordlValidity.required) {
            errorMessage.password = "Please enter password";
            isError = true;
        } else if (passwordlValidity.minLength) {
            errorMessage.password = "Password should at least contain " + rules.password.minLength + " characters";
            isError = true;
        } else if (passwordlValidity.maxLength) {
            errorMessage.password = "Password should at max contain " + rules.password.maxLength + " characters";
            isError = true;
        }

        if (this.state.isSignup) {
            let fullNamelValidity = checkValidity(this.state.form.fullName, rules.fullName)
            if (fullNamelValidity.required) {
                errorMessage.fullName = "Please enter full name";
                isError = true;
            } else if (fullNamelValidity.minLength) {
                errorMessage.fullName = "Full name should at least contain " + rules.fullName.minLength + " characters";
                isError = true;
            } else if (fullNamelValidity.maxLength) {
                errorMessage.fullName = "Full name should at max contain " + rules.fullName.maxLength + " characters";
                isError = true;
            }
        }

        if (isError) {
            this.setState({ errorMessage });
        }

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



        // return (
        //     <div className={classes.Auth}>
        //         {authRedirect}
        //         {errorMessage}
        //         <form onSubmit={this.submitHandler}>
        //             {form}
        //             <Button
        //                 btnType="Success"
        //             >SUBMIT</Button>
        //         </form>
        //         <Button
        //             clicked={this.switchAuthModeHandler}
        //             btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
        //     </div>
        // );

    // componentDidMount () {
    //     if ( !this.props.buildingBurger && this.props.authRedirectPath !== '/' ) {
    //         this.props.onSetAuthRedirectPath();
    //     }
    // }

    // submitHandler = (event) => {
    //     event.preventDefault();
    //     // if (!this.validateForm()) {
    //     //     return;
    //     // }
    //     this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    // }

    // switchAuthModeHandler = () => {
    //     this.setState(prevState => {
    //         var newState = JSON.parse(JSON.stringify(prevState));
    //         if(prevState.isSignup) {
    //             newState.controls.fullName = {
    //                 elementType: 'input',
    //                 elementConfig: {
    //                     type: 'text',
    //                     placeholder: 'Full Name'
    //                 },
    //                 value: '',
    //                 validation: {
    //                     required: true,
    //                     isEmail: false
    //                 },
    //                 valid: false,
    //                 touched: false
    //             };
    //             newState.isSignup = !newState.isSignup;
    //         } else {
    //             delete newState.controls.fullName;
    //             newState.isSignup = !newState.isSignup;
    //         }
    //         return newState;
    //     });
    // }

    // validateForm = () => {
    //     let errorMessage = "";
    //     if (!this.state.controls.email.value && !this.state.controls.password.value) {
    //         errorMessage = "Please enter mail address & password";
    //     } else if (!this.state.controls.email.value) {
    //         errorMessage = "Please enter mail address"
    //     } else if (!this.state.controls.password.value) {
    //         errorMessage = "Please enter password"
    //     }
    //     if (errorMessage) {
    //         this.setState({
    //             errorMessage: (
    //                 <p>{errorMessage}</p>
    //             )
    //         });
    //         return false;
    //     }
    //     return true;
    // }

    // componentDidUpdate() {
    //     if (this.props.error) {
    //         this.setState({
    //             errorMessage: (
    //                 <p>{this.props.error.message}</p>
    //             )
    //         });
    //     }
    // }