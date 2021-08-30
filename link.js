class Link{
    constructor(bodyA,bodyB){
        var lastLink=bodyA.body.bodies.length-2
        this.link=Constraint.create({
            bodyA: bodyA.body.bodies[lastLink],
            bodyB: bodyB,
            length:30,
            stiffness: 0.1
          });
        World.add(world,this.link)
    }
    break(){
        World.remove(world,this.link)
    }
}