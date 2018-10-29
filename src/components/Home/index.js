
import React from 'react';
import { connect } from 'react-redux';
import { REMOVE_VEHICLE } from '../../constants/actionTypes';
import VehicleList from '../VehicleList';
import { fetchData } from '../../constants/postActions';

class Home extends React.Component {
    handleClick = (e,id) => {
        console.log('ppp');
        e.preventDefault();
        this.props.deleteVehicle(id);
    }
    componentWillMount() {
        // this.props.fetchData();
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
                    <td> <button onClick={(e)=>this.handleClick(e, vehicle.id)}>Delete</button> </td>
                </tr>
            </tbody>
            ))
        return (
            <div>
            <table>
                <thead>
                    <tr className="table-heading">
                        <th>Make</th><th>Model</th><th>Year</th><th></th>
                    </tr>
                </thead>
                
                    {vehiclesItems}
                
            </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    home: state.home.items,
});

const mapDispatchToProps = dispatch => ({
    deleteVehicle: id => dispatch({ type: 'REMOVE_VEHICLE', id: id}),
    fetchData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

