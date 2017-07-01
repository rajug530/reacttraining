var React = require('react');
var {Link, IndexLink} = require('react-router');
var Navbar = React.createClass({
    render:function(){
        return (
            <div>
                
            <h3>Nav Component</h3>
            <IndexLink to="/" activateStyle={{fontWeight:'bold'}}>Weather</IndexLink>
            <Link to="/Aboutus" activateStyle={{fontWeight:'bold'}}>Aboutus</Link>
            <Link to="/Services" activateStyle={{fontWeight:'bold'}}>Services</Link>
            <Link to="/Locators" activateStyle={{fontWeight:'bold'}}>Locators</Link>
            </div>
        )
    }
});
module.exports=Navbar;