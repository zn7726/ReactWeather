var React = require('react');
//
// var About = React.createClass({
//
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     );
//   }
//
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>this is a weather application built on React.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript Framework used.
        </li>
        <li>
          <a href="https://openweathermap.org">Open Weather Map</a> - Used to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
