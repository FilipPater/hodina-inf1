let pořadí = 0
function blikni (x: number, y: number) {
    pořadí = 0
    led.plot(x, y)
    basic.pause(20)
    led.unplot(x, y)
    basic.pause(20)
}
input.onButtonPressed(Button.A, function () {
    pořadí = 0
    for (let pořadí = 0; pořadí <= 3; pořadí++) {
        blikni(pořadí, 0)
    }
    for (let pořadí = 0; pořadí <= 3; pořadí++) {
        blikni(4, pořadí)
    }
    for (let pořadí = 0; pořadí <= 3; pořadí++) {
        blikni(4 - pořadí, 4)
    }
    for (let pořadí = 0; pořadí <= 2; pořadí++) {
        blikni(0, 4 - pořadí)
    }
    for (let pořadí = 0; pořadí <= 3; pořadí++) {
        blikni(pořadí, 1)
    }
    for (let pořadí = 0; pořadí <= 1; pořadí++) {
        blikni(3, 2)
    }
    for (let pořadí = 0; pořadí <= 3; pořadí++) {
        blikni(4, 2 - pořadí)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 100000000000000000000; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(300)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(300)
    }
})
basic.forever(function () {
	
})
