import React from 'react';
import PaletteList from './cc-components/PaletteList';
import FormList from './cc-components/FormList';
import Share from './cc-components/Share';

class Preview extends React.Component {
  render() {
    return (
      <div className="create">
        <PaletteList/>
        <FormList/>
        <Share/>
      </div>
    )
  }
}

export default Preview;