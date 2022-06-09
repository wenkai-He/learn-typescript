//type
type sex='boy'|'girl'
//基本类型别名
type isAdmin=boolean
type user={
    name:string
    age:number
    isAdmin:isAdmin
    sex:sex
    show():string
    [key:string]:any
}
const owen23:user={
    name:'owen',
    age:20,
    isAdmin:true,
    sex:'boy',
    show(){
        return 'owen'
    }
}


//type与interface的区别
//type不能重名合并 interface可以