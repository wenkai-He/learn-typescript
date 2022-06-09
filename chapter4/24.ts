//泛型 generics

//泛型就是函数类型的参数
//普通函数泛型
function dump24<T>(arg:T):T{
    return arg 
}
//箭头函数泛型
const dum24=<T>(arg:T):T=>{
    return arg
}
let owen24=dump24<string>('owen')
let Owen24=dump24<boolean>(true)

let OWEN24=dum24<number>(23)