class Area {
    constructor(x, y, shape) {
        this.shape = shape;
        this.width = x;
        this.height = y;
    }

    getArea() {
        return (this.shape === 'Circle') ? Math.PI * Math.pow(this.height, 2) : this.height * this.width;
    }

    getAreaInfo() {
        console.log(`The Area of ${this.shape} is equal to ${this.getArea()}`);
    }
}


class Square extends Area {
    constructor(x) {
        super(x, x, 'square');
    }
}


class Rectangle extends Area {
    constructor(x, y) {
        super(x, y, 'rectangle');
    }
}

class Circle extends Area {
    constructor(x) {
        super(x, x, 'circle');
    }

    getArea() {
        return Math.PI * Math.pow(this.height, 2);
    }
}

function customAdd() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var shape = document.getElementById("shape").value.toLowerCase();
    var result;

    if (shape === 'square') {
        result = num1 * num1;
    } else if (shape === 'circle') {
        result = Math.PI * num1 * num2;
    } else if (shape === 'rectangle') {
        result = num1 * num2;
    } else {
        result = "ERROR: Invalid shape";
    }

    document.getElementById("result").innerHTML = "The result is: " + result;
}
