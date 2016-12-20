var React=require('react');
var ReactDOM=require('react-dom');
var Nav=require('./nav');
var MainContent=require('./mainPage');
var PaintBoard=require('./paintBoard');
var Player=require('./blogPlayer');

var Main = React.createClass({
    getInitialState: function(){
        return {
            title: '主页',
            content: <MainContent />
        };
    },
    handleClick: function(title){
        if(this.state.title == title){
            return;
        }else{
            var content;
            if (title=='绘画板'){
                content = <PaintBoard />;
            }else{
                content = <MainContent />;
            }
            this.setState({
                title:title,
                content: content
            });
        }
    },
    render: function(){
        return(
            <div>
                <Nav items={['主页','Hello World!','绘画板']} active='主页' handleClick={this.handleClick}/>
                <Player />
                <div className="content">
                    {this.state.content}
                </div>
            </div>
        );
    }
});

var blogLoad = function(){
    ReactDOM.render(
        <Main />,
        document.getElementById('main')
    );
}

blogLoad();

window.onresize = function(){
    blogLoad();
}