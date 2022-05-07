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