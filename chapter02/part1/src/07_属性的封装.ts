(
    function() {
        class Person {
            // ts可以在属性前加修饰符

            /**
             *  public 修饰的属性可以在任意位置访问（修改） 默认值 (包括子类也可以访问)
             *  private 私有属性 ，只能在类的内部进行访问（修改）
             *      - 通过在类中添加方法使得私有属性可以被外部访问
             *  protected 受保护的属性，只能在当前类和当前类的子类中使用
             */
           public _name:string
           private age:number

            constructor(name:string,age:number) {
                this._name = name
                this.age = age
            }

            /**
             *  getter方法是用来读取属性
             *  setter方法是用来设置属性
             *      - 它们被称为属性的存取器
             */

            // 定义方法用来获取age属性
            // getage(){
            //     return this.age
            // }

            // // 定义方法用来设置age属性 (这里可以控制数据安全，这个参数需要满足某一条件时才可生效)
            // setage(value:number) {
            //     if(value <= 0) {
            //         alert('年龄不可修改为负数')
            //         return
            //     }
            //     this.age = value
            // }

            // TS中设置setter,getter方法的方式
            get name() {
                return this._name
            }
            set name(value:string) {
                this._name = value
            }

        }
        
        const per = new Person('孙悟空',18)

        /**
         * 现在属性是在对象中设置的，属性可以被任意的修改
         *  属性可以任意被修改将会导致对象中的数据变得非常不安全
         */
        // per.setage(18)
        per.name // 调用的是get方法
        per.name = 'ggbo' // 调用的是set方法

        class A {
           protected num:number

            constructor(num:number) {
                this.num = num
            }
        }

        class B extends A {
            test(){
                console.log(this.num);
            }
        }

        class C {
            /**
             * 
             *  protected num:number

                constructor(num:number) {
                    this.num = num
                }

                constructor(public num:number){} (这样的写法等价于上面那种定义属性的写法)
             */

            // 可以直接将属性定义在构造函数中
            constructor(public name:string,public age:number){}  // 这样的写法等价于上面那种定义属性的写法
        }

        

        const x = new B(1)
        x.num  // 因为这个属性的修饰符是protected，所以实例不能访问

        const t = new C('网',1)
    }
)()