"use strict";
//参数设置类型 返回值设置类型 传参个数固定
function printName(firstName, lastName) {
    return firstName + lastName;
}
printName('1', '2');
//可选参数
function printName2(firstName, lastName) {
    return firstName + lastName;
}
printName2('1');
//默认参数
function printName3(firstName, lastName = '2132') {
    return firstName + lastName;
}
printName3('1');
//剩余参数
function printName4(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
printName4('1', '1212', '2131', '31231');
function add(arg1, arg2) {
    // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 arg1 + arg2
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1 + arg2;
    }
    else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 + arg2;
    }
}
