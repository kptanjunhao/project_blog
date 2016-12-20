var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Config = require('./config');

var Player = React.createClass({
    getInitialState: function(){
        return{
            tracks: [],
            playerHidden: true
        };
    },
    handleGetList: function() {
        var tracks = this.state.tracks;
        if (tracks.length == 0) {
            $.ajax({
                url: Config.url+"getMusicList",
                type: "GET",
                success: function (data) {
                    this.setState({tracks: data.result.tracks});
                    this.handleGetList();
                }.bind(this),
                error: function (xhs, status, err) {
                    console.error(xhs.toString());
                }
            });
        } else {
            var musics = [];
            //判空处理
            for(var i in tracks){
                var track = tracks[i];
                var status = true;
                var music = {
                    src: track.mp3Url,
                    name: track.name,
                    author: track.artists[0].name,
                    cover: track.album.picUrl
                };
                for(var attr in music){
                    if(music[attr]==null && status){
                        status = false;
                        break;
                    }
                }
                if (status){
                    musics.push(music);
                }
            }
            skPlayer({
                music: musics,
                //loop:true, //是否单曲循环，选填
                //theme:'red' //切换red主题，选填
            });
         }
    },
    componentDidMount: function(){
        this.handleGetList();
    },
    handleHideOrShow: function(){
        this.setState({playerHidden:!this.state.playerHidden});
    },
    render: function () {
        var playerClassName = this.state.playerHidden ? "player playerHide" : "player playerShow";
        return (
            <div className={playerClassName}>
                <div className="controlButton" onClick={this.handleHideOrShow}>
                    {this.state.playerHidden ? "Show" : "Hide"}
                </div>
                <div id="skPlayer"><h1 style={{background:'#333',color:'#f2f2f2',paddingLeft:'45px',lineHeight:'100px',height:'100%',width:'100%'}}>音乐播放器加载失败</h1></div>
            </div>
        );
    }
});
module.exports = Player;