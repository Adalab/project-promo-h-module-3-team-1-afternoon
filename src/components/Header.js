import React from 'react';

const Header = (props) => {
  return (
    <header className="header">
      <a href={props.linkHeader}>
        <div className="header__photo">
        </div>
      </a>
    </header>
  );

}

export default Header;