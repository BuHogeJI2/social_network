import React from 'react'
import './App.css';
import Main from "./components/Main/Main";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div>
                <HeaderContainer/>
                <Main meId={this.props.meId} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    meId: state.auth.id,
})

export default connect(mapStateToProps, {initializeApp})(App);
