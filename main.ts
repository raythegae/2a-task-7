let light_level = 0
input.onButtonPressed(Button.A, function () {
    light_level = input.lightLevel()
    basic.showString("" + (light_level))
})
basic.forever(function () {
	
})
