import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import Logout from './containers/Auth/Logout/Logout';
import Home from './containers/Home/Home';
import Users from "./containers/Users/Users"
import Post from './containers/Posts/Post/Post';
import NewPost from './containers/Posts/NewPost';
import Page404 from "./components/UI/Util/404";
import AboutUs from "./components/AboutUs/AboutUs"
import ContactUs from "./components/ContactUs/ContactUs"
import UnPublishedPosts from "./containers/UnPublishedPosts/UnPublishedPosts"
import * as actions from './store/actions/index';

import './App.css';

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let userType = localStorage.getItem("userType")
    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" component={asyncAuth} />
        <Route path="/post" exact component={Post} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/posts/:id" exact component={Post} />
        <Route path="/posts/edit/:id" exact component={NewPost} />
        <Route path="/post/new" exact component={NewPost} />
        <Route component={Page404} />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/contact-us" exact component={ContactUs} />
          {
            userType === "ADMIN" ?
              <Route path="/unpublished" exact component={UnPublishedPosts} /> : null
          }
          {
            userType === "ADMIN" ?
              <Route path="/users" component={Users} /> : null
          }
          <Route path="/logout" component={Logout} />
          <Route path="/post" exact component={Post} />
          <Route path="/posts/:id" exact component={Post} />
          <Route path="/posts/edit/:id" exact component={NewPost} />
          <Route path="/post/new" exact component={NewPost} />
          <Route component={Page404} />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// export default App;
