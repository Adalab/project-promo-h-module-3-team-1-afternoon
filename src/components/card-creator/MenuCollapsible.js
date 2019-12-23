import React from 'react';
import Design from './Design';
import Form from './Form';
import Share from './Share';
import Collapsibles from './cc-components/Collapsibles';

class MenuCollapsible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            designIsOpen: true,
            formIsOpen: false,
            shareIsOpen: false,
        };
        this.toggleDesignPanel = this.toggleDesignPanel.bind(this);
        this.toggleFormPanel = this.toggleFormPanel.bind(this);
        this.toggleSharePanel = this.toggleSharePanel.bind(this);
    }
    toggleDesignPanel() {
        if (!this.state.designIsOpen) {
            this.setState({
                designIsOpen: true,
                formIsOpen: false,
                shareIsOpen: false,
            });
        } else {
            this.setState({
                designIsOpen: false,
            });
        }
    }
    toggleFormPanel() {
        if (!this.state.formIsOpen) {
            this.setState({
                formIsOpen: true,
                designIsOpen: false,
                shareIsOpen: false,
            });
        } else {
            this.setState({
                formIsOpen: false,
            });
        }
    }
    toggleSharePanel() {
        if (!this.state.shareIsOpen) {
            this.setState({
                shareIsOpen: true,
                formIsOpen: false,
                designIsOpen: false,
            });
        } else {
            this.setState({
                shareIsOpen: false,
            });
        }
    }
    render() {
        return (
            <div className="MenuCollapsible__wrapper create">
                <div className="create__design">
                    <Collapsibles
                        togglePanel={this.toggleDesignPanel}
                        isOpen={this.state.designIsOpen}
                        icon="legend_icon far fa-object-ungroup"
                        title="Diseña"
                        classTitle="create__design--title legend design-view">
                        <Design />
                    </Collapsibles>
                </div>

                <div className="create__fill">
                    <Collapsibles
                        togglePanel={this.toggleFormPanel}
                        isOpen={this.state.formIsOpen}
                        icon="legend_icon far fa-keyboard"
                        title="rellena"
                        classTitle="fill__title legend design-view"
                    //los estilos q se prevalecen son los de: legend design-view
                    //fill__title q serían los estilos del proyecto anterior, descoloca todo
                    >
                        <Form 
                        handleChangeName={this.props.handleChangeName}
                        onChangeHandler={this.onChangeHandler}
                        userName={this.props.name}
                        job={this.props.job}
                        >
                        </Form>
                    </Collapsibles>
                </div>

                <div className="create__share">
                    <Collapsibles
                        togglePanel={this.toggleSharePanel}
                        isOpen={this.state.shareIsOpen}
                        icon="legend_icon logo fas fa-share-alt"
                        title="comparte"
                        classTitle="title legend design-view">
                        <Share />
                    </Collapsibles>
                </div>
            </div>
        );
    }
}

export default MenuCollapsible;
