var Game = {
    tower1: [1, 2, 3],
    tower2: [],
    tower3: [],
    start: function() {
        console.log("UHHHHHHM");
        $('#play-area').on('click', '.piece', Game.choosePiece);
    },
    choosePiece: function(event) {
        var piece;
        var currentTower;
        console.log("you clicked on a game piece");
        console.log(event);
        console.log(event.currentTarget.innerHTML);
        console.log(typeof(event.currentTarget.innerHTML));
        console.log(event.currentTarget.attributes["data-id"].value);

        piece = parseInt(event.currentTarget.innerHTML);
        currentTower = parseInt(event.currentTarget.attributes["data-id"].value);
        if (piece === ) {

        }
    }
};


$(document).ready(function() {
    console.log("your mom");
    $('body').on('click', '#play-button', Game.start);
});