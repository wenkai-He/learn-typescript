"use strict";
let num = 123;
let str = '123';
let bool = false;
let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
let myName = 'owen';
function greet(name) {
    console.log('Hello,' + name.toUpperCase() + 'world');
    return 1;
}
greet('owen');
function print(pt) {
    console.log('x为:' + pt.x);
    console.log('y为:' + pt.y);
}
print({
    x: 1,
    y: 2
});
function printName(obj) {
    console.log('first为:' + obj.first);
    console.log('last为:' + obj.last);
}
printName({
    first: 'He',
    last: 'wenkai'
});
