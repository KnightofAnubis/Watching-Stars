class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
        
    }

   

    create() {
        
        //  Enable lights and set a dark ambient color
        this.lights.enable().setAmbientColor(0x000000);

        //  Add an image and set it to use Lights2D
        this.backdrop = this.add.tileSprite(0, 0,920, 680, 'backdrop').setOrigin(0,0);
        this.backdrop.setPipeline('Light2D');

        //  Our spotlight. 100px radius and white in color.
        this.light = this.lights.addLight(game.config.width/4, game.config.height/2, 100).setColor(0xffffff).setIntensity(5);

        //player controls
        this.moveSpeed = 2;

        
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
        

         //Cassiopeia
         this.cassiopeia = this.add.sprite(game.config.width/5, game.config.height/4, 'Cassiopeia').setOrigin(0.5, 0).setPipeline('Light2D').setInteractive();
         this.cassiopeia.setDisplaySize(100,50);

         this.cassiopeia.on('pointerdown', function (pointer)
            {

                this.setTint(0xff0000);
                constellations +=1;

            });
         
 
         //Corvus
         this.corvus = this.add.sprite(game.config.width/1.5, game.config.height/4, 'Corvus').setOrigin(0.5, 0).setPipeline('Light2D').setInteractive();
         this.corvus.setDisplaySize(100,50);
         this.corvus.on('pointerdown', function (pointer)
            {

                this.setTint(0xff0000);
                constellations +=1;

            });
         
 
         //Libra
         this.libra = this.add.sprite(game.config.width/1.5, game.config.height/2, 'Libra').setOrigin(0.5, 0).setPipeline('Light2D').setInteractive();
         this.libra.setDisplaySize(100,100);
         this.libra.on('pointerdown', function (pointer)
            {

                this.setTint(0xff0000);
                constellations +=1;

            });
         
 
         //Ursa Minor
         this.ursa_minor = this.add.sprite(game.config.width/5, game.config.height/2, 'Ursa_Minor').setOrigin(0.5, 0).setPipeline('Light2D').setInteractive();
         this.ursa_minor.setDisplaySize(80,80);
         this.ursa_minor.on('pointerdown', function (pointer)
            {

                this.setTint(0xff0000);
                constellations +=1;

            });
         
        
        
        
        //Background music
        /*this.sound.audioPlayDelay = 0.1;
        this.sound.loopEndOffset = 0.05;
        
        const loopMarker = {
            name: 'loop',
            start: 0,
            duration: 16,
            config: {
                volume: 0.1,
                loop: true
            }
        };

        this.music =  this.sound.add('background_music');
        
        
        if (!this.sound.locked)
        {
            // already unlocked so play
            this.music.addMarker(loopMarker);
            this.music.play('loop', {
                delay: 0
            });
        }
        else
        {
            // wait for 'unlocked' to fire and then play
            this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
                this.music.addMarker(loopMarker);
                this.music.play('loop', {
                    delay: 0
                });
            });
        }*/
        
        this.time = this.add.text(game.config.width/2.3, borderUISize + borderPadding*2, '', menuConfig);
        startTime = Math.floor(this.sys.game.loop.time/1000);
        gameTimer = 50;
        
        this.gameOver = false;
        
    }

    update() {
        //here we go...
        //check key input for restart
        if(this.gameOver){
            
            this.scene.start('gameOverScene');
       
        }


       


        if (!this.gameOver){

            this.currentTime = (Math.floor(this.sys.game.loop.time/1000) - startTime).toString();
            this.time.setText(`Time: ${gameTimer - this.currentTime }`);
            if(this.currentTime >= gameTimer) {
                this.gameOver = true;
            }

            if(keyUP.isDown || keyW.isDown){
                this.light.y -= 2; 
                
            }
            if(keyDOWN.isDown || keyS.isDown){
                this.light.y += 2; 
            }
            if(keyLEFT.isDown || keyA.isDown){
                this.light.x -= 2; 
                
            }
            if(keyRIGHT.isDown || keyD.isDown){
                this.light.x += 2; 
            }
            
            console.log(constellations);

            if(constellations == 4){
                this.scene.start('winnerScene');
            }
           
            
        }
    }

    
}