//static
class axios13{
    //实例对象不能范围 只能类访问
    static site:String='baidu.com'
}

const url=new axios13()
// console.log(url.site);
console.log(axios13.site);
