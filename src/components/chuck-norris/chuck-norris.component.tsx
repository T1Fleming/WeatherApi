import * as React from 'react';
import { IWeatherState } from '../../reducers';


interface IProps extends IWeatherState{
  updateCity: (city: string) => void
  updateWeatherData: (weatherData: any) => void
}

export class WeatherComponent extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props);
    // console.log(props);
  }

public submitData = (e: any) =>{
    e.preventDefault();
    console.log(this.props.city)
    this.props.updateWeatherData(this.props.city)
}


  public render() {
    return (

      <div className="centered-content-container">
            <div>
                <h1><u>The Weather Channel:</u></h1>
            </div>
        <h1 style={ {color: ('Orange') }}> {this.props.city} </h1>

        
        <form onSubmit={this.submitData}>
          City: <input type="string"
            value={this.props.city}
            onChange={(e: any) => this.props.updateCity(e.target.value)} />
          <button className="btn btn-primary" type="submit">Find!</button>
        </form>

        <div>
          Description: {this.props.weatherData.weather ? this.props.weatherData.weather[0].description : "submit a city!"}
        </div>

      </div>
      
      
    );
  }
}