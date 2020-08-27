class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.launcher = Constraint.create(options);
        this.pointB = pointB;
     
        World.add(world, this.launcher);
    }
    attach(body){
        this.launcher.bodyA = body;
        console.log(body);
    }
    display(){
        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(1);
        stroke("#FF0033");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    

    fly(){
        this.launcher.bodyA = null;
    }

    
}