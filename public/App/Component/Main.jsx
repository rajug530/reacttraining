var React = require('react');
var Navbar = require('Navbar');
var Main = React.createClass({
    render:function(){
        return (
            <div>
                <Navbar/>
            <h3>Locators Component</h3>
            {this.props.children}
            </div>
        )
    }
});
module.exports=Main;