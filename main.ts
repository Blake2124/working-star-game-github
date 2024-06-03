namespace SpriteKind {
    export const Image = SpriteKind.create()
    export const EnemyHitbox = SpriteKind.create()
    export const EnemyGun = SpriteKind.create()
    export const EnemyProjectile = SpriteKind.create()
    export const BOSS = SpriteKind.create()
    export const BOSSPROJECTILE = SpriteKind.create()
}
namespace StatusBarKind {
    export const BOSSHEALTH = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -110
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyProjectile, function (sprite, otherSprite) {
    statusbar.value += -2
})
sprites.onOverlap(SpriteKind.BOSSPROJECTILE, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -3
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BOSS, function (sprite, otherSprite) {
    statusbar.value += -5
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BOSS, function (sprite, otherSprite) {
    statusbar3.value += -2
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 28))
    statusbar.value += -50
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileIsWall(tiles.locationOfSprite(RayGun))) {
    	
    } else {
        if (Number2 == 0) {
            Bullet = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                c . . . . . . . . . . . . . . . 
                c c 6 . . . . . . . . . . . . . 
                c c 6 . . . . . . . . . . . . . 
                c . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, 0, 0)
            Bullet.setPosition(RayGun.x, RayGun.y)
            if (Number3 == 1) {
                Bullet.vx = -150
            } else if (Number3 == 2) {
                Bullet.vx = 150
            } else {
                Bullet.vx = 150
            }
            Number2 = 1
        }
    }
})
statusbars.onZero(StatusBarKind.BOSSHEALTH, function (status) {
    Number_3 = 0
    animation.runImageAnimation(
    BOSS,
    [img`
        ........6666......6666.........
        .......6699666666669966........
        ......659999999999999956.......
        ...555659955666666559956555....
        ...588658886559955688856885....
        ..58588655886666668855688585...
        ..58588666688888888666688585...
        ..658866556e777777e655668856...
        ...66666956eb6666be65966666....
        ..666666956eb6666be659666666...
        ...66666556eb6666be65566666....
        ..6566.6666eb6666be6666.6656...
        ...666.6559eebbbbee9556.666....
        ..58856.6666eeeeee6666.65885...
        ..58756.55666666666655.65875...
        ..66666665555555555556666666...
        .6587866666688888866666687856..
        .6587966666658778666666657856..
        .6666666666666666666666666666..
        685885869566659956665968588586.
        688888859566658856665958888886.
        665655659566668866665956556566.
        685885859666.6996.666958588586.
        685885859666.6666.666958588586.
        ..5885866666......6666685885...
        ...666666666......66666........
        .....6666666......66666........
        .....6666666......66666........
        ......66666........66666.......
        .....66856666....66665866......
        ....6588566666..6666658856.....
        ...6666666.666..6666.666666....
        `,img`
        ........6666......6666.........
        .......6699666666669966........
        ......659999999999999956.......
        ...55565a9556a6666559956555....
        ...58865888655a9556d8856885....
        ..58a8865588666666885a688585...
        ..5858866d6888888886666885d5...
        ..658866556e777d77e65566a856...
        ...66d669a6db66d6be65966666....
        ..6666669d6ebd666be659666666...
        ...666665a6eb6666be655a666a....
        ..656d.6666eb666dbe6666.6656...
        ...666.6559eebbbbee9a56.666....
        ..58856.6666eeeeee6666.65d85...
        ..58756.55a6666666a655.65875...
        ..6666666555d555555556666666...
        .65d78666666a88888a66666878a6..
        .65879666666587786d6666657856..
        .6666666666d66666666666666666..
        68588586956665ad56665968588586.
        688a888d9566658856665a5888d886.
        6656da65956666886666595d556566.
        68588585d666.6996.6669585a8586.
        68588a859666.6666.666958588586.
        ..5885866666......6666685885...
        ...66666a666......66a66........
        .....6666666......66666........
        .....6666666......66666........
        ......66666........66666.......
        .....668d6666....66665a66......
        ....65ad5a6666..666665d856.....
        ...6666666.666..6666.666666....
        `,img`
        ........6666......6666.........
        ...66..6699666666669966........
        ...6.6666666666666699956.......
        ...56565a9.56a6.66559956555....
        ...55555888555a.555558.6885....
        ..58a58..585.6666.885a688585...
        ..5855566d6858855886666885d5...
        ..658566556e55.d77e65556a856...
        ..566d666a6db66d6b555956666....
        ..6666669d6eb6555be659666666...
        ...666665a6eb6565b6655a666a....
        ..656d.6666e6666d5e6666.6656...
        ...666.55596e5bbb5.5a56.666....
        ..58856.6566e5.eee5566.65d85...
        ..58756.5556666666a655.6587....
        ..6666666556555666..56666666...
        .65d786666666866665.6666868a6..
        .6587965666656655656...6.6856..
        .6666666566d6666665666.666666..
        68588586556655ad566659666..586.
        688a888d9555555556665a5666d686.
        6656d..5956666886665595d666666.
        6.588585d566.6996.5569..568566.
        6858.a855..6.6666..66956666666.
        ..588.8656665.....666666668....
        ...6665556665.......a65........
        ......6.66665.......665........
        ......666666......66666........
        ......66666........66666.......
        .....6655.566....66665a66......
        ....65555a6566..666665d856.....
        ...6666666.566555666.666666....
        `,img`
        ........6666......6666.........
        .......6699666666669966........
        ...6d..69999655556999966.......
        ...6dd66999966aa66999966666....
        ...666669aa66a6aa66aa966996....
        ..6666b655566666b66995696656...
        66a66aa66666beaae56666666696...
        .a6666b656666666666665666e66...
        ..966666966a6d66aa6669666a6....
        ..669966966cba66666669669666...
        ...66666666abd6666669666666.6d.
        ..6e65.6666aad666666666.5996...
        ...666.6556acd666666666.666....
        ..6e66e.696acc66666656.65ee6...
        ..666e6.66666666666666.65ee6.d.
        .dedde6.6e6999669996e6.66666..d
        .ded..6.66666666666666..66666.d
        .6d..666665656699565666.69696..
        ..6..6.6559666666669666666666..
        ...66d.6669656aa66696966696966.
        ......6e669666aa666969a6666966.
        ......66ee6666ee666566a6696666.
        ......66ee6696666.666666666966.
        .......6666696..6.66a66..666.6.
        .......66966.6..6.6a6666.666...
        ......6.6966.6..6..a6a6a6.66...
        .......66a666....6.6d.6a6..a...
        .........6.6.6....66..66..a....
        ......dd666.a......6666..d.....
        .....dda6d6dd....666966a.......
        ....6e6ee66696..65666aa6a6.....
        ...6666666.666..666.6666666....
        `],
    500,
    false
    )
    timer.after(1000, function () {
        animation.runImageAnimation(
        BOSS,
        [img`
            ........6666......6666.........
            .......6699666666669966........
            ...6d..69999655556999966.......
            ...6dd66999966aa66999966666....
            ...666669aa66a6aa66aa966996....
            ..6666b655566666b66995696656...
            66a66aa66666beaae56666666696...
            .a6666b656666666666665666e66...
            ..966666966a6d66aa6669666a6....
            ..669966966cba66666669669666...
            ...66666666abd6666669666666.6d.
            ..6e65.6666aad666666666.5996...
            ...666.6556acd666666666.666....
            ..6e66e.696acc66666656.65ee6...
            ..666e6.66666666666666.65ee6.d.
            .dedde6.6e6999669996e6.66666..d
            .ded..6.66666666666666..66666.d
            .6d..666665656699565666.69696..
            ..6..6.6559666666669666666666..
            ...66d.6669656aa66696966696966.
            ......6e669666aa666969a6666966.
            ......66ee6666ee666566a6696666.
            ......66ee6696666.666666666966.
            .......6666696..6.66a66..666.6.
            .......66966.6..6.6a6666.666...
            ......6.6966.6..6..a6a6a6.66...
            .......66a666....6.6d.6a6..a...
            .........6.6.6....66..66..a....
            ......dd666.a......6666..d.....
            .....dda6d6dd....666966a.......
            ....6e6ee66696..65666aa6a6.....
            ...6666666.666..666.6666666....
            `],
        500,
        true
        )
        info.changeScoreBy(10000)
        game.showLongText("You have successfully killed King Scuti, and saved all of space kind.", DialogLayout.Full)
        game.setGameOverEffect(true, effects.starField)
        timer.after(5000, function () {
            game.gameOver(true)
        })
    })
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Number3 = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    Next_Level()
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(status.spriteAttachedTo(), effects.disintegrate, 200)
    info.changeScoreBy(1000)
})
scene.onHitWall(SpriteKind.BOSSPROJECTILE, function (sprite, location) {
    sprites.destroy(sprite)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    info.changeLifeBy(-1)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.setColor(15, 12, 14)
    statusbar.attachToSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.BOSS, assets.tile`myTile0`, function (sprite, location) {
    if (Number_3 == 1) {
        if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
            sprite.vx = 10
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Number3 = 2
})
scene.onOverlapTile(SpriteKind.BOSS, assets.tile`myTile1`, function (sprite, location) {
    if (Number_3 == 1) {
        if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
            sprite.vx = -10
        }
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile0`, function (sprite, location) {
    if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
        sprite.vx = 15
        animation.runImageAnimation(
        sprite,
        [img`
            ................................................89.......
            ..............dddd.............................5879......
            ..............dddd.............................59879.....
            ............ddaaaadd...........................959879....
            ............ddaaaadd..........................9a959879...
            ..........ddddaaaadddd......................55a5..59879..
            ..........ddddaaaadddd.....................5875..9c59875.
            ........ddaaaaaaaaaaaadd...................598755c5.59885
            ........ddaaaaaaaaaaaadd..................9c598755..95995
            dd......ddaaaaaaaaaaaadd......dd.....99..9c5.59875.9c566.
            dd......ddaaaaaaaaaaaadd......dd....97795c5..559875c5....
            dd6666666666666666666666666666dd...9788755..9c559885.....
            dd6666666666666666666666666666dd..97899879.9c5..5995.....
            dd666666661166aaaa666666661166dd.5789559875c5..9c66......
            dd666666661166aaaa666666661166dd588955759875..9c9........
            ddaa66661166aaaaaaaa66661166aadd59955799598755c5.........
            ddaa66661166aaaaaaaa66661166aadd.55585..9588755..........
            ..ddddaaccaaaaaaaaaaaaccaadddd.....5985.5899885..........
            ..ddddaaccaaaaaaaaaaaaccaadddd.....959858955995..........
            ......ddaaccaaaaaaaaccaadd........9aa59895c666...........
            ......ddaaccaaaaaaaaccaadd.......9caaa595c9..............
            ........ddaaccaaaaccaadd.........9bcccc5c5...............
            ........ddaaccaaaaccaadd.....9....5bbbb55................
            ......ddaaaaaabbbbaaaaaadd..579....5555..................
            ......ddaaaaaabbbbaaaaaadd.5879...5895...................
            ......ddaaaaaabbbbaaaaaadd.5985..5895....................
            ......ddaaaaaabbbbaaaaaadd..59855895.....................
            ....ddaaaaaaddddddddaaaaaadd.598895......................
            ....ddaaaaaaddddddddaaaaaadd..5995.......................
            ..dddddddddd........dddddddddd.66........................
            ..dddddddddd........dddddddddd...........................
            `],
        500,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    BOSSFIGHT()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile1`, function (sprite, location) {
    if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
        sprite.vx = -15
        animation.runImageAnimation(
        sprite,
        assets.animation`Enemy Left`,
        500,
        true
        )
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(Bullet, effects.spray, 100)
    Number2 = 0
})
function Next_Level () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        sprites.destroy(value)
    }
    Level += 1
    if (Level == 1) {
        scene.setBackgroundImage(assets.image`Background`)
        tiles.setCurrentTilemap(tilemap`level 1`)
    } else if (Level == 2) {
        tiles.setCurrentTilemap(tilemap`level0`)
    } else if (Level == 3) {
        tiles.setCurrentTilemap(tilemap`level7`)
    } else if (Level == 4) {
        tiles.setCurrentTilemap(tilemap`BOSSBATTLE`)
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`spawn`)
    for (let value of tiles.getTilesByType(assets.tile`Emeny spawn`)) {
        myEnemy = sprites.create(assets.image`Enemy Gun 2`, SpriteKind.Enemy)
        tiles.placeOnTile(myEnemy, value)
        myEnemy.ay = 100
        myEnemy.vx = -25
        myEnemy.setScale(0.5, ScaleAnchor.Middle)
        statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        statusbar2.setColor(15, 12, 14)
        statusbar2.attachToSprite(myEnemy)
    }
}
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    Number2 = 0
})
scene.onHitWall(SpriteKind.EnemyProjectile, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -50
    sprites.destroy(Bullet)
    Number2 = 0
})
function BOSSFIGHT () {
    Number_3 = 1
    BOSS = sprites.create(assets.image`BOSS`, SpriteKind.BOSS)
    tiles.placeOnTile(BOSS, tiles.getTileLocation(68, 28))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(64, 28))
    tiles.setTileAt(tiles.getTileLocation(50, 26), assets.tile`tile1`)
    tiles.setTileAt(tiles.getTileLocation(50, 27), assets.tile`tile1`)
    tiles.setWallAt(tiles.getTileLocation(50, 26), true)
    tiles.setWallAt(tiles.getTileLocation(50, 27), true)
    statusbar3 = statusbars.create(20, 4, StatusBarKind.BOSSHEALTH)
    statusbar3.value = 1000
    statusbar3.attachToSprite(BOSS)
    statusbar3.setColor(15, 12, 14)
    EnemyNumber2 = 5
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -1.5
})
let Enemy_Projectile: Sprite = null
let BOSS_ATTACK: Sprite = null
let EnemyNumber2 = 0
let statusbar2: StatusBarSprite = null
let myEnemy: Sprite = null
let Level = 0
let BOSS: Sprite = null
let Number3 = 0
let Bullet: Sprite = null
let Number2 = 0
let statusbar3: StatusBarSprite = null
let Number_3 = 0
let RayGun: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
game.showLongText("You have been summoned by the head of space to kill the evil king of stars, King Scuti. You need to battle your way through his minions and countless levels to get to him and stop him. Good Luck  ", DialogLayout.Full)
game.showLongText("Arrows to move. Space bar (A) to shoot", DialogLayout.Full)
mySprite = sprites.create(assets.image`MySprite`, SpriteKind.Player)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.setColor(15, 12, 14)
RayGun = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    d d d d d . . . . . . . . . . . 
    d d . . . d d d d d d . . . . . 
    d d d d d . . . . . . . . . . . 
    d d . . . . . . . . . . . . . . 
    d d . . . . . . . . . . . . . . 
    d d . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Image)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 100
scene.cameraFollowSprite(mySprite)
info.setLife(3)
Number_3 = 0
Next_Level()
game.onUpdate(function () {
    if (Number_3 == 1) {
        if (BOSS.isHittingTile(CollisionDirection.Left)) {
            BOSS.vx = 10
        } else if (BOSS.isHittingTile(CollisionDirection.Right)) {
            BOSS.vx = -10
        }
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.BOSS)) {
        if (Math.abs(value.x - mySprite.x) < 100 && Math.abs(value.y - mySprite.y) < 50) {
            timer.throttle("action", 200, function () {
                BOSS_ATTACK = sprites.create(assets.image`Enemy Projectile`, SpriteKind.BOSSPROJECTILE)
                BOSS_ATTACK.setPosition(value.x, value.y + -8)
                BOSS_ATTACK.vx = (mySprite.x - value.x) / 1
                BOSS_ATTACK.vy = -50 + (mySprite.y - value.y)
                BOSS_ATTACK.ay = 100
                animation.runImageAnimation(
                BOSS_ATTACK,
                assets.animation`EnemyProjectile`,
                200,
                true
                )
                BOSS_ATTACK.setScale(0.4, ScaleAnchor.Middle)
            })
        }
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (Math.abs(value.x - mySprite.x) < 100 && Math.abs(value.y - mySprite.y) < 50) {
            timer.throttle("action", 1000, function () {
                Enemy_Projectile = sprites.create(assets.image`Enemy Projectile`, SpriteKind.EnemyProjectile)
                Enemy_Projectile.setPosition(value.x, value.y + -8)
                Enemy_Projectile.vx = (mySprite.x - value.x) / 1
                Enemy_Projectile.vy = -50 + (mySprite.y - value.y)
                Enemy_Projectile.ay = 100
                animation.runImageAnimation(
                Enemy_Projectile,
                assets.animation`EnemyProjectile`,
                200,
                true
                )
                Enemy_Projectile.setScale(0.4, ScaleAnchor.Middle)
            })
            if (value.isHittingTile(CollisionDirection.Left)) {
                value.vx = 15
                animation.runImageAnimation(
                value,
                [img`
                    ................................................89.......
                    ..............dddd.............................5879......
                    ..............dddd.............................59879.....
                    ............ddaaaadd...........................959879....
                    ............ddaaaadd..........................9a959879...
                    ..........ddddaaaadddd......................55a5..59879..
                    ..........ddddaaaadddd.....................5875..9c59875.
                    ........ddaaaaaaaaaaaadd...................598755c5.59885
                    ........ddaaaaaaaaaaaadd..................9c598755..95995
                    dd......ddaaaaaaaaaaaadd......dd.....99..9c5.59875.9c566.
                    dd......ddaaaaaaaaaaaadd......dd....97795c5..559875c5....
                    dd6666666666666666666666666666dd...9788755..9c559885.....
                    dd6666666666666666666666666666dd..97899879.9c5..5995.....
                    dd666666661166aaaa666666661166dd.5789559875c5..9c66......
                    dd666666661166aaaa666666661166dd588955759875..9c9........
                    ddaa66661166aaaaaaaa66661166aadd59955799598755c5.........
                    ddaa66661166aaaaaaaa66661166aadd.55585..9588755..........
                    ..ddddaaccaaaaaaaaaaaaccaadddd.....5985.5899885..........
                    ..ddddaaccaaaaaaaaaaaaccaadddd.....959858955995..........
                    ......ddaaccaaaaaaaaccaadd........9aa59895c666...........
                    ......ddaaccaaaaaaaaccaadd.......9caaa595c9..............
                    ........ddaaccaaaaccaadd.........9bcccc5c5...............
                    ........ddaaccaaaaccaadd.....9....5bbbb55................
                    ......ddaaaaaabbbbaaaaaadd..579....5555..................
                    ......ddaaaaaabbbbaaaaaadd.5879...5895...................
                    ......ddaaaaaabbbbaaaaaadd.5985..5895....................
                    ......ddaaaaaabbbbaaaaaadd..59855895.....................
                    ....ddaaaaaaddddddddaaaaaadd.598895......................
                    ....ddaaaaaaddddddddaaaaaadd..5995.......................
                    ..dddddddddd........dddddddddd.66........................
                    ..dddddddddd........dddddddddd...........................
                    `],
                500,
                true
                )
            } else if (value.isHittingTile(CollisionDirection.Right)) {
                value.vx = -15
                animation.runImageAnimation(
                value,
                assets.animation`Enemy Left`,
                500,
                true
                )
            }
        }
    }
})
game.onUpdateInterval(5000, function () {
    if (Number_3 == 1) {
        tiles.placeOnRandomTile(BOSS, assets.tile`myTile7`)
        BOSS.vx = 5
    }
})
forever(function () {
    if (Number3 == 1) {
        sprites.destroy(RayGun)
        RayGun = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . d d d d d 
            . . . . . d d d d d d . . . d d 
            . . . . . . . . . . . d d d d d 
            . . . . . . . . . . . . . . d d 
            . . . . . . . . . . . . . . d d 
            . . . . . . . . . . . . . . d d 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Image)
        RayGun.setPosition(mySprite.x - 16, mySprite.y)
    } else if (Number3 == 2) {
        sprites.destroy(RayGun)
        RayGun = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            d d d d d . . . . . . . . . . . 
            d d . . . d d d d d d . . . . . 
            d d d d d . . . . . . . . . . . 
            d d . . . . . . . . . . . . . . 
            d d . . . . . . . . . . . . . . 
            d d . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Image)
        RayGun.setPosition(mySprite.x + 16, mySprite.y)
    } else {
        sprites.destroy(RayGun)
        RayGun = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            d d d d d . . . . . . . . . . . 
            d d . . . d d d d d d . . . . . 
            d d d d d . . . . . . . . . . . 
            d d . . . . . . . . . . . . . . 
            d d . . . . . . . . . . . . . . 
            d d . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Image)
        RayGun.setPosition(mySprite.x + 16, mySprite.y)
    }
})
game.onUpdateInterval(10000, function () {
    if (Number_3 == 1) {
        for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
            BOSS_ATTACK = sprites.create(assets.image`Enemy Projectile`, SpriteKind.EnemyProjectile)
            tiles.placeOnTile(BOSS_ATTACK, value)
            animation.runImageAnimation(
            BOSS_ATTACK,
            assets.animation`EnemyProjectile`,
            200,
            true
            )
            BOSS_ATTACK.vy = 50
            BOSS_ATTACK.setScale(0.5, ScaleAnchor.Middle)
        }
    }
})
