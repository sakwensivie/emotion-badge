input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Sad)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
