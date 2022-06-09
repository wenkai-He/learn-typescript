interface userinterface20{
    name:string
    age:number
}
class user20{
    info:userinterface20
    constructor(user:userinterface20){
        this.info=user
    }
    get():userinterface20{
        return this.info
    }
}

const owen20=new user20({name:'owen',age:20})
console.log(owen20.get());


//数组使用接口
const he20:userinterface20={
    name:'he',
    age:20
}
const wen20:userinterface20={
    name:'wen',
    age:21
}
const userarr20:userinterface20[]=[he20,wen20]


//枚举使用接口
enum Sextype{
    boy,
    girl
}

interface USer20{
    name:string,
    age:number,
    sex:Sextype
}
const kai20:USer20={
    name:'kai',
    age:20,
    sex:Sextype.boy
}