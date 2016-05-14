/*
	@abule
*/

//document.ready
$(function () {
	Puzzle.init();
});
var Puzzle = {
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
            console.log($this.attr('id',x +"_"+y));
        });       
    },
    moveIt(){

    }
};
