var React=require("react");
var LoginForm=React.createClass({
    getInitialState: function(){
        return {
            account: '',
            password: ''
        };
    },
    handleSubmit: function(e){
        e.preventDefault();
        alert(this.state.account+','+this.state.password);
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhs, status, err){
                this.setState({data: comments});
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });

    },
    handleAccountChanged: function(e){
        this.setState({account:e.target.value});
    },
    handlePasswordChanged: function(e){
        this.setState({password:e.target.value});
    },
    render: function(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input className="input_account" onChange={this.handleAccountChanged} type="text" placeholder="账号" />
                <input className="input_password" onChange={this.handlePasswordChanged} type="password" placeholder="密码" />
                <input className="button_submit" type="submit" value="确定" />
            </form>
        );
    }
});
module.exports=LoginForm;