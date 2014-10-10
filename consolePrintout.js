var menu = {
    width:  300,
    height: 200,
    title: "Menu"
};
 
for(var key in menu) {
    var val = menu[key];
    console.log("Key: "+key+" value:"+val);
}
Key: width value:300 VM158:10
Key: height value:200 VM158:10
Key: title value:Menu VM158:10
undefined
var menu = {
    width:  300,
    height: 200,
    title: "Menu"
};
 
for(var key[0] in menu) {
    var val = menu[key];
    console.log("Key: "+key+" value:"+val);
}
SyntaxError: Unexpected token [
var menu = {
    width:  300,
    height: 200,
    title: "Menu"
};
 
for(var key in menu) {
    var val = menu[key];
    console.log("Key: "+key+" value:"+val);
}
Key: width value:300 VM166:10
Key: height value:200 VM166:10
Key: title value:Menu VM166:10
undefined
var menu = {
    width:  300,
    height: 200,
    title: "Menu"
};
 
menu[Object.keys(menu)[0]];
300
var menu = {
    width:  300,
    height: 200,
    title: "Menu"
};
 
menu[Object.keys(menu)[1]];
200
menu["width"]
300
var menu = {
    width:  300,
    height: 200,
    title: "Menu"
};
 
Object.keys(menu);
["width", "height", "title"]
var menu = {
    width:  300,
    height: 200,
    title: "Menu"
};
 
var array = Object.keys(menu);
undefined
array
["width", "height", "title"]
var key = array[1]
undefined
key
"height"
menu[key]
200
var menu = [
SyntaxError: Unexpected token }
var menu = [
{item: hat, material: wool, color: red},
{item: scarf, material: hemp, color: green},
{item: mittens, material: cotton, color: blue}
];
menu[Array.prototype.keys(menu)[1];
SyntaxError: Unexpected token ;message: "Unexpected token ;"stack: "SyntaxError: Unexpected token ;↵    at Object.InjectedScript._evaluateOn (<anonymous>:730:39)↵    at Object.InjectedScript._evaluateAndWrap (<anonymous>:669:52)↵    at Object.InjectedScript.evaluate (<anonymous>:581:21)"get stack: function () { [native code] }arguments: nullcaller: nulllength: 0name: ""prototype: Object__proto__: function Empty() {}<function scope>set stack: function () { [native code] }__proto__: Error
var menu = [
{item: hat, material: wool, color: red},
{item: scarf, material: hemp, color: green},
{item: mittens, material: cotton, color: blue}
];
var emu = menu.keys();
ReferenceError: hat is not defined
var menu = [
{item: 'hat', material: 'wool', color: 'red'},
{item: 'scarf', material: 'hemp', color: 'green'},
{item: 'mittens', material: 'cotton', color: 'blue'}
];
var emu = menu.keys();
TypeError: undefined is not a function
var menu = [
{item: hat, material: wool, color: red},
{item: scarf, material: hemp, color: green},
{item: mittens, material: cotton, color: blue}
];
ReferenceError: hat is not defined
var menu = [
{item: 'hat', material: 'wool', color: 'red'},
{item: 'scarf', material: 'hemp', color: 'green'},
{item: 'mittens', material: 'cotton', color: 'blue'}
];
undefined
hat
ReferenceError: hat is not defined
item
ReferenceError: item is not defined
menu
[Objectcolor: "red"item: "hat"material: "wool"__proto__: Object, Object, Object]
var emu = menu.keys();
TypeError: undefined is not a function
menu[object.keys(menu)];
ReferenceError: object is not defined
menu[Object.keys(menu)];
undefined
menu
[Object, Object, Object]
menu[Object.keys(menu)[0]);
SyntaxError: Unexpected token )
menu[Object.keys(menu)[0]];
Object {item: "hat", material: "wool", color: "red"}
menu[Object.keys(menu)[0, 1]];
Object {item: "scarf", material: "hemp", color: "green"}
menu[Object.keys(menu)[0][1]];
undefined
menu
[Object, Object, Object]
menu[Object.keys(menu)[0]["material"]];
undefined
material
ReferenceError: material is not defined
0
0
menu["width"];
undefined
width
ReferenceError: width is not defined
Object.keys(menu);
["0", "1", "2"]
Object.keys(menu)[2];
"2"
var array = Object.keys(menu);
undefined
array
["0", "1", "2"]
var key = array[2];
undefined
key
"2"
menu[key];
Object {item: "mittens", material: "cotton", color: "blue"}
key[2];
undefined
2
2