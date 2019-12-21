import React from "react";
import PropTypes from "prop-types";
import '../../../style/components/Collapsibles.scss';

class Collapsibles extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.togglePanel();
  }

  render() {
    const arrowStyling = this.props.isOpen ? "fa-chevron-up" : "fa-chevron-down";
    return (
      <div>
        <div onClick={ev => this.handleClick(ev)} id="js-toggle" className={this.props.classTitle}>
          <i className={this.props.icon} />
          <h2 className="legend_title">{this.props.title}</h2>
          <i className={`fas ${arrowStyling} legend_arrow`} />
        </div>
        {this.props.isOpen ? <div>{this.props.children}</div> : null}
      </div>
    );
  }
}

Collapsibles.propTypes = {
  togglePanel: PropTypes.func,
  open: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Collapsibles;
