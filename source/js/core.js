define(['require', 'stage', 'bird', 'libs/canvas', 'libs/createjs'], function(require, stage, bird, canvas, createjs) {
    
    /**
     * Game();
     * 
     * Constructor for our Game class.
     * 
     * @return Game; 
     */
    Game = function(stage, bird) {
        this._canvas = canvas.setCanvasByID("flappyBird");

        // Set up some of our default values!
        this.fps = 30;
        this.stage = stage.setStageFromCanvas(this._canvas);
        this.bird = bird;

        // Later we will only call this when the user starts the game from the menu
        this.startGame();

        createjs.Ticker.setFPS(this.fps);

        // We make use of the bind Function method to pass in this instance
        // to the loop method.
        createjs.Ticker.addEventListener("tick", this.loop.bind(this));
    }
    
    /**
     * Game::startGame();
     * 
     * Called when the user started a new game/match.
     * 
     * @return void
     */
    Game.prototype.startGame = function() {
        this.stage.addObjectToStage(this.bird);
    }

    /**
     * Game::loop();
     * 
     * Called every frame so we can handle all computations during
     * gameplay.
     * 
     * @return void
     */
    Game.prototype.loop = function() {
        this.stage.update();
    }

    return new Game(stage, bird);

});