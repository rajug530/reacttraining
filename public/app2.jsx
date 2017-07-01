var Welcome = React.createClass({
    getDefaultProps: function(){
        
        return{
            name: 'Reactname',
            message: 'defaultMessage'
        };
    },
    render:function(){
    var name= this.props.name;
    var message= this.props.message;
       return(<div>
<h1>Hellow {name}</h1>
<p>This is form a component</p>

       </div>);
   }});

   ReactDOM.render(<Welcome name='TestingApp' message="Test Message"/>, document.getElementById('app'));