class Snake {
    // 表示蛇头的元素
    head: HTMLElement
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection
    // 获取蛇的容器
    element:HTMLElement

    constructor() {
        this.element = document.getElementById('snake')!
        this.head = <HTMLElement>document.querySelector('#snake > div')
        // 这里如果用queryselectALL的话，返回值是死的，每一次增减都得重新获取，用getElementsByTagName返回的是一个集合，就可以避免这个问题
        this.bodies =  this.element.getElementsByTagName('div');
    }

    // 获取蛇头的坐标
    get X () {
        return this.head.offsetLeft
    }
    get Y () {
        return this.head.offsetTop
    }

    // 设置蛇头的坐标
    set X (value:number){
        this.head.style.left = value + ''
    }
    set Y (value:number){
        this.head.style.top = value + ''
    }

    // 蛇增加身体的方法
    addBody() {
        // 向蛇的容器中添加一个div(beforeend:在结束标签以前)
        this.element.insertAdjacentHTML('beforeend','<div></div>')
    }
}

export default Snake