class Snake {
    // 表示蛇头的元素
    head: HTMLElement
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection
    // 获取蛇的容器
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement
        // 这里如果用queryselectALL的话，返回值是死的，每一次增减都得重新获取，用getElementsByTagName返回的是一个集合，就可以避免这个问题
        this.bodies = this.element.getElementsByTagName('div');
    }

    // 获取蛇头的坐标
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }

    // 设置蛇头的坐标
    set X(value: number) {

        // 如果新值和旧值相同，则直接返回不再修改
        if (this.X === value) {
            return
        }

        // X的值的合法范围是0-290之间
        if (value < 0 || value > 290) {
            // 进入判断说明蛇撞墙了（抛出异常，程序就会终止运行）[用trycatch捕获后程序是会继续运行的]
            throw new Error('蛇撞墙了')
        }

        this.head.style.left = value + ''
    }
    set Y(value: number) {

        if (this.Y === value) {
            return
        }

        if (value < 0 || value > 290) {
            // 进入判断说明蛇撞墙了
            throw new Error('蛇撞墙了')
        }

        this.head.style.top = value + ''
    }

    // 蛇增加身体的方法
    addBody() {
        // 向蛇的容器中添加一个div(beforeend:在结束标签以前)
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }
}

export default Snake