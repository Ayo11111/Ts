// Object表示一个js对象(意义不大)
let a: object
a = {}
a = function () { }

// {}用来置顶对象中可以包含哪些属性
// 语法 {属性名：属性值，属性名：属性值}
// 在属性名后边加上？，表示属性是可选的
let b: { name: string, age?: number }
b = { name: '孙悟空' }

// [propName:string]:any 表示任意类型的属性
let c: { name: string, [propName: string]: any };
c = { name: '猪八戒', b: 1 }


/**
 * 设置函数结构的类型说明
 *  语法：（形参：类型，形参：类型）=> 函数返回值类型
 */
let d: (a: number, b: number) => number
d = function f2(n1: number, n2: number): number {
    return n1 + n2
}


/**
 * 数组的类型声明：
 *                  Array<类型>
 *                  类型[]
 */
// string[] 表示字符串数组（还可以是number[]....）
let e: string[]
e = ['1', '2']

let f: Array<number>
f = [2, 3]

/**
 * 元组，元组就是固定长度的数组
 *  语法：
 *      [类型，类型]
 */
let h: [string, string]
h = ['1', '2']

/**
 * enum 枚举
 */
enum Gender{
    male = 0,
    female = 1
}

let i: { name: string, gender: Gender }
i = {
    name: '孙悟空',
    gender: Gender.male
}

// &表示同时
let j: {name:string} & {age:number}
j = {
    name:'1',
    age: 1
}

// 类型的别名
// type mytype = string
type mytype = 1|2|3|4|5
let k: mytype
let l: mytype
k = 1
