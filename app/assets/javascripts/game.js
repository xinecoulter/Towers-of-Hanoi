var Game = {
    tower1: [1, 2, 3],
    tower2: [],
    tower3: [],
    start: function() {
        console.log("UHHHHHHM");
        $('#play-area').on('click', '.piece', Game.choosePiece);
    },
    choosePiece: function(event) {
        var piece,
            towerValue,
            currentTower;
        console.log("you clicked on a game piece");

        piece = parseInt(event.currentTarget.innerHTML);
        towerValue = event.currentTarget.attributes["data-id"].value;
        console.log(towerValue);
        if (towerValue === "tower1") {
            currentTower = Game.tower1;
            console.log("currentTower: " + Game.tower1);
        } else if (towerValue === "tower2") {
            currentTower = Game.tower2;
            console.log("currentTower: " + Game.tower2);
        } else if (towerValue === "tower3") {
            currentTower = Game.tower3;
            console.log("currentTower: " + Game.tower3);
        }

        console.log("minimum value of current tower " + Array.min(currentTower));
        console.log("piece " + piece);

        if (piece === Array.min(currentTower)) {
            console.log("yuuuup");
        } else {
            console.log("noooope");
        }
    }
};


$(document).ready(function() {
    console.log("your mom");
    $('body').on('click', '#play-button', Game.start);

    Array.min = function( array ){
        return Math.min.apply( Math, array );
    };
});