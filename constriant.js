class Sling{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
    
        var Op={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX, y:this.offsetY},
        stiffness: 0.01,
        length: 1
        }

        this.sling=Constraint.create(Op)
        World.add(world,this.sling)
    }

    display(){
        if (this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
      //  console.log(pointB);
        stroke("black");
        strokeWeight(3)
     line(pointA.x, pointA.y, pointB.x-75,pointB.y-80);
        }
    }
    fly(){
        this.sling.bodyA=null;
    }
}