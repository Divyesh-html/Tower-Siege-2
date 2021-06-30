class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity=255;
      World.add(world, this.body);
    }
    display(){

      console.log(this.body.speed)
      if(this.body.speed<3){
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
      }else{
        World.remove(world,this.body);
        push();
        tint(255,this.Visiblity)
        //image(this.Image, this.body.position.x, this.body.position.y, 50, 50)
        this.Visiblity = this.Visiblity - 5;
        pop();
      }
    }
}