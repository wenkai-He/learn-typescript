//unknown和any的区别
//可以把any类型赋值给string类型
let owen5:any='owen';
let a5:string=owen5

let he5:unknown='owen';
//这里会报错 不能把unknown类型赋值给string
// let b5:string=he5

//as类型断言
let b5:string=he5 as string



