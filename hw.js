// Number 1 Write your own forEach function (like we did in class). It takes the array and the function (referred to as a callback) as arguments:
// Number 2 Write your own map, reduce, and filter functions that use your custom forEach to do their work.
// function forEach(list, callback) {
//         for (var i = 0; len = list.length; i++) {
//              callback(list[i], i, list);
//              }
// }
// 
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

beerList.forEach(function(c) {
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
    };

    console.log(c);

})

// Number 3 Write a function called pluck that extracts a list of property names:
var stooges = [{
    name: 'moe',
    age: 40
}, {
    name: 'larry',
    age: 50
}, {
    name: 'curly',
    age: 60
}];


function pluck(a) {
    var names = a.map(function(element) {
        return element.name;
    });
    return names;
}
console.log(pluck(stooges));

// could use Underscore.js... "_.pluck(stooges, name);"  .... but that might be considered cheating? => ["moe", "larry", "curly"]
/**
 * Julie did long-hand version.... like this! just seems way too much for a simple action.
 * 
 * var stooges = [{
    name: "moe",
    age: 40
}, {
    name: "larry",
    age: 50
}, {
    name: "curly",
    age: 60
}];

function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i]))
            passed.push(array[i]);
    }
    return passed;

}

function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++)
        mapped.push(transform(array[i]));
    return mapped;
}

var pluck = stooges.filter(function(sto) {
    return sto.name;
});

console.log(map(pluck, function(sto) {
    return sto.name;
}));
 */

//Number 4 Write a function called reject that returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.

var arr = [1, 2, 3, 4, 5, 6];
var remove = [];

function reject() {
    var i;
    for (i = 0; i < arr.length; i++) {
        if (Number(arr[i]) != i % 2) { // modulo to seperate that which is not divisible by two 
            remove.push(arr[i]); // Pushing the results from if
            arr.splice(i, 1); // Removing the parts of arr that don't match our if
        }
    }
};

reject(); // Calling the function.
console.log(remove);



// Number 5 Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
var even = function(list, predicate) {
    for (var i = 0; i < list.length; i++) {
        if (predicate(list[i]) === true) {
            return list[i];
        }
    }
    return undefined;
}

var predicate = function(first) {
    return first % 2 == 0;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(even(arr, predicate));


//Number 6 Write a function called where that looks through each value in the list, 
//returning an array of all the values that contain all of the key-value pairs listed in properties.
function where(list, properties) { 
 var listOfPlays = [{title: "Cymbeline", author: "Shakespeare", year: 1611},
                   {title: "The Tempest", author: "Shakespeare", year: 1611}];
                return listOfPlays[1];

                
function where(list, properties) {
    var author = listOfPlays.author;
    var year = listOfPlays.year;
    var properties = author + year;

    return properties;
};

}
                return (listOfPlays.author,listOfPlays.year);
};
                console.log(where(listOfPlays));


/* Do stuff */ }

where(listOfPlays, {
    author: "Shakespeare",
    year: 1611
});
// => [{title: "Cymbeline", author: "Shakespeare", year: 1611},
//     {title: "The Tempest", author: "Shakespeare", year: 1611}]
