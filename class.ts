class Father{
    //private只能在Father类内部被调用 实例以及继承都不能
    private sex:string
    //protected只能在Father类内部以及继承类调用 实例不能
    protected age:number
    //readonly只读属性 必须声明后立即初始化 不能修改
    readonly name:String
    constructor(name:string,sex:string,age:number){
        this.name=name
        this.sex=sex
        this.age=age
    }
    //静态属性只能被Father调用 实例不能调用 继承的Son可以调用
    static width:string='100px'
}

class Son extends Father{
    say():void{
        console.log(this.sex);
        console.log(this.age);
    }
}
let personson=new Son('zayn','nan',18)
let person=new Father('owen','nv',18)
console.log(person.sex);
console.log(person.age);
console.log(person.name);
console.log(Father.width);
console.log(Son.width);




//抽象类不能被实例化
abstract class Animal {
    //抽象属性也不能被实例化
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
let animal=new Animal()

class bull extends Animal{
    makeSound() {
        console.log('miao miao')
    }
}
