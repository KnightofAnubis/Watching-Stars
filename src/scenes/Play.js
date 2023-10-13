class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
        
    }

   

    create() {
        
        //  Enable lights and set a dark ambient color
        this.lights.enable().setAmbientColor(0x000000);

        //  Add an image and set it to use Lights2D
        this.backdrop = this.add.tileSprite(0, 0,920, 680, 'playbackground').setOrigin(0,0);
        this.backdrop.setPipeline('Light2D');

        //  Our spotlight. 100px radius and white in color.
        this.light = this.lights.addLight(game.config.width/4, game.config.height/2, 150).setColor(0xffffff).setIntensity(5);



        
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
        star1 = false;
        star2 = false;
        star3 = false;
        star4 = false;
        
        if(level == 1){
            //Cassiopeia
            this.cassiopeia = this.add.sprite(game.config.width/5, game.config.height/4, 'Cassiopeia').setOrigin(0.5, 0).setPipeline('Light2D').setInteractive();
            //this.cassiopeia.setDisplaySize(100,50);

            this.cassiopeia.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    star1 = true;
                    constellations +=1;

                });
            //Corvus
            this.corvus = this.add.sprite(game.config.width/1.3, game.config.height/4.2, 'Corvus').setOrigin(0.5, 0).setPipeline('Light2D').setInteractive();
            //this.corvus.setDisplaySize(100,50);
            this.corvus.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    star2 = true;
                    constellations +=1;

                });
            
    
            //Libra
            this.libra = this.add.sprite(game.config.width/1.5, game.config.height/2, 'Libra').setOrigin(0.5, 0).setPipeline('Light2D').setInteractive();
            //this.libra.setDisplaySize(100,100);
            this.libra.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    star3 = true;
                    constellations +=1;

                });
            
    
            //Ursa Minor
            this.ursa_minor = this.add.sprite(game.config.width/5, game.config.height/2, 'Ursa_Minor').setOrigin(0.5, 0).setPipeline('Light2D').setInteractive();
            //this.ursa_minor.setDisplaySize(80,80);
            this.ursa_minor.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    star4 = true;
                    constellations +=1;

                });
            
        }
         
         
        
        
        
        this.time = this.add.text(game.config.width/2.3, borderUISize + borderPadding*2, '', menuConfig);
        startTime = Math.floor(this.sys.game.loop.time/1000);
        gameTimer = 30;
        
        this.gameOver = false;
        
    }

    update(time, delta) {
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

            if(constellations == 4 && star1 == true && star2 == true && star3 == true&& star4 == true){
                this.scene.start('winnerScene');
                level += 1;
            }
           
            
        }
    }

    
}