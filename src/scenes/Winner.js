class Winner extends Phaser.Scene {
    constructor() {
        super('winnerScene');
    }

    create() {
       
        // in game credits
        menuConfig.color = '#ffffff';
        this.add.tileSprite(0, 0,920, 680, 'backdrop').setOrigin(0,0);
        this.add.text(game.config.width/2, game.config.height/5 - borderUISize - borderPadding, "Congratulations!!!", menuConfig).setOrigin(0.5);
        
        this.add.text(game.config.width/2, game.config.height/2.2 - borderUISize - borderPadding, "Moving on to level: " + level, menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/1.5 - borderUISize - borderPadding, "Press (N) to continue to the next level.", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/1.4 - borderUISize - borderPadding, "Press (M) for Menu Screen.", menuConfig).setOrigin(0.5);
         //define some keys
         keyN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
         keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
 
     }
 
     update() {
         //gettin' ready to play!
         if(Phaser.Input.Keyboard.JustDown(keyN)) {
            this.scene.start('selectionScene');
            
         }
         if (Phaser.Input.Keyboard.JustDown(keyM)) {
             this.scene.start('menuScene');
         }
 
     }
}
