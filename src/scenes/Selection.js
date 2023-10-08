//might be out of scope...

class Selection extends Phaser.Scene {
    constructor() {
        super('selectionScene');
    }
   

    create() {
        //selection
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
        //instructions
        this.add.text(game.config.width/2, game.config.height/5 - borderUISize - borderPadding, "The following constellations are the ones you will try to locate:", menuConfig).setOrigin(0.5);
       
        //Cassiopeia
        this.cassiopeia = this.add.image(game.config.width/5, game.config.height/4, 'Cassiopeia').setOrigin(0.5, 0);
        this.cassiopeia.setDisplaySize(100,50);
        this.add.text(game.config.width/5, game.config.height/4.8, "Cassiopeia", menuConfig).setOrigin(0.5);

        //Corvus
        this.corvus = this.add.image(game.config.width/1.5, game.config.height/4, 'Corvus').setOrigin(0.5, 0);
        this.corvus.setDisplaySize(100,50);
        this.add.text(game.config.width/1.5, game.config.height/4.8, "Corvus", menuConfig).setOrigin(0.5);

        //Libra
        this.libra = this.add.image(game.config.width/1.5, game.config.height/2, 'Libra').setOrigin(0.5, 0);
        this.libra.setDisplaySize(100,100);
        this.add.text(game.config.width/1.5, game.config.height/2.2, "Libra", menuConfig).setOrigin(0.5);

        //Ursa Minor
        this.ursa_minor = this.add.image(game.config.width/5, game.config.height/2, 'Ursa_Minor').setOrigin(0.5, 0);
        this.ursa_minor.setDisplaySize(100,100);
        this.add.text(game.config.width/5, game.config.height/2.2, "Ursa Minor", menuConfig).setOrigin(0.5);
        
        this.add.text(game.config.width/2, game.config.height/1.3, "Use WASD to move and mouse to click on Constellations", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height - borderUISize - borderPadding, "Press SPACE to continue...", menuConfig).setOrigin(0.5);
        
        //defining keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update() {
        //gettin' ready to play!
       
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('playScene');
        }


    }
}