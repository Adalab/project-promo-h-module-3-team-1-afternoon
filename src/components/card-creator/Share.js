import React from 'react';
import CreateCardButton from './cc-components/CreateCardButton';
import ShareMessage from './cc-components/ShareMessage';

class Share extends React.Component {
  render() {
    return (
      <div>
        <CreateCardButton/>
        <ShareMessage />
      </div> 
    )
  }
}

export default Share;