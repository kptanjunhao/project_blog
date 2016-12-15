var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Nav = React.createClass({
    getInitialState: function(){
        var show;
        if (document.body.clientWidth < 750){
            show = false;
        }else{
            show = true
        }
        return {
            active: this.props.active,
            show: show,
        };
    },
    handleClick: function(title){
        this.setState({
            active: title,
            show: !this.state.show,
        });
    },
    render: function(){
        var itemNodes = this.props.items.map(function(title){
            var active = (title == this.state.active) ? 'active' : '';
            return(
                <NavItem toShow={this.state.show} title={title} OnClick={this.handleClick} active={active} key={title}/>
            );
        }.bind(this));

        return(
            <div className='nav-main'>
                <div className='wrap'>
                    <ul>
                        {itemNodes}
                    </ul>
                    <div className='search-box'><p className='text'>搜索</p></div>
                </div>
            </div>
        );
    }
});

var NavItem = React.createClass({
    handleClick: function(e) {
        e.preventDefault();
        if (this.props.active != '' && document.body.clientWidth >= 750){
            return;
        }
        this.props.OnClick(this.props.title)
    },
    render: function(){
        var style;
        if (document.body.clientWidth < 750){
            if (this.props.active != '' || this.props.toShow){
                style = {display:'block'};
            }else{
                style = {display:'none'};
            }
        }
        return(
            <li style={style} className={this.props.active}>
                <a onClick={this.handleClick}>{this.props.title}</a>
            </li>
        );
    }
});

module.exports = Nav;

