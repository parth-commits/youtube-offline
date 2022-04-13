import React, { Component } from "react";

import { content } from "../../values/strings";
import './ModalView.css';

class ModalView extends Component {


    handleClick = () => {
        this.props.handleModalClick();
    }
    notclick = (e) => {
        // do nothing
        console.warn(window.innerWidth);
        e.stopPropagation();
    }

    render() {
        return(
            <div id="my-modal" className={`ModalView ${this.props.state.isModalOpen ? 'modal-is-open' : 'modal-is-closed'}`} onClick={this.handleClick}>
                <div style={{ width: '90vw', height: '80vh', maxWidth: '400px' }} className="modal-wrapper" onClick={this.notclick}>
                    <div className="modal-logo">
                        <i className="close-button fas fa-times" onClick={this.handleClick}></i>
                        <p className="modal-text">{content.landing.usagePolicy.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalView;
