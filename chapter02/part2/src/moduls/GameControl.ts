// 引用其他的类
import Snake from "./snanke"
import Food from "./Food"
import ScorePanel from "./ScorePanel"

// 游戏控制器，控制其他所有的类
class GameControl {
    // 定义三个属性
    // 蛇
    snake: Snake;
    // 食物
    food: Food
    // 记分牌
    scorePanel: ScorePanel
    // 创建一个值记录游戏是否结束
    isLive = true
    // 记录计时器的id
    // timeId: number

    // 创建一个属性保存蛇的移动方向（按键的方向）
    direction: string = 'Right'

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()

        this.init()
    }

    // 游戏的初始化方法，调用后游戏开始
    init() {
        // 绑定键盘按下的实现 （因为这个函数是回调，所以this拿不到directio,所以要用bind去改变this指向）
        document.addEventListener('keydown', this.keydownHandle.bind(this))

        // 调用run方法，使蛇移动
        this.run()
    }

    // 创建一个键盘按下的响应函数
    // ArrowUp  Up
    // ArrowDown  Down
    // ArrowLeft  Left
    // ArrowRight Right  
    keydownHandle(event: KeyboardEvent) {
        // 需要检查event.key的值是否合法
        // const isLegal = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Up', 'Down', 'Left', 'Right'].includes(event.key)

        // if (isLegal) {
        //     // 因为这个函数是回调，所以this拿不到direction
        //     this.direction = event.key
        // }
        
        this.direction = event.key
    }

    // 创建一个控制蛇移动的方法
    run() {
        // this.timeId && clearTimeout(this.timeId)
        /**
         * 根据方向来使蛇位置改变
         *  向上 top减少
         *  向下 top增加
         *  向左 left减少
         *  向右 left增加
         */

        // 获取蛇的坐标
        let X = this.snake.X
        let Y = this.snake.Y

        // 根据方向修改蛇的坐标
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10
                break;

            case 'ArrowDown':
            case 'Down':
                Y += 10
                break;

            case 'ArrowLeft':
            case 'Left':
                X -= 10
                break;

            case 'ArrowRight':
            case 'Right':
                X += 10
                break;
        }

        // 检查蛇是否吃到食物
        this.checkEat(X, Y)

        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (error) {
            // 进入到catch说明出现了异常，说明游戏结束，弹出一个提示信息
            alert('游戏结束')
            this.isLive = false
        }


        // 开启一个定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    // 定义一个方法，用来检查蛇是否吃到食物
    checkEat(x: number, y: number) {
        if (x === this.food.X && y === this.food.Y) {
            // 食物的位置要进行重置
            this.food.change()
            // 分数增加
            this.scorePanel.addScore()
            // 蛇要增加一节
            this.snake.addBody()
        }
    }
}

export default GameControl