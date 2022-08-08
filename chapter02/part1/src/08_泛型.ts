/**
 * 在定义函数或是类时，如果遇到类型不明确就可以使用泛型
 */
function fn<K>(a:K):K {
    return a
}

// 可以直接调用具有泛型的函数
fn(10) //不指定泛型，TS可以自动对类型进行推断 （并不是所有类型都可以）
fn<string>('hello') // 指定泛型

// 泛型也可以指定多个
function fn2<T,K>(a:T,b:K):T{
    return a
}

fn2<string,number>('hi',2)

interface Inter {
    length:number
}
// T这个是inter这个接口的子类
function fn3<T extends Inter>(a:T):number {
    return a.length
}
fn3({length:1})
fn3('hi')

class Myclass<T> {
    name:T
    constructor(name:T) {
        this.name = name
    }
}

const i  = new Myclass<string>('孙悟空')