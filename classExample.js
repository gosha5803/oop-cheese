class Rect {
    constructor(h, w) {
        this.height = h,
        this.width = w
    }

    getSquare () {
        return this.height * this.width
    }

    getPerimetr () {
        return this.height*2 + this.width*2
    }
}

const rect = new Rect(20, 10)

console.log(rect.getPerimetr(), rect.getSquare())