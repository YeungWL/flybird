// 绘制陆地
function Land(option){
    this.ctx = option.ctx;
    this.landImg = option.landImg;
    this.x = option.x;
    this.y = option.y;

    // 背景移动的步长
    this.landSpeed = 2;
    this.landWidth = this.landImg.width;
}

Land.prototype = {
    constructor:Land,
    drawLand:function(){
        this.x -= this.landSpeed;
        // 判断陆地是否已经已经超出自身的宽度
        if(this.x < -this.landWidth){
            this.x += 4*this.landWidth;
        }
        // 绘画陆地
        this.ctx.drawImage(this.landImg,this.x,this.y);
    }
}