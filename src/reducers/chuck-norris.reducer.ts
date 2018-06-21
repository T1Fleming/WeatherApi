import { IWeatherState } from '.';
import { weatherTypes } from '../actions/chuck-norris/chuck-norris.types';

const initialState: IWeatherState = {
  city: `Austin`,
  weatherData: {}
}

export const weatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case weatherTypes.CHANGE_CITY:
      return {
        ...state, 
        city: action.payload.city
      };
    case weatherTypes.GET_WEATHER:
    return{
      city: action.payload.city,
      weatherData: action.payload.data
    }
  }

  return state;
};
