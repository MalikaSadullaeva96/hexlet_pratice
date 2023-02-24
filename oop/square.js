class Square{
    constructor(side){
        this.side = side;
    }
    getSide(){
        return this.side;
    }
}
class SquaresGenerator{
    static generate(sideL, quantity){
        let i = 0;
        let arr = []
        while(i<quantity){
            arr[i] = new Square(sideL);
            i += 1;
        }
        return arr;
    }
}
const square = new Square(10);
console.log(square.getSide()); // 10
const squares = SquaresGenerator.generate(3, 2);
console.log(squares);
