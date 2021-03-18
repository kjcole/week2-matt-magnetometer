let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    serial.writeValue("degrees", input.compassHeading())
    serial.writeLine("")
    basic.pause(500)
})
