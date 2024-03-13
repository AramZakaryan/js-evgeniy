class Car {
    constructor(mark, speed) {
        this.mark = mark
        this.speed = speed
    }
    speedInfo = function () {
        console.log("Speed is " + this.speed)
    }
}

class ColoredCar extends Car {
    sayColor =function () {
        console.log("blue")
    }
 
}


function GGG () {
    console.log(ésss)
}

const car1=new ColoredCar("mers", 100)

console.log(Car.__proto__.__proto__===Object.prototype)