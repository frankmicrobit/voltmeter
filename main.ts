input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 48; index++) {
        k = 1024 / 3
        radio.sendNumber(pins.analogReadPin(AnalogReadWritePin.P0) / k * 5 + 0.98)
        basic.pause(50)
    }
})
input.onButtonPressed(Button.B, function () {
    I = 11
    for (let index = 0; index < 48; index++) {
        radio.sendNumber(I)
        I += 0.05
        basic.pause(50)
    }
})
let I = 0
let k = 0
radio.setGroup(100)
