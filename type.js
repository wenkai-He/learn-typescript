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
function printId(id) {
    console.log(id);
    //缩小联合类型判断
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    }
}
printId('11');
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree('3daedaeda'));
console.log(getFirstThree([2, 312, 423, 24, 323]));
function printPoint(p) {
    console.log(p.x);
    console.log(p.y);
}
printPoint({
    x: 200,
    y: 300
});
function printpoint(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
printPoint({
    x: 200,
    y: 300
});
const bear = {
    name: 'owen',
    honey: true
};
const per = {
    name: 'owen',
    age: 26
};
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction.Down);
