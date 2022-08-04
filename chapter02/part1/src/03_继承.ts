(
    function () {
        // 定义一个animal类
        class Animal {
            name: string
            age: number

            constructor(name: string, age: number) {
                this.name = name
                this.age = age
            }

            sayhi() {
                console.log('动物叫');

            }
        }

        // 使dog类继承Animal类
        /**
         *      Dog extends Animal
         *     - 此时，Animal被称为父类，Dog被称为子类
         *     - 使用继承后，子类将会拥有父类所有的方法和属性
         *     - 通过继承可以将多个类中共有的代码写在一个父类中
         *             这样只需写一次即可让所有的子类都同时拥有父类中的属性
         *             如果希望在子类中添加一些父类中没有的属性或方法，直接加就行
         *             如果子类添加的方法在父类中也有，子类的方法就会覆盖父类的方法 （同名情况）【子类覆盖父类的形式叫做方法重写】
         */
        class Dog extends Animal {
           run() {
                console.log(`${this.name}在疯狂的跑`);
           }

           sayhi() {
                console.log('汪汪汪');
           }
        }

        class Cat extends Animal {
           
        }

        const dog = new Dog('旺财', 2)
        console.log(dog);

        const cat = new Cat('三月',2)
        console.log(cat);
        
    }
)()



