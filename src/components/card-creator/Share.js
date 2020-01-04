import React from 'react';
import CreateCardButton from './cc-components/CreateCardButton';
import ShareMessage from './cc-components/ShareMessage';

class Share extends React.Component {
  render() {
    return (
      <div>
        <CreateCardButton
          handleCreateCardButton={this.props.handleCreateCardButton}
          error={this.props.error} />

        {this.props.cardUrl !== '' ? <ShareMessage cardUrl={this.props.cardUrl} /> : ''}
      </div>
    )
  }
}

export default Share;