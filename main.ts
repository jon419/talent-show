controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    audience.setImage(assets.image`clap2`)
    star = sprites.createProjectileFromSprite(simplified.chooseRandomImage(assets.image`star`, assets.image`rose`, img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `), audience, randint(-80, 80), randint(-50, -100))
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    audience.setImage(assets.image`clap1`)
})
let star: Sprite = null
let audience: Sprite = null
scene.setBackgroundImage(assets.image`stage`)
let talent = sprites.create(assets.image`towering turtles`, SpriteKind.Player)
talent.bottom = 115
game.splash("Press (A) to play!")
info.startCountdown(10)
audience = sprites.create(assets.image`clap1`, SpriteKind.Player)
audience.bottom = 120
music.play(music.createSong(hex`0078000408320100001c00010a006400f4016400000400000000000000000000000000050000042b0004003400011d3c004000011e40004400012244004800012448004c0002191e100614060120180640060120`), music.PlaybackMode.InBackground)
