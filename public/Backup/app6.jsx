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

var firstName = 'Amarjeet';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
