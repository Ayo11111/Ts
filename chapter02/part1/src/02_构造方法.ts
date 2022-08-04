class Dog {
    name: string
    age: number

    // 构造函数，会在对象创建时调用（每一次new都会调用这个构造函数）
    constructor(name: string, age: number) {
        // 在实例方法中，this就表示当前的实例，谁在new，this就是谁
        this.name = name
        this.age = age
    }

    bark() {
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this);
    }
}
const dog = new Dog('三月', 2)
const dog2 = new Dog('十月', 3)

console.log(dog);
console.log(dog2);
