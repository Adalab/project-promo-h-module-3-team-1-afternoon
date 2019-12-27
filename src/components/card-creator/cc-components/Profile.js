import React, { Component } from "react";
import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
    const { photo } = this.props.photo;
    console.log(photo)
    console.log(this.props.photo)
    return (
      <div className="profile">
        <div className="profile__photo " style={{ backgroundImage: `url(${this.props.photo})` }}>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  photo: PropTypes.string.isRequired
};

export default Profile;