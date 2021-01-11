class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image=loadImage("Images/boy.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);
      image(this.image,this.x,this.y, this.width, this.height);
    }
  };