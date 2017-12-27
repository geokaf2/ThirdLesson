import axios from 'axios';

const API_KEY = '3e4859df07c7b41506b006ea8c9cc810';
const FETCH_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchCityWeather(city){

    const url = `${FETCH_URL}&q=${city},us`;

    const request = axios.get(url); //request here is a promise
    
    return {
        type: FETCH_WEATHER,
        payload: request // redux-promise middleware takes 
                         // this promise payload and stop the action 
                         // until the promise resolves
    }
}