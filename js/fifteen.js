/*
	@abule
*/

//document.ready
$(function () {
	Puzzle.init();
});
var Puzzle = {
    blankSpace:{
        row:300,
        column:300
    },
    init: function() {
        var puzzleArea = $('#puzzlearea');
        var divs = puzzleArea.children("div");
          
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
            Puzzle.setSquare($this,x,y);
            console.log(Puzzle.getSquare(x,y));
            $this.on("click",function () { // listen to click on piece.
                Puzzle.moveIt($this);
            });
        });       
    },
    moveable:function ($div) {
        console.log($div.x);
        var move,direction;

        if ($div.x+100 === Puzzle.blankSpace.column && $div.y===Puzzle.blankSpace.row) {
            console.log("to the right");
            return {
                move : true,
                direction : "RIGHT"
            };
        }else if ($div.x-100 === Puzzle.blankSpace.column && $div.y===Puzzle.blankSpace.row) {
            console.log("to the left");
            return {
                move : true,
                direction : "LEFT"
            };
        }else if ($div.y-100 === Puzzle.blankSpace.row && $div.x-100 === Puzzle.blankSpace.row) {
            console.log("to the up");
            return {
                move : true,
                direction : "UP"
            };
        }else if ($div.y+100 === Puzzle.blankSpace.row && $div.x ===Puzzle.blankSpace.column) {
            console.log("to the down");
            return {
                move : true,
                direction : "DOWN"
            };
        }else{
            console.log("can't move");
            return{
                move : false
            };
        }
    },
    moveIt: function($div){
        console.log($div);
        var $moveable = Puzzle.moveable($div);
        if ($moveable.move === true) { // can it move
            switch($moveable.direction){ //to what direction
                case "LEFT":
                    console.log("moving to left");
                    break;
                case "RIGHT":
                    console.log("moving to right");
                    break;
                case "UP":
                    console.log("moving to up");
                    break;
                case "DOWN":
                    console.log("moving down");
                    break;
                default:
                    console.log("can't move");
            }
        }
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
