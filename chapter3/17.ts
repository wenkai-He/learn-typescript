//接口
interface Animation17{
     name:string
     move():void
}
abstract class animation17 {
    
    protected getPos(): number[] {
        return [100, 200]
    }
}
class tank17 extends animation17 implements Animation17{//实现接口
    //即被接口约束又被抽象类规范
    name:string='威震天'
    public move(): void {
        console.log('tank move');
        
    }
}
class player17 extends animation17 {
    name:string='owen'
    public move(): void {
        console.log('player move');
        
    }
}
