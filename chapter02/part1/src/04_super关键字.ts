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
                super(name) // 调用父类的构造函数
                // 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
                this.age = age
               
            }

            sayhi() {
                // 在类的方法中，super就表示当前类的父类
                super.sayhi()
            }
            
        }

        const dog = new Dog('汪汪狗')
        dog.sayhi()
    }
)()