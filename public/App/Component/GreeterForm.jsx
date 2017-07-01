var React = require('react');
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var password = this.refs.password.value;
    var email = this.refs.email.value;
    var country = this.refs.country.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

if (email.length > 0) {
      this.refs.email.value = '';
      updates.email = email;
    }

    if (password.length > 0) {
      this.refs.password.value = '';
      updates.password = password;
    }

    if (country.length > 0) {
      this.refs.country.value = '';
      updates.country = country;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name"/>
        </div>
        <div>
          <input type="email" ref="email" placeholder="Enter Email"/>
        </div>
                <div>
          <input type="password" ref="password" placeholder="Enter Password"/>
        </div>
                <div>
          <input type="text" ref="country" placeholder="Enter Country"/>
        </div>
        <div>
          <textarea ref="message" placeholder="Enter message"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

module.exports = GreeterForm;