var Welcome = React.createClass({
    getDefaultProps: function(){
        return{
            name: 'Reactname',
            message: 'defaultMessage'
        };
    },
//Initial State
getInitialState:function() {
    return{
        name: this.props.name,
        dept: this.props.dept
    };
},

    onBtnClick:function (e){
        e.preventDefault();
        var urs = this.refs.user.value;
        var dept = this.refs.dept.value;
        //set the State
        this.setState({
            name:urs,
            dept: dept
        });
        //alert(urs);
    },

    render:function(){
    var name= this.state.name;
    var dept= this.state.dept;
    var message= this.props.message;
       return(<div>
<h1>Hellow {name}</h1>
<p>This is form a component {dept}</p>

<form onSubmit={this.onBtnClick}>
    <input type="text" ref="user"/>
    <input type="text" ref="dept"/>
    <button>Button1</button>
</form>
       </div>);
   }});

   ReactDOM.render(<Welcome name='TestingApp' message="Test Message"/>, document.getElementById('app'));