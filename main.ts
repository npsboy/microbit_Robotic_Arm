/**
 * 25,
 * 
 * 74
 */
/**
 * 100          45
 * 
 * 170          57
 */
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    for (let index2 = 0; index2 < 2; index2++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
    }
    basic.showString("0")
    position = pickup
    for (let index = 0; index <= 5; index++) {
        if (angle_1 > position) {
            while (!(angle_1 == position)) {
                angle_1 += -1
                basic.pause(20)
            }
        } else {
            if (angle_1 < position) {
                while (!(angle_1 == position)) {
                    angle_1 += 1
                    basic.pause(20)
                }
            }
        }
        if (!(index == 0)) {
            basic.pause(2000)
            while (!(angle_2 == 170)) {
                angle_2 += 1
                basic.pause(20)
            }
            basic.pause(1500)
            angle_3 = 0
            basic.pause(1000)
            while (!(angle_2 == 130)) {
                angle_2 += -1
                basic.pause(20)
            }
        }
        if (!(index == 5)) {
            basic.pause(500)
            while (!(angle_2 == 170)) {
                angle_2 += 1
                basic.pause(20)
            }
            basic.pause(1500)
            angle_3 = 50
            basic.pause(1000)
            while (!(angle_2 == 100)) {
                angle_2 += -1
                basic.pause(20)
            }
            basic.pause(2000)
            if (position == pickup) {
                position = drop
            } else {
                position = pickup
            }
        }
        basic.showString("" + (index + 1))
    }
})
let position = 0
let angle_3 = 0
let angle_2 = 0
let angle_1 = 0
let drop = 0
let pickup = 0
let index = -1
pickup = 72
drop = 18
angle_1 = 18
angle_2 = 100
angle_3 = 0
basic.forever(function () {
    servos.P1.setAngle(angle_3)
})
basic.forever(function () {
    servos.P0.setAngle(angle_1)
})
basic.forever(function () {
    servos.P2.setAngle(angle_2)
})
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        if (angle_1 > 0) {
            angle_1 += -0.5
        }
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        if (angle_1 < 180) {
            angle_1 += 0.5
        }
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        if (angle_2 > 100) {
            angle_2 += -1
        }
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.LogoDown)) {
        if (angle_2 < 170) {
            angle_2 += 1
        } else {
            angle_2 = 172
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        angle_3 = 0
    }
})
basic.forever(function () {
    if (!(angle_3 == 0)) {
        angle_3 = (angle_2 - 100) / 5.8 + 45
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        angle_3 = (angle_2 - 100) / 5.8 + 45
    }
})
