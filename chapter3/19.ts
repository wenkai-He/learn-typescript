{
    //接口
    interface gameend {
        end(): void
    }
    //继承
    interface Animation17 {
        name: string
        move(): void
    }

    abstract class animation17 {
        protected getPos(): number[] {
            return [100, 200]
        }
    }
    class tank17 extends animation17 implements Animation17,gameend {//实现多接口
        //即被接口约束又被抽象类规范
        name: string = '威震天'
        public move(): void {
            console.log('tank move');
        }
        end(): void {
            console.log('game over');
        }
    }
    class player17 extends animation17 implements Animation17,gameend {
        name: string = 'owen'
        public move(): void {
            console.log('player move');
        }
        end(): void {
            console.log('game over');
        }
    }

}