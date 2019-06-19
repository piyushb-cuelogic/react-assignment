// import { connect } from 'react-redux';
import React, { Component } from "react"
import axios from "../../axios-base"
// import _ from "lodash"
import { Card, Dimmer, Loader, Container } from 'semantic-ui-react'

import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Users extends Component {
  state = {
    users: [],
    isLoading: false
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    axios.get("/users.json")
      .then((response) => {
        let users = [];
        for (let key in response.data) {
          response.data[key].Id = key;
          users.push(response.data[key])
        }
        this.setState({ users: users, isLoading: false });
      })
  }

  render() {
    const users = this.state.users;
    let postsJsx;
    console.log(this.state)
    if (!this.state.isLoading) {
      postsJsx = users.length ?
        users.map(user => {
          return (<Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>{user.fullName}</Card.Header>
                <Card.Meta>{user.userType}</Card.Meta>
                <Card.Description>{user.user_email}</Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>)
        }) : <Container style={{ margin: "0 auto", width: "400px" }} textAlign='justified'>
          <b>No Records found</b>
        </Container>
    } else {
      postsJsx = <Dimmer active><Loader /></Dimmer>
    }

    return (
      <Aux>
        {postsJsx}
      </Aux>
    )
  }
}

export default withErrorHandler(Users, axios);