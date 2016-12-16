var React=require('react');
var ReactDOM=require('react-dom');
var Nav=require('./nav');
var MainContent=require('./mainPage');
var Player=require('./blogPlayer');

var blogLoad = function(){
    ReactDOM.render(
        <div>
            <Nav items={['We Are The New World!','Hello World!','Index']} active='We Are The New World!'/>
            <Player />
            <div className="content">
                <MainContent />
            </div>
        </div>,
        document.getElementById('main')
    );
}

blogLoad();

window.onresize = function(){
    blogLoad();
}