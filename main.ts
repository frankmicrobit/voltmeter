let k = 0
input.onButtonPressed(Button.A, function () {
    k = 1024 / 3
    basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P0) / k)
})
