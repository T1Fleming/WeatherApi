import { weatherTypes } from "./chuck-norris.types";
// import * as fs from 'fs';
// import { clickerTypes } from "../clicker/clicker.types";



export const updateCity = (city: string) => {
  return {
    payload: {
      city
    },
    type: weatherTypes.CHANGE_CITY,
  }

}

export const updateWeatherData = (city: string) => (dispatch: any) => {

  // File with API key
  // const key = fs.readFileSync("../../../key.txt", "utf-8");
  console.log('fetching data for ' + city + '...')

  const key = '';

  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + ' &APPID=' + key)
    .then(resp => resp.json())
    .then(data => {
      // console.log('obtained weather from: '+city)
      dispatch({
        payload: {
          city,
          data
        },
        type: weatherTypes.GET_WEATHER,
      })
    })
    .catch(err => {
      // console.log(err);
    })


}