var React=require('react');
var ReactDOM=require('react-dom');
var LoginForm=require("./LoginForm");

var blogLoad = function(){
    ReactDOM.render(
    <div>
        <div className="player">
            <div id="skPlayer" />
        </div>
        <LoginForm />
    </div>,
    document.getElementById('main')
    );
}

blogLoad();

window.onresize = function(){
    blogLoad();
}