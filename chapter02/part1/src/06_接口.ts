(
    function () {

        /* 
            接口就是用来定义一个类的结构,用来定义一个类中包含哪些属性和方法
                同时接口也可以当成类型声明去使用

        */
       type mytype = {
            name: string;
            age: number;
       }

        // 重复声明同名接口时，里面定义的会是相加效果
        interface myInterface {
            name: string;
            age: number;
        }
        interface myInterface {
            gender:string;
        }

        // const obj: myInterface = {
        //     name: 'sss',
        //     age: 18,
        //     gender:'x'
        // }

        /**
         * 接口可以在定义类的时候去限制类的结构
         *      接口中所有的属性都不能有具体的值
         *      接口只定义对象的结构，而不考虑实际值
         *          在接口中所有的方法都是抽象发发
         */
        interface myInter {
            name:string

            sayhi():void
        }

        /**
         * 定义类时，可以使类去实现一个接口
         *      实现接口就是使类满足接口的要求
         */
        class Myclass implements myInter{
            name: string;

            constructor(name:string){
                this.name = name
            }

            sayhi(): void {
                console.log('大家好');
            }
            
        }

    }
)()