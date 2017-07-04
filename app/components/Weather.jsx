var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      // location: 'Melbourne',
      // temp: 10
      isLoading: false
    };
  },

  handleSearch: function(location) {
    var that = this;
    debugger;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errMessage) {
      alert(errMessage);
      this.setState({isLoading: false});
    });

    // this.setState({
    //   location: location,
    //   temp: 23
    // });
  },

  render: function() {
    // var location = this.state.location;
    // var temp = this.state.temp;
    var {isLoading, temp, location} = this.state;

    function renderMessage(){
      if(isLoading) {
        return <h3 className="text-center">fetching weather ...</h3>
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }

});

module.exports = Weather;
