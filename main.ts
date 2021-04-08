let Deree = 0
basic.forever(function () {
    Deree = input.compassHeading()
    if (Deree < 45) {
        basic.showString("N")
    } else if (Deree < 135) {
        basic.showString("E")
    } else if (Deree < 225) {
        basic.showString("S")
    } else if (Deree < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
