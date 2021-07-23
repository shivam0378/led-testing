let strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB_RGB)
basic.forever(function () {
    for (let index = 0; index <= 6; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(500)
    }
    for (let index = 0; index <= 6; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(500)
    }
    for (let index = 0; index <= 6; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(500)
    }
    for (let index = 0; index <= 6; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
        basic.pause(500)
    }
})
