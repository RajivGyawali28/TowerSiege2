class Blockb{
    constructor(x,y,width,height){
        var options={
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world,this.body);
    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed<3){
            var pos = this.body.position;
            push();
            rectMode(CENTER);
            fill(255,192,203);
            rect(pos.x, pos.y, this.width, this.height);
            pop();
            }
            else{
              World.remove(world,this.body)
              push();
              this.Visiblity = this.Visiblity-5;
              pop();
            }
    }
};