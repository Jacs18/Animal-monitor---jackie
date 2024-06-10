input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature())
    basic.clearScreen()
})
basic.forever(function () {
    // Maximum temperature
    // Minimum temperature
    if (input.temperature() >= 42 || input.temperature() <= 22) {
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
