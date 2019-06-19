import React from 'react'
// import _ from 'lodash'
// import { getAuthor } from "../../../shared/utility"
import { Container, Divider } from 'semantic-ui-react'
import Aux from "../../hoc/Aux/Aux"

const aboutUs = (props) => (
    <Aux>
        <Container textAlign='center'>About Us</Container>
        <Container textAlign='justified'>
            <Divider />
            <p>This is sample page where some static information about us would be shown.</p>
        </Container>
    </Aux>
);

export default aboutUs;