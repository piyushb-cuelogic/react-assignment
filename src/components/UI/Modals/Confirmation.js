import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class ConfirmationModal extends Component {
  state = { open: false }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })
  render() {
    return <Modal
      open={this.state.open}
      trigger={<Icon name="remove circle" link onClick={this.closeConfigShow(false, true)} size="large"></Icon>}
      basic size='small'>
      <Header icon='archive' content={this.props.modalTitle} />
      <Modal.Content>
        <p>{this.props.confirmationMessage}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={this.close}>
          <Icon name='remove' /> No
      </Button>
        <Button color='green' inverted onClick={this.props.confirmationClick}>
          <Icon name='checkmark' /> Yes
      </Button>
      </Modal.Actions>
    </Modal>
  }

}

export default ConfirmationModal