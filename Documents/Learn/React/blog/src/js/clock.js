var React = require('react');
var Clock = React.createClass({
    getInitialState: function () {
        return {
            time: '',
        };
    },
    handleUpdateTime: function () {
        var myDate = new Date();;
        var hours = this.fullTimeLength(myDate.getHours());
        var minutes = this.fullTimeLength(myDate.getMinutes());
        var seconds = this.fullTimeLength(myDate.getSeconds());
        var timeStr = hours + ':' + minutes + ':' + seconds;
        this.setState({time: timeStr});
    },
    fullTimeLength: function (num) {
        var number = num + '';
        if (number.length < 2) {
            return '0' + number;
        } else {
            return number;
        }
    },
    componentDidMount: function () {
        var tid = setInterval(this.handleUpdateTime, 1000);
        this.setState({timerId:tid});
    },
    componentWillUnmount: function() {
        clearTimeout(this.state.timerId);
    },
    render: function () {
        var style = {
            WebkitBoxShadow: 'inset 0 0 1px 1px rgba(0, 0, 0, 0.5)',
            MozBoxShadow: 'inset 0 0 1px 1px rgba(0, 0, 0, 0.5)',
            boxShadow: 'inset 0 0 1px 1px rgba(0, 0, 0, 0.5)',
            right: 0,
            textAlign: 'center',
            fontSize: '64px'
        };

        return (
            <div className='clock' style={style}>
                {this.state.time}
            </div>
        );
    }
});
module.exports = Clock;