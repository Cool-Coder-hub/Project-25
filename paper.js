class Paper{
    constructor(x,y,r,options){
        var options = {
            isStatic=true,
            restitution:0.3,
            friction:0,
            density
        }
            this.x = x;
            this.y = y;
            this.r = r;
            this.image = loadImage("paper.png");
            this.body = Bodies.circle(this.x,this.y,this.r/2,options);
            World.add(world,this.Bodies);
    }
    display(){
            var pos = this.body.position;
            push();
            imageMode(CENTER);
            translate(pos.x,pos.y);
            image(this.image,0,0,this.r,this.r);
            pop();
    }
}