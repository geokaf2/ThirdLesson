import { combineReducers } from 'redux';
import WeatherReducer from './fetch_weather_reducer';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
