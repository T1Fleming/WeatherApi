import { combineReducers } from "redux";
import { weatherReducer } from "./chuck-norris.reducer";

export interface IWeatherState {
  city: string;
  weatherData: any
}

export interface IState {
  weather: IWeatherState,
};

export const state = combineReducers<IState>({
  weather: weatherReducer,
});