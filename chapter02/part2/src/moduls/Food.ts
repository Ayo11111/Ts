class Food {
    // 定义一个属性标识食物所对应的元素
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('food')!; // 这个叹号就表示这个值不会为空
    }

    // 获取食物x轴坐标
    get X() {
        return this.element.offsetLeft
    }

    // 获取食物y轴坐标的仿佛
    get Y() {
        return this.element.offsetTop
    }

    // 修改食物设置的方法
    change() {
        // 生成一个随机的位置
        // 食物的位置最小是0，最大是290
        // 蛇移动一次就是一格，一格的大小就是10，所以要求食物的坐标必须是整10
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10

        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

export default Food;