class zone3 {
    constructor(x,y){
        var options = {
           isStatic:true
        }
        this.width = 20;
        this.height = 100;
        this.thickness = 20;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body)
    }
    display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rectMode(CENTER);
fill(250,0,0);
rect(0, 0,this.width,this.height)
pop();
    }
    
}