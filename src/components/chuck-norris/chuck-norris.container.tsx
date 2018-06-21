import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { WeatherComponent } from './chuck-norris.component';
import{updateCity, updateWeatherData} from '../../actions/chuck-norris/chuck-norris.actions'

const mapStateToProps = (state: IState) => (state.weather);

export const mapDispatchToProps = {
  updateCity,
  updateWeatherData
};

export const WeatherContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherComponent);
