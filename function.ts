//参数设置类型 返回值设置类型 传参个数固定
function printName(firstName: string, lastName: String): String {
    return firstName + lastName
}
printName('1', '2');

//可选参数
function printName2(firstName: string, lastName?: String): String {
    return firstName + lastName
}
printName2('1')

//默认参数
function printName3(firstName: string, lastName: String = '2132'): String {
    return firstName + lastName
}
printName3('1')

//剩余参数
function printName4(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
printName4('1','1212','2131','31231')



//函数重载
//函数名相同 但是输入的参数类型可以不同
function add(x: string, y: string): string
function add(x: number, y: number): number

function add(arg1: string | number, arg2: string | number) {
    // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 arg1 + arg2
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1 + arg2
    } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 + arg2
    }
}


