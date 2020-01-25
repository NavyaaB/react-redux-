import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';

class App extends React.Component {
    render() {
        return (
            <Home />
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.home
    }
};

export default connect(mapStateToProps)(App);
