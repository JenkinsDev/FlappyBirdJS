define(['require', 'stage', 'libs/createjs'], function(require, stage, createjs) {
    Game = function(stage) {
        // Set up some of our default values!
        this.play_game = true;
        this.fps = 30;
        this.stage = stage;

        createjs.Ticker.setFPS(this.fps);

        // We make use of the bind Function method to pass in this instance
        // to the loop method.
        createjs.Ticker.addEventListener("tick", this.loop.bind(this));
    }

    Game.prototype.loop = function() {
        this.stage.update();
    }

    // No reason to return Game, but it'll be useful possibly in the future.
    return new Game(stage);
});