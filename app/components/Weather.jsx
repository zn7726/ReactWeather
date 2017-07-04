var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

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
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      debugger;
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      debugger;
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });

    // this.setState({
    //   location: location,
    //   temp: 23
    // });
  },

  componentDidMount: function(){
    debugger;
    var location = this.props.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function() {
    // var location = this.state.location;
    // var temp = this.state.temp;
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderError() {
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    function renderMessage(){
      if(isLoading) {
        return <h3 className="text-center">fetching weather ...</h3>
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }

});

module.exports = Weather;
