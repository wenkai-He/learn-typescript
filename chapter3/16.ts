//abstract
//抽象类 强制子类一定拥有父类的抽象方法、抽象属性
//规范子类 无法实例化
abstract class animation16 {
    abstract name:string
    abstract move():void
    protected getPos(): number[] {
        return [100, 200]
    }
}
class tank16 extends animation16 {
    name:string='威震天'
    public move(): void {
        console.log('tank move');
        
    }
}
class player16 extends animation16 {
    name:string='owen'
    public move(): void {
        console.log('player move');
        
    }
}
const weizhentian=new tank16()
weizhentian.move()

const owen16=new player16()
owen16.move()