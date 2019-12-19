import React from 'react';
import CreateCardButton from './CreateCardButton';
import ShareMessage from './ShareMessage';

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