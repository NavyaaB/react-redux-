import React from 'react';
import { connect } from 'react-redux';
// import { APP_LOAD } from '../constants/actionTypes';
import Home from '../components/Home';
//import { store } from '../store';


const mapStateToProps = state => {
    return {
        ...state.home,
        appName: 'Technical Exercise'
    }
};

const mapDispatchToProps = dispatch => ({

});

class App extends React.Component {

    componentWillReceiveProps(nextProps) {
    }

    componentWillMount() {
    }

    render() {
        return (
            <Home />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
