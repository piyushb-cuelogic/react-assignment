import React, { Component } from "react"
import axios from "../../axios-base"
import sortBy from "lodash/sortBy"
import { Card, Dimmer, Loader, Container, Select } from 'semantic-ui-react'
import {API_ENDPOINTS} from "../../constants"

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import ErrorBoundary from "../../hoc/ErrorBoundary/ErrorBoundary"

class Users extends Component {
  state = {
    users: [],
    sortBy: "created_on",
    isLoading: false
  }

  sortByOptions = [
    { key: "created_on", value: "created_on", text: "Created Time" },
    { key: "fullName", value: "fullName", text: "Name" }
  ];

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    axios.get(API_ENDPOINTS.USERS)
      .then((response) => {
        let users = [];
        for (let key in response.data) {
          response.data[key].Id = key;
          users.push(response.data[key])
        }
        this.setState({ users: users, isLoading: false });
      })
  }

  sortChangeHandler = (e, options) => {
    let sorted = sortBy(this.state.users, (user) => {
      if (options.value === "updated_on" || options.value === "created_on") {
        return new Date(parseInt(user[options.value]) * 1000)
      }
      if (typeof user[options.value] === "string") {
        return user[options.value].toLowerCase();
      }
      return user[options.value];
    });
    this.setState({ sortBy: options.value, users: sorted });
  }

  render() {
    const users = this.state.users;
    let postsJsx;
    if (!this.state.isLoading) {
      postsJsx = users.length ?
        <React.Fragment>
          <div className="new-post-container">
            <Select
              value={this.state.sortBy}
              options={this.sortByOptions}
              onChange={this.sortChangeHandler} />
          </div>
          <Card.Group>
            {users.map(user => {
              return (<Card key={user.Id}>
                <Card.Content>
                  <Card.Header>{user.fullName}</Card.Header>
                  <Card.Meta>{user.userType}</Card.Meta>
                  <Card.Description>{user.user_email}</Card.Description>
                </Card.Content>
              </Card>)
            })}
          </Card.Group>
        </React.Fragment>
        : <Container style={{ margin: "0 auto", width: "400px" }} textAlign='justified'>
          <b>No Records found</b>
        </Container>
    } else {
      postsJsx = <Dimmer active><Loader /></Dimmer>
    }

    return (
      <ErrorBoundary>
        {postsJsx}
      </ErrorBoundary>
    )
  }
}

export default withErrorHandler(Users, axios);