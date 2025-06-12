let Vanalog = 0
let k = 0
input.onButtonPressed(Button.A, function () {
    Vanalog = 3.2
    k = 1023 / Vanalog
    basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P0) / 310)
})
