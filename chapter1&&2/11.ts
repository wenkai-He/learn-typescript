//结构断言 const断言

function owen11(){
    let a='owen'
    let b=(x:number,y:number):number=>x+y;
    return [a,b] as const
}

const [n,m]=owen11()
m(2,4) 


//非空断言 说明这两个dom不可能为空
//dom转化为断言可以更好的获取代码提示
const el:HTMLDivElement=document.querySelector('.owen')!
const el1:HTMLDivElement=document.querySelector('.owen') as HTMLDivElement