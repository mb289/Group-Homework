// Number 1 Write your own forEach function (like we did in class). It 
// takes the array and the function (referred to as a callback) as 
// arguments:
// Number 2 Write your own map, reduce, and filter functions that use your 
// custom forEach to do their work.
// 
// 
function forEach(list, callback) {
    for (var i = 0; i < beerList.length; i++) {
        callback(list[i], i, list);
    }

    function map(list, callback) {
        var newBrew = [];
        forEach(list, function(val, i, arr) {
            newBrew.push(callback(val, i, arr));
        })
        return newBrew;
    }

    function reduce(list, callback, initialValue) {
        var value, prevVal = initialValue;
        if (initialValue) beerList.unshift(initialValue);
        forEach(list, function(val, i, arr) {
            if (i === 0) return;
            prevVal = callback(prevVal, arr[i], i, arr);
        });
        return prevVal;
    }

    function filter(list, callback) {
        var newBrew = [];
        forEach(list, function(val, i, arr) {
            if (callback(val, i, arr)) {
                newBrew.push(val);
            }
        });
        return newBrew;
    }
};

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



/*
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

})*/

// Number 3 Write a function called pluck that extracts a few feathers from
// a chickens rear quarters (...without being seen or heard).
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

function pluck(list, propertyName) {
    var newList = [];
    forEach(list, function(val, i, arr) {
            newList.push(val[propertyName]);
    })
    return newList;
}

console.dir(pluck(stooges, 'name'));

/**
 * following is but another version I had offered up to the invisible
 * ones moments before Masta_Matt's venerable wisdom had wrought the
 * age of enlightenment upon my silly, befuddled brain.
 *
 */
function pluck(a) {
    var names = a.map(function(element) {
        return element.name;
    });
    return names;
}
console.log(pluck(stooges));


//Number 4. Write a function called reject that makes an otherwise happy
//individual feel upset for a few moments, whereupon he/she realizes (as 
//though a mighty cloud of unknowing had been dispelled) that it was all
//folly and thereby has a jolly good laughing!

function reject(list, callback) {
    var newList = [];
    forEach(list, function(val, i, arr) {
        if (!callback(val, i, arr)) {
            newList.push(val);
        }
    })
    return newList;
}

var odds = reject([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 == 0;
});
console.log(odds);
/**
 * Following is another attempt by me on the elusive method
 * (dubbed by the great masters... 'reduce') that was found to be 
 * acceptable but a smidgen out of context and so, was thereby imprisoned 
 * in a tiny cell meant for the little peoples for what i think was 
 * a few happy years!
 */
var arr = [1, 2, 3, 4, 5, 6];
var remove = [];

function reject() {
    var i;
    for (i = 0; i < arr.length; i++) {
        if (Number(arr[i]) != i % 2) {
            remove.push(arr[i]);
            arr.splice(i, 1);
        }
    }
}
reject();
console.log(remove);

// Number 5 Write a function called find that looks through each value in 
// the list, returning the first one that passes a truth test (predicate), 
// or undefined if no value passes the test. The function returns as soon 
// as it finds an acceptable element, and doesn't traverse the entire list.
// 
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


//Number 6 Write a function called where that looks through each value in 
//the list, returning an array of all the values that contain all of the 
//key-value pairs listed in properties.
//
function forEach(list, callback) {
    for (var i = 0, len = list.length; i < len; i++) {
        callback(list[i], i, list);
    }
}    
    function where(list, properties) {
    var newList = [];
    forEach(list, function(val, i, arr) {
       newList.push(val[properties]);
    })
    return newList;
}
var listOfPlays = [{
        title: "Cymbeline",
        author: "Shakespeare",
        year: 1611
    }, {
        title: "The Tempest",
        author: "Shakespeare",
        year: 1611
    }];
    console.dir(where(listOfPlays, 'author'));
    console.dir(where(listOfPlays, 'year'));


// => [{title: "Cymbeline", author: "Shakespeare", year: 1611},
//     {title: "The Tempest", author: "Shakespeare", year: 1611}]
