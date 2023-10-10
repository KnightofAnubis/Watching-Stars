class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    }


    create() {
        //creating stoof
        //menu...
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

        this.add.tileSprite(0, 0,920, 680, 'title').setOrigin(0,0);
        //soome text instructions
        /*this.add.text(game.config.width/2, game.config.height/5 - borderUISize - borderPadding, "Find the Constellation", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/3 - borderUISize - borderPadding, "", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2.5 - borderUISize - borderPadding, "Press Space to Begin", menuConfig).setOrigin(0.5);*/
        //define some keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update() {
        //gettin' ready to play!
       
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('selectionScene');
        }


    }
}