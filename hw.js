// Number 1 Write your own forEach function (like we did in class). It takes the array and the function (referred to as a callback) as arguments:

var beerList = [{
    beername: 'BUDWEISER', //Corona
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


// Number 2 Write your own map, reduce, and filter functions that use your custom forEach to do their work.

var brewski = beerList.filter(function(c) {
        if (c.beername.length > 0) {
            return c;
        }
    })
    .map(function(c) {
        return c.beername + " " + c.beertype;
    })
    .reduce(reduceMyBeer);


function reduceMyBeer(a, b) {
    "use strict";
    return a + ", " + b;
}

console.log(brewski);

// Number 3 Write a function called pluck that extracts a list of property names:
var stooges = [
{name: 'moe', age: 40}, 
{name: 'larry', age: 50}, 
{name: 'curly', age: 60}];


function pluck(a) {
    var names = a.map(function(element){
            return element.name;
        });
    return names;
    }
console.log(pluck(stooges));

// could use Underscore.js... "_.pluck(stooges, name);"  .... but that might be considered cheating? => ["moe", "larry", "curly"]


//Number 4 Write a function called reject that returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.

function reject(list, predicate) { /* Do stuff */ }

var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> [1, 3, 5]



// Number 5 Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
function find(list, predicate) { /* Do stuff */ }

var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> 2

//Numbe 6 Write a function called where that looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.
function where(list, properties) { /* Do stuff */ }

where(listOfPlays, {author: "Shakespeare", year: 1611});
// => [{title: "Cymbeline", author: "Shakespeare", year: 1611},
//     {title: "The Tempest", author: "Shakespeare", year: 1611}]