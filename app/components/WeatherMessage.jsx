var React = require('react');

// var WeatherMessage = React.createClass({
//
//   render: function() {
//     var {temp, location} = this.props;
//
//     return (
//       <div>
//         <h3>{location} temp is {temp}</h3>
//       </div>
//     );
//   }
//
// });

//var WeatherMessage = (props) =>{
var WeatherMessage = ({temp, location}) =>{
  return (
    <div>
      {/*<h3>{props.location} temp is {props.temp}</h3>*/}
      <h3 className="text-center">{location} temp is {temp}</h3>
    </div>
  )
};
module.exports = WeatherMessage;
