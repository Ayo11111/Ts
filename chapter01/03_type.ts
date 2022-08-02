// 也可以使直接使用字面量进行类型声明（即其本身），该变量只能赋值为这个字面量
let a: 10;
a = 11

// 可以使用|来链接多个类型 （联合类型）
let b: 'male' | 'female'

let c: string | boolean
c = 1
c = {}

// any标识任意类型，一个变量设置类型为any后，相当于对改变了关闭了TTS的类型检测
// 使用ts时，不建议使用any类型
// let d: any

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
let d

// unknown 表示未知类型的值
let e: unknown
e = 10
e = 'hi'
e = true

let s: string

// d的类型为any，它可以赋值给任意变量，不会报错
// s = d 

e = 'hello'

// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值不能直接赋值给其他变量
if(typeof e === 'string') {
    s = e
}

// 类型断言,可以用来告诉解析器变量的实际类型
/**
 * 
 * 语法：
 *         变量 as 类型
 *         <类型>变量
 */
s = e as string
s = <string>e

// void 用来表示为空，以函数为例，就表示没有返回值的函数 比如undefined和null都算是
function fn(): void {
    return 
}

// never 表示永远不会返回结果
// 比如这个函数，抛出错误就代表代买终止运行，也不会有返回值，连undefined都不会有
function fn2(): never {
    throw new Error('报错了')
}