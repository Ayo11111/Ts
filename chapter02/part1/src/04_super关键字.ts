(
    function(){
        class Animal {
            name: string

            constructor(name:string) {
                this.name = name
            }

            sayhi(){
                console.log('你好');
            }
        }

        class Dog extends Animal {

            age:number

            constructor(name:string,age:number) {
                 // 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
                //  不然会出现父类属性无法完成初始化的问题
                super(name) // 调用父类的构造函数
                this.age = age
               
            }

            sayhi() {
                // 在类的方法中，super就表示当前类的父类
                super.sayhi()
            }
            
        }

        const dog = new Dog('汪汪狗',14)
        dog.sayhi()
    }
)()