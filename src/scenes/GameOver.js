class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOverScene');
    }

    create() {
       
        // in game credits
        menuConfig.color = '#ffffff';
        menuConfig.fontSize = 40;
        this.add.tileSprite(0, 0,920, 680, 'backdrop').setOrigin(0,0);
        this.add.text(game.config.width/2, game.config.height/5 - borderUISize - borderPadding, "Game Over", menuConfig).setOrigin(0.5);
        
        this.add.text(game.config.width/3, game.config.height/3 - borderUISize - borderPadding, "Made in Phaser 3", menuConfig);
        
        this.add.text(game.config.width/3, game.config.height/2.2 - borderUISize - borderPadding, "Art made in Procreate", menuConfig);
        
        menuConfig.fontSize = 28;
        this.add.text(game.config.width/3, game.config.height/1.5 - borderUISize - borderPadding, "Press (R) to restart.", menuConfig);
        this.add.text(game.config.width/3, game.config.height/1.4 - borderUISize - borderPadding, "Press (M) for Menu Screen.", menuConfig);
         //define some keys
         keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
         keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
 
     }
 
     update() {
         //gettin' ready to play!
         if(Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('playScene');
            
         }
         if (Phaser.Input.Keyboard.JustDown(keyM)) {
             this.scene.start('menuScene');
         }
 
     }
}
