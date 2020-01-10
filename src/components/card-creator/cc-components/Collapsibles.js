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
    const { classTitle, icon, title, isOpen, children } = this.props;
    const arrowStyling = isOpen ? "fa-chevron-up" : "fa-chevron-down";
    return (
      <div>
        <div onClick={ev => this.handleClick(ev)} id="js-toggle" className={classTitle}>
          <i className={icon} />
          <h2 className="legend_title">{title}</h2>
          <i className={`fas ${arrowStyling} legend_arrow`} />
        </div>
        {isOpen ? <div>{children}</div> : null}
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
