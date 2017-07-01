
var React = require('react');
var GreeterForm = require('GreeterForm');
var GreeterMessage = require('GreeterMessage');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name,
        email: this.props.email,
        password: this.props.password,
        country: this.props.country,
        message: this.props.message
    };
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var email = this.state.email;
    var password = this.state.password;
    var country = this.state.country;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message} email={email} password={password} country={country}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports = Greeter;