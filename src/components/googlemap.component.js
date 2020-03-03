import React, {Component} from 'react';
import axios from 'axios';
import {Map, GoogleApiWrapper, Marker, Polyline} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'relative'
}

export class GoogleMap extends Component{

    state = {
        device_id: [],
        lat: [],
        lng: []
    }
    

    componentDidMount(){
        axios.get('http://localhost:5000/locations')
        .then(response => {
            this.setState({
                device_id: response.data.map(location => (location.device_id)),
                lat: response.data.map(location => Number(location.lat)),
                lng: response.data.map(location => Number(location.lng)),
            });
            // console.log(this.state.lat);
            // console.log(this.state.lng);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render(){
        const path = []
        console.log(this.state.lat.length);
        for(let i=0; i<this.state.lat.length; i++){
            path[i] = {lat: this.state.lat[i] , lng:this.state.lng[i] }
        }
        return(
            <Map 
                google = {this.props.google}
                zoom = {17}
                style = {mapStyles}
                initialCenter={{lat: 13.846270, lng: 100.568631}}>
                <Polyline
                    path={path}
                    geodesic={true}
                    options={{
                        strokeColor: "#ff2527",
                        strokeOpacity: 1,
                        strokeWeight: 5,
                        icons: [
                            {
                                icon: 'hello',
                                offset: "0",
                                repeat: "20px"
                            }
                        ]
                    }}
                />
            </Map>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDx7BibXT9eKqKd-uslFwDmYVzYr1CBu70'
})(GoogleMap);