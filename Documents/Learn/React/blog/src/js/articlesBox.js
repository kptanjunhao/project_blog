var React=require('react');
var Config=require('./config');

var Article=React.createClass({
    getInitialState: function(){
        return {
            title: this.props.article.title,
            content: this.props.article.content,
            text: ''
        };
    },
    handleClick: function(){
        var text = (this.state.text=='') ? this.state.content : '';
        this.setState({
            text: text
        });
    },
    rawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.state.text.toString());
        //return { __html: rawMarkup };
        return { __html: this.state.text };
    },
    render: function() {
        var md = new Remarkable();
        return(
            <div>
                <h2 style={{marginRight:'12px',borderBottom:'1px solid #ccc'}} onClick={this.handleClick}>{this.state.title}</h2>
                <div style={{lineHeight:'none',padding:'0 12px 0 12px',margin:'0 12px 0 12px',boxShadow:'inset 0 0 1px 1px'}} dangerouslySetInnerHTML={this.rawMarkup()} />
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
            <div style={{marginLeft:'10px',lineHeight:'32px'}}>
                {items}
            </div>
        );
    }
});
module.exports=ArticlesBox;