var React=require('react');
var PaintBoard = React.createClass({
    componentDidMount: function(){
        var mousePressed = false;
        var lastX, lastY;
        var ctx = document.getElementById('myCanvas').getContext("2d");

        $('#clearButton').mousedown(function (e) {
            clearArea();
        });

        $('#myCanvas').mousedown(function (e) {
            mousePressed = true;
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
        });

        $('#myCanvas').mousemove(function (e) {
            if (mousePressed) {
                Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
            }
        });

        $('#myCanvas').mouseup(function (e) {
            mousePressed = false;
        });
        $('#myCanvas').mouseleave(function (e) {
            mousePressed = false;
        });

        function Draw(x, y, isDown) {
            if (isDown) {
                ctx.beginPath();
                ctx.strokeStyle = $('#selColor').val();
                ctx.lineWidth = $('#selWidth').val();
                ctx.lineJoin = "round";
                ctx.moveTo(lastX, lastY);
                ctx.lineTo(x, y);
                ctx.closePath();
                ctx.stroke();
            }
            lastX = x; lastY = y;
        }

        function clearArea() {
            // Use the identity matrix while clearing the canvas
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
    },
    render: function(){
        return(
            <div>
                <canvas id="myCanvas" width="500" height="200" style={{border:'2px solid #6699cc'}}></canvas>
                <div>
                    <button id="clearButton">清空画板</button>
                    Line width : <select id="selWidth"  defaultValue="9">
                    <option value="1">1</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="7">7</option>
                    <option value="9">9</option>
                    <option value="11">11</option>
                </select>
                    Color : <select id="selColor" defaultValue="black">
                    <option value="black">black</option>
                    <option value="blue">blue</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="yellow">yellow</option>
                    <option value="gray">gray</option>
                </select>
                </div>
            </div>
        );
    }
});
module.exports=PaintBoard;