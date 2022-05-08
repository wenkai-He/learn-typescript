let num:number=123;
let str:string='123';
let bool:boolean=false;

let arr:number[]=[1,2,3]
let arr2:Array<number>=[1,2,3]

let myName: string='owen'

function greet(name:string):number{
    console.log('Hello,'+name.toUpperCase()+'world');   
    return 1
}
greet('owen')


function print(pt:{x:number,y:number}){
    console.log('x为:'+pt.x);
    console.log('y为:'+pt.y);
}
print({
    x:1,
    y:2
})

function printName(obj:{first: string,last?: string}){
    console.log('first为:'+obj.first);
    console.log('last为:'+obj.last);
}

printName({
    first:'He',
    last:'wenkai'
})



function printId(id:number|string){
    console.log(id);
    //缩小联合类型判断
    if(typeof id==='string'){
        console.log(id.toLowerCase());
    }
}
printId('11')


function getFirstThree(x:number[]|string){
    return x.slice(0,3)
}
console.log(getFirstThree('3daedaeda'));
console.log(getFirstThree([2,312,423,24,323]));


//类型别名
type Point={
    x:number
    y:number
}
function printPoint(p:Point){
    console.log(p.x);
    console.log(p.y); 
}

printPoint({
    x:200,
    y:300
})

//接口
interface point{
    x:number
    y:number
}

function printpoint(pt:point){
    console.log(pt.x);
    console.log(pt.y);

}

printPoint({
    x:200,
    y:300
})




interface Animal{
    name:string
}
interface Bear extends Animal{
    honey:boolean
}

const bear:Bear={
    name:'owen',
    honey:true
}


interface person{
    name:string
}
interface person{
    age:number
}
const per:person={
    name:'owen',
    age:26
}


enum Direction{
    Up=1,
    Down,
    Left,
    Right
}
console.log(Direction.Up);
console.log(Direction.Down);


