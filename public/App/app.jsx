var React = require('react');//import
var ReactDOM = require('react-dom');//Import

var {Route, Router, IndexRoute, hashHistory}=require('react-router');
var Main=require('Main');
var Navbar=require('Navbar');
var Aboutus=require('Aboutus');
var Weather=require('Weather');
var Services=require('Services');
var Locators=require('Locators');

var Greeter = require('Weather');//Import 

var firstName = 'Amarjeet';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="Aboutus" component={Aboutus}/>
    <Route path="Services" component={Services}/>
      <Route path="Locators" component={Locators}/>
      <IndexRoute component={Weather}/>
      </Route>
      </Router>,
  document.getElementById('app')
);
