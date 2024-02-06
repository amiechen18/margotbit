input.onButtonPressed(Button.A, function () {
    basic.pause(100)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.SmallHeart)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.play(music.stringPlayable("C5 C5 C5 - - - - - ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.SixG, function () {
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        # # # # #
        # . . . #
        `)
})
input.onSound(DetectedSound.Loud, function () {
    basic.pause(2000)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    basic.showString("MEOW")
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        # # # # #
        # . . . #
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    basic.pause(100)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.pause(100)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        # # # # #
        # . . . #
        `)
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        # . # . #
        `)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.pause(100)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.showIcon(IconNames.Asleep)
