var React = require('react');
var WeatherData = React.createClass({
    render: function () {
      var cityname = this.props.cityname;
      var temp = this.props.temp;
      var humidity = this.props.humidity;
      
      return (
        <div>
          <h1>City Name {cityname}!</h1>
          <h1>Temp {temp}!</h1>
          <h1>Humidity {humidity}!</h1>
        </div>
      );
    }
});

module.exports = WeatherData;