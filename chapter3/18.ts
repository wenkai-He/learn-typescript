//接口对对象进行约束
interface UserInterface18{
    name:string,
    age:number,
    info():string
    //可以是任意的string类型的变量
    [key:string]:any
}


let owen18:UserInterface18={
    name:'owen',
    age:20,
    info(){
        return `${this.name}`
    },
    sex:'男'
}