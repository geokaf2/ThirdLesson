import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class CityList extends Component {
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°C)</th>
                        <th>Humidity (%)</th>
                        <th>Pressure (hpa)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

    renderWeather(cityData){

        const tempData = cityData.list.map(weather => (weather.main.temp - 273.15)); //convert to celcius
        const humidityData = cityData.list.map(weather => weather.main.humidity);
        const pressureData = cityData.list.map(weather => weather.main.pressure);
        
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={cityData.city.id}>
                <td>                    
                    <div className="cityName">{cityData.city.name}</div>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>                
                <td>
                    <Chart width={180} height={120} color="red" data={tempData} units="°C"/>
                </td>
                <td>
                    <Chart width={180} height={120} color="blue" data={humidityData} units="%"/>
                </td>
                <td>
                    <Chart width={180} height={120} color="green" data={pressureData} units="hpa"/>
                </td>
            </tr>
        )
    }
}

function mapStateToProps({weather}){ // from the state we want state.weather
    return {
        weather // since key is equal to value name then just put weather
    };
}

export default connect(mapStateToProps) (CityList);