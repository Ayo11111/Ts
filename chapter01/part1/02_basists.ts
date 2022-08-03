// 声明一个变量a，同时置顶它的类型为number
let a: number;

a = 10
a = 20
// a = 'hi' // 此行代码会报错，因为变量a的的类型为number，不能赋值一个string

// 声明完变量直接进行赋值
// let c: boolean = true

// 如果变量的声明和赋值是同时进行的，Ts可以自动对变量进行类型检测
let c = true
// c = 10 //此行代码也会报错

// 函数传参时也能指定类型 (函数后的number指的是函数返回值的类型)
function sum (a: number,b: number): number {
    // return a + 'hello' // 这行代码也会报错，因为类型不对
    return a+b
}

// console.log(sum(1,'3',5)); // 多传参数也会报错，传错类型也会报错
let results = sum(1,5)
