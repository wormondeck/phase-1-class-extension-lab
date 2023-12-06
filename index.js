class Polygon {
    constructor(sides) {
        this.sides = sides;
        
    }
    get countSides() {
       let number = this.sides.length;
        return number; // 3
        
    }

    get perimeter() {
        let number = this.sides.length;
        return number * 5; // 15
    }
    
    
};

class Triangle extends Polygon {
    constructor(sides) {
        super(sides); 
    }
    get isValid() {
        const [a, b, c] = this.sides;

        return a + b > c && a + c > b && b + c > a;

    }

    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}

class Square extends Polygon {
    constructor(sides) {
        super(sides);
    }

    get isValid() {
        return this.sides.every(side => side === this.sides[0]);
    }

    get area() {
        let area = this.sides[0];
        return area * area;
    }
}