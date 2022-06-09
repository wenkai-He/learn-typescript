//public private protected
class user11{
    public name:string
    //外面不能调用protected 只能给自己类的方法用  子类可以继承父类的protected方法
    protected age:number
    //私有只能在类中使用 子类也不能用
    private sex:string
    constructor(n:string,a:number,s:string){
        this.name=n
        this.age=a
        this.sex=s
    }
    public getset():void{
        console.log(this.sex);
    }
}

const owen=new user11('owen',20,'male')
owen.getset()
console.log(owen.name);


