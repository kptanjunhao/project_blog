var React = require("react");
var Clock = require('./clock');
var CategoryBox = require('./categoryBox');
var ArticlesBox = require('./articlesBox');

var MainContent = React.createClass({
    render: function () {
        return (
            <div>
                <div className='sidebar-area'>
                    <Clock />
                </div>
                <div className='content-area'>
                    <CategoryBox />
                    <ArticlesBox />
                </div>
            </div>
        );
    }
});
module.exports = MainContent;