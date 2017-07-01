var React = require('react');
var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var password = this.props.password;
      var email = this.props.email;
      var country = this.props.country;
      var message = this.props.message;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{email}</p>
          <p>{password}</p>
          <p>{country}</p>
          <p>{message}</p>
        </div>
      );
    }
});

module.exports = GreeterMessage;