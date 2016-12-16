var React=require('react');
var Config=require('./config');

var Article=React.createClass({
    render: function() {
        return(
            <div>
                {this.props.article.title}
            </div>
        );
    }
});

var ArticlesBox=React.createClass({
    getInitialState: function(){
        return {
            data: []
        };
    },
    componentDidMount: function(){
        $.ajax({
            url: Config.url+'getArticles',
            success:function(data){
                this.setState({data:data});
            }.bind(this),
            error:function(xhr, statu, err){
                console.error(err.toString());
            }
        });
    },
    render: function(){
        var items=this.state.data.map(function(item){
            return(
                <Article article={item} key={item.id}/>
            );
        });
        return(
            <div>
                {items}
            </div>
        );
    }
});
module.exports=ArticlesBox;