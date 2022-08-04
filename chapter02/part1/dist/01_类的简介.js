"use strict";
// 使用class关键字来定义一个类
/**
 *  类主要包含两个部分：
 *      属性
 *      方法
 */
class Person {
    constructor() {
        /**
         * 前面加上readonly变成只读的 (如果readonly和static一起用，前者要在后者的后面)
         */
        // 定义实例属性，需要通过对象的实例去访问
        this.name = '孙悟空';
    }
    // 定义方法（和定义属性一样，前面加上static就是静态）
    sayhi() {
        console.log('hi');
    }
}
//    readonly name: string = '孙悟空'
// 定义类属性（静态属性）前面加上static关键字，静态属性只能通过类访问
Person.age = 18;
const per = new Person();
// 静态属性只能通过类访问
console.log(Person.age);
console.log(per.name);
