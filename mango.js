class Mango{
    constructor(x,y,r){
    var OP={
        isStatic:true,
        restitution:0.5,
        friction:1
    }
    this.image=loadImage("Images/mango.png");
    this.body = Bodies.circle(x,y,r,OP);
    this.r=r;
    World.add(world,this.body)
    }
    display(){
        var p=this.body.position;
        push()
        imageMode(CENTER);
        image(this.image,p.x,p.y, this.r*2,this.r*2);
        pop()
      }
}