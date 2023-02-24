class Circle{
    constructor(radius = null){
        this.radius = radius;
    }
    getArea(){
        return ((this.radius**2)*Math.PI);
    }
    getCircumference(){
        return 2*Math.PI*this.radius;
    }
}


const circle = new Circle(3);
console.log(circle.getArea()); // 28.274..
console.log(circle.getCircumference());
