var React = require('react');
var CategoryBox = React.createClass({
    render: function () {
        var style = {
            textAlign: 'center',
            borderRight: '1px',
            borderRightColor: '#222',
            borderRightWidth: '1px'
        };

        return (
            <div style={style}>
                CategoryBox
            </div>
        );
    }
});
module.exports = CategoryBox;