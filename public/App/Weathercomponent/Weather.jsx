
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherData = require('WeatherData');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  
  getInitialState: function () {
    return {
       cityname: 'Miami',
       temp: '88',
      isLoading: false
    };
  },


  handleNewData: function (updates) {
    var  that = this;
  this.setState({isLoading: true});
    OpenWeatherMap.getTemp(updates.cityname).then(function(data){
    that.setState(
      {
        cityname: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        isLoading: false
      });
    },
    function(errorMessage)
    {
      //this.setState({isLoading: false});
      alert(errorMessage);
    }
    );
  },
  render: function () {

    var {isLoading, temp, cityname, humidity} = this.state;
    function renderMessage(){
      if(isLoading)
      {
        return <h3>Fetching Weather</h3>;
      }
      else{
        return <WeatherData temp={temp} cityname={cityname} humidity={humidity}/>;
      }
    }
    return (
      <div>
        {renderMessage()}
        <WeatherForm onNewData={this.handleNewData}/>

      </div>
    );
  }
});

module.exports = Weather;