enum SpriteKindLegacy {
    Player,
    Food,
    Enemy,
    Projectile
}
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Food, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    otherSprite.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
    info.startCountdown(5)
})
let donut: Sprite = null
scene.setTileMap(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 c 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 4 
4 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 8 8 8 8 7 7 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 8 8 7 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 7 7 7 7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`)
scene.setTile(4, img`
4 4 4 4 4 4 4 4 4 4 4 e e e e e 
4 4 e 4 4 4 4 4 4 4 4 e 4 4 4 e 
4 4 e 4 4 4 4 4 4 4 4 e 4 4 4 e 
4 4 4 4 e e 4 4 4 4 4 e e 4 4 e 
4 4 4 4 4 4 4 e e 4 4 4 e 4 4 e 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
4 4 4 4 4 e 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 e e e 4 4 4 4 4 4 4 e 
4 4 4 e 4 4 4 4 4 4 4 4 4 4 4 e 
4 4 4 4 4 4 4 4 4 4 4 4 e 4 4 4 
4 4 4 4 4 4 4 e e 4 4 4 e 4 4 4 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e e e e e e e 4 4 4 4 4 4 4 4 4 
`, true)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 5 5 7 7 7 7 7 7 7 5 7 7 
7 7 7 7 5 5 7 7 7 7 7 7 7 5 7 7 
7 7 7 5 5 5 7 7 7 7 7 7 7 5 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 5 5 7 7 7 7 7 7 7 7 5 5 7 7 
7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, false)
scene.setTile(8, img`
8 8 8 8 8 8 8 8 8 6 8 8 8 8 8 8 
8 8 8 8 8 6 8 8 6 6 6 6 6 8 8 8 
6 6 6 8 8 8 8 8 8 8 8 6 6 8 8 8 
6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 6 8 8 8 8 8 8 8 6 6 8 8 8 8 
8 8 8 8 8 8 8 8 6 8 6 6 6 8 8 8 
8 8 8 6 6 8 8 6 8 8 6 6 8 6 8 8 
8 8 8 6 8 8 8 6 8 8 8 6 6 8 8 8 
8 8 8 6 8 8 8 6 8 8 8 8 8 8 6 8 
8 8 8 6 6 6 6 6 6 6 8 6 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 6 8 8 
8 8 8 8 8 6 6 6 6 6 6 6 6 8 8 8 
8 8 8 8 6 8 8 8 8 8 8 8 8 8 8 8 
`, true)
let mySprite = sprites.create(img`
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f 3 3 f f e e e e f f 3 3 f . 
. f b b f b f e e f b f b b f . 
. f b b e 1 f 4 4 f 1 e b b f . 
f f b b f 4 4 4 4 4 4 f b b f f 
f b b f f f e e e e f f f b b f 
. f e e f b d d d d b f e e f . 
. . e 4 c d d d d d d c 4 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`, SpriteKindLegacy.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 20; index++) {
    donut = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKindLegacy.Food)
    donut.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
}
info.startCountdown(5)
