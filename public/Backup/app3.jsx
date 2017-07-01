var Welcome = React.createClass({
    getDefaultProps: function(){
        
        return{
            name: 'Reactname',
            message: 'defaultMessage'
        };
    },

    onBtnClick:function (e){
        e.preventDefault();
        var urs = this.refs.user.value;
        alert(urs);
    },
    render:function(){
    var name= this.props.name;
    var message= this.props.message;
       return(<div>
<h1>Hellow {name}</h1>
<p>This is form a component{message}</p>

<form onSubmit={this.onBtnClick}>
    <input type="text" ref="user"/>
    <button>Button1</button>
</form>
       </div>);
   }});

   ReactDOM.render(<Welcome name='TestingApp' message="Test Message"/>, document.getElementById('app'));