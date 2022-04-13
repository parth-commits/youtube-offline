import React, { Component } from "react";
import './LandingView.css';
import LandingLogoView from "../LandingLogo/LandingLogoView";

class LandingView extends Component {
    render() {
        return (
            <div className="background">
                <LandingLogoView></LandingLogoView>
                
            </div>
        );
    }
}

export default LandingView;