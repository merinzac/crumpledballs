class String {
    constructor (pointA,bodyB){
        var options = {
            pointA : pointA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10,
        }
        this.pointA= pointA
        this.string = Constraint.create(options);
        World.add (world,this.string);
    }
       display(){
           var pointA = this.pointA;
           var pointB = this.string.bodyB.position;
           strokeWeight(4);
           line(pointA.x,pointA.y,pointB.x,pointB.y);
       }
}
