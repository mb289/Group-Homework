
/*function beerList(b) {
        var shortBeer = b.split(" ");
        var shortest = 0;
        shortBeer.forEach(function(shortBeer) {
            if (shortest < b.beername.length) {
                shortest = b.beername.length;
                return b;
            }
        });
    }*/



beer.sort(
    function (a, b) { return 
    	(a.beername > b.beername ? 1 : 
    		a.beername < b.beername ? -1 : 0); }
);
console.log(beer);
    /*
    var shortest = " ";
    var brew = beer.filter(function(b) {
        if (shortest < b.beername.length) {
            shortest = b.beername.length;
            return brew;
        }

    })

    .map(function(c) {
            return
        })
        .reduce(reduceByName);
    .filter(function(c) {})

    function reduceByName(c1, c2) {
        "use strict";
    }
    console.log(brew);
    */