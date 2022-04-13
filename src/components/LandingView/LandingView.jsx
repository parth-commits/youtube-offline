import React, { Component } from "react";
import './LandingView.css';
import LandingLogoView from "../LandingLogo/LandingLogoView";
import ContentView from "../ContentView/ContentView";

class LandingView extends Component {
    render() {
        return (
            <div className="background">
                <LandingLogoView></LandingLogoView>
                <ContentView></ContentView>
            </div>
        );
    }
}

export default LandingView;