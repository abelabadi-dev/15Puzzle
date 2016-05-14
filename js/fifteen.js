/*
	@abule
*/

//document.ready
$(function () {
	Puzzle.init();
});
var Puzzle = {
    var blankSpace{
        row:300;
        column:300;
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

            // $this.x = x;
            // $this.y = y;
            Puzzle.setSquare($this,x,y);
            console.log(Puzzle.getSquare(x,y));
        });       
    },
    moveable:function () {
        // body...
    },
    moveIt: function(){

    },
    getSquare: function (row,column) {
        var id = "square_"+row+"_"+column;
        return $("#"+id);
    },
    setSquare: function ($this,row, column) {
        $this.attr('id',"square_"+row+"_"+column)
    }
};
