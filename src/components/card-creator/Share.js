import React from 'react';
import CreateCardButton from './cc-components/CreateCardButton';
import ShareMessage from './cc-components/ShareMessage';

class Share extends React.Component {
  render() {
    const { handleCreateCardButton, error, cardUrl } = this.props;
    return (
      <div>
        <CreateCardButton
          handleCreateCardButton={handleCreateCardButton}
          error={error} />

        {cardUrl !== '' ? <ShareMessage cardUrl={cardUrl} /> : ''}
      </div>
    )
  }
}

export default Share;