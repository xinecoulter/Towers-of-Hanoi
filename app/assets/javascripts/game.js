var Game = {
    start: function() {
        console.log("UHHHHHHM");
        $('#play-area').on('click', '.piece', Game.move);
    },
    move: function(event) {
        var tower1 = [1, 2, 3],
            tower2 = [],
            tower3 = [];
        console.log("you clicked on a game piece");
        console.log(event);
        console.log(event.currentTarget.html());
        // if (event.currentTarget.innerHTML())
    }
};


$(document).ready(function() {
    console.log("your mom");
    $('body').on('click', '#play-button', Game.start);
});