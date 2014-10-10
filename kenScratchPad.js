var beerList = [{
    beername: 'Corona',
    beertype: 'Ale'
}, {
    beername: 'Fosters',
    beertype: 'Amber'
}, {
    beername: 'Guiness',
    beertype: 'Stout'
}, {
    beername: 'Karbach',
    beertype: 'IPA'
}];

beerList.forEach(function(entry) {
    console.log(entry);
})

var brewski = beerList.filter(function(c) {
        if (c.beername.length > 0) {
            return c;
        }
    })
    .map(function(c) {
        return c.beername + " " + c.beertype;
    })
    .sort(sortByName);


function sortByName(c1, c2) {
    "use strict";
    return c1 > c2 ? 1 : -1;
}

console.log(brewski);
/*



var a = ["a", "b", "c"];
a.forEach(function(entry) {
    console.log(entry);
});




            elements.forEach(function(element) {
  setTimeout(function() {
    console.log(element);
  }, 100);
});


            var a = ["a", "b", "c"];
            a.forEach(function(entry) {
                console.log(entry);
            });
             



            beer.sort(function (a, b) { return 
                    (a.name.length > b.name.length ? 1 : 
                        a.name.length < b.name.length ? +1 : 0); }
            );




                var shortest = " ";
                var brew = beer.filter(function(b) {
                    if (shortest < b.name.length) {
                        shortest = b.name.length;
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
/*function beerList(b) {
     var shortBeer = b.split(" ");
     var shortest = 0;
     shortBeer.forEach(function(shortBeer) {
         if (shortest < b.name.length) {
             shortest = b.name.length;
             return b;
         }
     });
 }*/
