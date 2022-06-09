//断言

//宽泛类型
let a10:string='owen';

//值类型 只能为owen
let b10:'owen'='owen'
//const也是一种值类型
const c10='owen';

//推断为string   as const转化为值类型
//as const 根据值来转换类型
let d10='owen' as const


let aa10='owen';
let bb10=20;
//as const转化为元组
// let arr10=[aa10,bb10]as const
let arr10=<const>[aa10,bb10]
let cc10=arr10[1]






