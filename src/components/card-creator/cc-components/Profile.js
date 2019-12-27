import React, {Component} from "react";
import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
    const {avatar} = this.props.avatar;
    console.log(avatar)
    console.log(this.props.avatar)
    return (
      <div className="profile">
        <div className="profile__avatar " style={{backgroundImage: `url(${this.props.avatar})`}}>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired
};

export default Profile;