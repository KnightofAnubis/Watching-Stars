//Kelsey Melott <kmelott.ucsc.edu>
//Stars
//Time it took in hrs: 




'use strict';
//game config
let config = {
    type: Phaser.AUTO,
    width: 920,
    height: 680,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },

    scene: [Load, Menu,  Selection,  Play, GameOver, Winner]
   
}
//menu config
let menuConfig = {
    fontFamily: "Georgia",
    fontSize: '28px',
    //backgroundColor: '#008080',
    color: '#ffffff',
    align: 'right',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 0
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keyLEFT, keyRIGHT, keyUP, keyDOWN, keyR, keyM, keySPACE, keyW, keyA, keyS, keyD;
let level;
let startTime;
let gameTimer;
let constellations;