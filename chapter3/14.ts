//单例
//只创建一个实例 构造函数只执行了一次
class axios14{
    private static instance:axios14|null=null
    private constructor(){
        console.log('私有构造函数');  
    }
    static make():axios14{
        if(axios14.instance===null){
            axios14.instance=new axios14()
        }
        return axios14.instance
    }
}

const instance1=axios14.make()
const instance2=axios14.make()
const instance3=axios14.make()
const instance4=axios14.make()

