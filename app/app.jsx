// need to import libs as shown below since we have removed the <script src=''/> statements
// in index.html (exist still in index_old.html)
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// EFFECTIVLY EQUAL => var Route = require('react-router').Route

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
//require('style!css!applicationStyles'); //<- for css
require('style!css!sass!applicationStyles');  // for scss


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
