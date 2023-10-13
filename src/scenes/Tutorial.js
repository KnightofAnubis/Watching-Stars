class Tutorial extends Phaser.Scene {
    constructor() {
        super('tutorialScene');
        
    }

   

    create() {
        
        //  Enable lights and set a dark ambient color
        this.lights.enable().setAmbientColor(0x000000);

        //  Add an image and set it to use Lights2D
        this.backdrop = this.add.tileSprite(0, 0,920, 680, 'playbackground').setOrigin(0,0);
        this.backdrop.setPipeline('Light2D');

        //  Our spotlight. 100px radius and white in color.
        this.light = this.lights.addLight(game.config.width/4, game.config.height/2, 150).setColor(0xffffff).setIntensity(5);


        this.add.text(game.config.width/2, game.config.height/7.5, "Use WASD keys to move light around", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/5.5, "use the MOUSE to click on the stars of the Constellations", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height - borderUISize - borderPadding, "Found Constellations will turn red", menuConfig).setOrigin(0.5);
        //some keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        //star counter
        constellations = 0;
        
        if(level == 0){
            //Cassiopeia
            this.cassiopeia = this.add.sprite(game.config.width/2, game.config.height/2, 'Cassiopeia').setOrigin(0.5, 0).setPipeline('Light2D').setInteractive();
            //this.cassiopeia.setDisplaySize(100,50);

            this.cassiopeia.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    constellations +=1;

                });
         
        }
            
    }

    update(time, delta) {
        //here we go...
        //check key input for restart

       


        

            if(keyUP.isDown || keyW.isDown){
                this.light.y -= delta; 
                
            }
            if(keyDOWN.isDown || keyS.isDown){
                this.light.y += delta; 
            }
            if(keyLEFT.isDown || keyA.isDown){
                this.light.x -=  delta; 
                
            }
            if(keyRIGHT.isDown || keyD.isDown){
                this.light.x +=  delta; 
            }
            
            console.log(constellations);

            if(constellations == 1){
                this.time.delayedCall(1000, () => { 
                    this.scene.start('winnerScene');
                level += 1;
                });
            }
           
            
        
    }

    
}