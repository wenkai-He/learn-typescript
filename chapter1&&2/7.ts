//type对函数参数进行类型声明
type userType={name:string,age:number};

let addUser=(user:userType):void=>{
    console.log('添加');
    
}
let updateUser=(user:userType):void=>{
    console.log('更新');
}

addUser({name:'owen',age:20})
updateUser({name:'owen',age:20})

