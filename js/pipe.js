// 陆地绘制
function Pipe(option){
    this.ctx = option.ctx;
    this.pipeTop = option.pipeTop;
    this.pipeBottom = option.pipeBottom;
    this.x = option.x;


    this.imgW = this.pipeTop.width;
    this.imgH = this.pipeTop.height;
    this.topY = 0;
    this.bottomY = 0;
    this.speed = 2;
    this.padding = 150;

    // 执行一遍
    this.getY();
}

Pipe.prototype = {
    constructor:Pipe,
    drawPipe:function(){
        this.x -=this.speed;
        if(this.x < -3*this.imgW){
            this.x += 3*this.imgW * 6;
            // 每一次绘制一次管道重新获取
            this.getY();
        }
        // 绘制顶部的管道
        this.ctx.drawImage(this.pipeTop,this.x,this.topY);
        // 给管道画上路径
        this.ctx.rect(this.x,this.topY,this.imgW,this.imgH);
        // 绘制下面的管道
        this.ctx.drawImage(this.pipeBottom,this.x,this.bottomY);
        this.ctx.rect(this.x,this.bottomY,this.imgW,this.imgH);
    },
    getY:function(){
        this.topY = -(Math.random()*230 +120);
        this.bottomY = this.topY + this.imgH + this.padding;
    }
}