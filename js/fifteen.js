/*
	@abule
*/

//document.ready
$(function () {
	Puzzle.init();
});
var Puzzle = {
    pieces:[],
    blankSpace:{
        row:300,
        column:300
    },
    init: function() {
        var puzzleArea = $('#puzzlearea');
        divs = puzzleArea.children("div");
          
        // initialize each piece
        divs.each(function (index) {
            var x = ((index%4)*100);
            var y = (Math.floor(index / 4) * 100);
            var $this = $(this);
            $this.addClass("puzzlepiece");
            $this.css({"left" : x + 'px',
                        "top" :y + 'px',
                        "backgroundImage" : 'url("img/bg.jpg")',
                        "backgroundPosition" : -x + 'px ' + (-y) + 'px'
            });

            $this.x = x;
            $this.y = y;
            Puzzle.pieces.push($this);
            $this.on("click",function () { // listen to click on piece to move.
                var $moveable = Puzzle.moveable($this);
                if ($moveable.move)
                    Puzzle.moveIt($this,$moveable.direction);
            });
            $this.on({ // hover over a movable square
                mouseenter:function () {
                    var $moveable = Puzzle.moveable($this);
                    if ($moveable.move) {
                        //console.log('on movable hovering');
                        $this.addClass("movablepiece");
                    }
                },
                mouseleave:function () {
                   $this.removeClass("movablepiece");
                }
            });
        }); // end of divs.each
        $('#shufflebutton').on('click',function () {
            for (var i = 0; i < 10; i++) {
                Puzzle.shuffle(Puzzle.pieces);
            }
        });       
    },
    shuffle:function (divs) {
        var counter = 0;
        divs.forEach(function (piece,index) {
            var $this = piece;
            var $moveable = Puzzle.moveable($this);
            if ($moveable.move) {
                counter++;
                Puzzle.moveIt($this,$moveable.direction)
            }
            if(counter === 100)
                return;
        });//inside shuffle: end of divs.each
    },
    moveable:function ($div) {
        var pb = Puzzle.blankSpace;
        var move,direction;

        if ($div.x+100 === pb.row && $div.y===pb.column) {
            //console.log("to the right");
            return {
                move : true,
                direction : "RIGHT"
            };
        }else if ($div.x-100 === pb.row && $div.y===pb.column) {
            //console.log("to the left");
            return {
                move : true,
                direction : "LEFT"
            };
        }else if ($div.y-100 === pb.column && $div.x=== pb.row) {
            //console.log("to the up");
            return {
                move : true,
                direction : "UP"
            };
        }else if ($div.y+100 === pb.column && $div.x ===pb.row) {
            //console.log("to the down");
            return {
                move : true,
                direction : "DOWN"
            };
        }else{
            //console.log("can't move");
            return{
                move : false
            };
        }
    },
    moveIt: function($div,direction){
        //console.log($div);
        //var $moveable = Puzzle.moveable($div);
        var pb = Puzzle.blankSpace;
        //if ($moveable.move === true) { // can it move
            switch(direction){ //to what direction
                case "LEFT":
                    //console.log("moving to left");
                    var temp = pb.row;
                    pb.row = $div.x;
                    $div.x = temp;
                    $div.css('left',$div.x);
                    break;
                case "RIGHT":
                    //console.log("moving to right");
                    //Puzzle.setSquare($div,)
                    var temp = $div.x;
                    $div.x = pb.row;
                    pb.row = temp;
                    $div.css('left',$div.x);
                    break;
                case "UP":
                    //console.log("moving to up");
                    var temp = $div.y;
                    $div.y = pb.column;
                    pb.column = temp;
                    $div.css('top',$div.y);
                    break;
                case "DOWN":
                    //console.log("moving down");
                    var temp = pb.column;
                    pb.column = $div.y;
                    $div.y = temp;
                    $div.css('top',$div.y);
                    break;
                default:
                    alert("it can't move");
            }
        //}
    },
    getSquare: function (row,column) {
        var id = "square_"+row+"_"+column;
        return $("#"+id);
    },
    setSquare: function ($this,row, column) {
        $this.x = row;
        $this.y = column;
        $this.attr('id',"square_"+row+"_"+column)
    }
};
