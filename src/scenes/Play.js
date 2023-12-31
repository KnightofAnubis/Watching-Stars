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
            gameTimer = 25;
            //Cancer
            this.cancer = this.add.sprite(game.config.width/5, game.config.height/5, 'Cancer').setOrigin(0.5, 0).setPipeline('Light2D').setInteractive();
            this.cancer.setDisplaySize(100,100);
            this.cancer.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    star1 = true;
                    

                });
            //Corvus
            this.corvus = this.add.sprite(game.config.width/1.3, game.config.height/4.2, 'Corvus').setOrigin(0.5, 0).setPipeline('Light2D').setInteractive();
            this.corvus.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    star2 = true;
                    

                });
            
    
            //Libra
            this.libra = this.add.sprite(game.config.width/1.5, game.config.height/2, 'Libra').setOrigin(0.5, 0).setPipeline('Light2D').setInteractive();
            this.libra.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    star3 = true;
                    

                });
            
    
            //Ursa Minor
            this.ursa_minor = this.add.sprite(game.config.width/5, game.config.height/2, 'Ursa_Minor').setOrigin(0.5, 0).setPipeline('Light2D').setInteractive();
            this.ursa_minor.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    star4 = true;
                   
                });
            
        }
        //level 2
        if(level == 2 ){
            gameTimer = 20;
            //Lyra
            this.lyra = this.add.sprite(game.config.width/4, game.config.height/4.5, 'Lyra').setPipeline('Light2D').setInteractive();
            this.lyra.setDisplaySize(100,100);
            this.lyra.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    star1 = true;
                    

                });

            //Norma
            this.norma = this.add.sprite(game.config.width/1.5, game.config.height/1.5, 'Norma').setPipeline('Light2D').setInteractive();
            this.norma.setDisplaySize(150,100);
            this.norma.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    star2 = true;
                    

                });

            //Perseus
            this.perseus = this.add.sprite(game.config.width/1.3, game.config.height/5, 'Perseus').setPipeline('Light2D').setInteractive();
            this.perseus.setDisplaySize(200,150);
            this.perseus.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    star3 = true;
                    

                });

            //Triangulum
            this.triangulum = this.add.sprite(game.config.width/5, game.config.height/1.5, 'Triangulum').setPipeline('Light2D').setInteractive();
            this.triangulum.setDisplaySize(150,150);
            this.triangulum.on('pointerdown', function (pointer)
            {

                this.setTint(0xff0000);
                star4 = true;
                

            });
    
        }
        //level 3
        if(level == 3){
            gameTimer = 15;
            //Auriga
            this.auriga = this.add.sprite(game.config.width/1.3, game.config.height/1.2, 'Auriga').setPipeline('Light2D').setInteractive();

            this.auriga.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    star1 = true;
                    

                });
            //Hercules
            this.hercules = this.add.sprite(game.config.width/2, game.config.height/2.2, 'Hercules').setPipeline('Light2D').setInteractive();
            this.hercules.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    star2 = true;
                    

                });
            
    
            //Pisces
            this.pisces = this.add.sprite(game.config.width/1.2, game.config.height/6, 'Pisces').setPipeline('Light2D').setInteractive();
            this.pisces.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    star3 = true;
                    

                });
            
    
            //Aries
            this.aries = this.add.sprite(game.config.width/6, game.config.height/2, 'Aries').setPipeline('Light2D').setInteractive();
            this.aries.on('pointerdown', function (pointer)
                {

                    this.setTint(0xff0000);
                    star4 = true;
                   
                });
            
        }
        
        
        
        this.time = this.add.text(game.config.width/2.3, borderUISize + borderPadding*2, '', menuConfig);
        startTime = Math.floor(this.sys.game.loop.time/1000);
        
        
        
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

            if(star1 == true && star2 == true && star3 == true&& star4 == true){
                this.scene.start('winnerScene');
                level += 1;
            }
           
            
        }
    }

    
}