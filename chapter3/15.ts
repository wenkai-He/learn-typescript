//get set
class user15{
    private name:string
    constructor(name:string){
        this.name=name
    }
    public get():string{
        return this.name
    }
    public set(Name:string){
        this.name=Name
    }
}
const owen15=new user15('owen')
owen15.set('he')
console.log(owen15.get());


