"use strict";
// 使用class关键字来定义一个类
/**
 *  类主要包含两个部分：
 *      属性
 *      方法
 */
class Person {
    constructor() {
        // 定义实例属性
        this.name = '孙悟空';
    }
}
// 定义类属性（静态属性）前面加上static关键字，静态属性只能通过类访问
Person.age = 18;
const per = new Person();
// 静态属性只能通过类访问
console.log(Person.age);
console.log(per.name);
