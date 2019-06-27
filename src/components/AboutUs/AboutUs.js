import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

const aboutUs = (props) => (
    <React.Fragment>
        <Container textAlign='center'>About Us</Container>
        <Container textAlign='justified'>
            <Divider />
            <p>This is sample page where some static information about us would be shown.</p>
        </Container>
    </React.Fragment>
);

export default aboutUs;