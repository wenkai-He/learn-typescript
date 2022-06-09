//泛型的继承
function getLength25<T extends string|string []>(arg:T):number{
    return arg.length
}

console.log(getLength25('baidu,com'));
console.log(getLength25(['1','1']));



