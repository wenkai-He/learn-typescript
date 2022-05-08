"use strict";
class Father {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
}
//静态属性只能被Father调用 实例不能调用 继承的Son可以调用
Father.width = '100px';
class Son extends Father {
    say() {
        console.log(this.sex);
        console.log(this.age);
    }
}
let personson = new Son('zayn', 'nan', 18);
let person = new Father('owen', 'nv', 18);
console.log(person.sex);
console.log(person.age);
console.log(person.name);
console.log(Father.width);
console.log(Son.width);
//抽象类不能被实例化
class Animal {
    move() {
        console.log('roaming the earch...');
    }
}
let animal = new Animal();
class bull extends Animal {
    makeSound() {
        console.log('miao miao');
    }
}
