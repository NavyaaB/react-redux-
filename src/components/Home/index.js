
import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../constants/postActions';
import styles from '../styles.css';

class Home extends React.Component {
    handleClick = (e, id) => {
        e.preventDefault();
        this.props.deleteVehicle(id);
    }

    componentDidMount() {
        // console.log('mounted');
        this.props.fetchData();
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        //console.log(this.props);
        const vehiclesItems = this.props.home.map((vehicle, index) => (
            <tbody key={vehicle.id}>
                <tr key={vehicle.id}>
                    <td> {vehicle.model} </td>
                    <td> {vehicle.make} </td>
                    <td> {vehicle.year} </td>
                    <td> <button className="delete-btn" onClick={(e) => this.handleClick(e, vehicle.id)}>Delete</button> </td>
                </tr>
            </tbody>
        ))
        return (
            <div className="container">
                <div className="home">
                    <table>
                        <thead>
                            <tr className="table-heading">
                                <th>Make</th>
                                <th>Model</th>
                                <th>Year</th>
                                <th></th>
                            </tr>
                        </thead>
                        {vehiclesItems}
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    home: state.home.items,
});

const mapDispatchToProps = dispatch => ({
    deleteVehicle: id => dispatch({ type: 'REMOVE_VEHICLE', id: id }),
    fetchData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

