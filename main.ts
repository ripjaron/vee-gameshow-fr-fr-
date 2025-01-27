input.onGesture(Gesture.ScreenUp, function () {
    game.addScore(1)
    basic.showNumber(game.score())
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (point == 1) {
        countp1 += 1
    } else {
        if (point == 2) {
            countp2 += 1
        }
    }
})
let countp2 = 0
let countp1 = 0
let point = 0
music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.LoopingInBackground)
basic.showString("Welcome!")
music.stopAllSounds()
basic.pause(1000)
basic.showString("GO!")
music.play(music.stringPlayable("E F G E F E G D ", 170), music.PlaybackMode.LoopingInBackground)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.tonePlayable(554, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showString("Player 1")
        point = 1
    }
})
