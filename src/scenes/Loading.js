class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, game.config.height/2, game.config.width * value, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        this.load.path = './assets/';
        // load graphics assets
      
        this.load.image('backdrop', 'background_stars.png');
        this.load.image('playbackground', 'background_play.png');
        this.load.image('sky', 'sky.png');
        this.load.image('title', 'Title.png');
        //tutorial
        this.load.image('Cassiopeia', 'Cassiopeia.png');
        //level 1
        this.load.image('Corvus', 'Corvus.png');
        this.load.image('Libra', 'Libra.png');
        this.load.image('Ursa_Minor', 'Ursa_Minor.png');
        this.load.image('Cancer','Cancer.png');
        //level 2
        this.load.image('Lyra', 'Lyra.png');
        this.load.image('Norma', 'Norma.png');
        this.load.image('Perseus', 'Perseus.png');
        this.load.image('Triangulum', 'Triangulum.png');
        //level 3
        this.load.image('Auriga', 'Auriga.png');
        this.load.image('Hercules', 'Hercules.png');
        this.load.image('Aries', 'Aries.png');
        this.load.image('Pisces', 'Pisces.png');
        
        
        
        // load audio assets
        //this.load.audio('background_music', 'sound/ocean.wav');
     
        
    }

    create() {
        // check for local storage browser support
        if(window.localStorage) {
            console.log('Local storage supported');
        } else {
            console.log('Local storage not supported');
        }

        // go to Title scene
        this.scene.start('menuScene');
    }
}