define(['require', 'stage', 'libs/createjs'], function(require, stage, createjs) {
    Game = function() {
        // Set up some of our default values!
        this.play_game = true;
        this.fps = 30;

        // Set EaselJS to run the loop method every
        // "tick."
        console.log(createjs);
        createjs.Ticker.setFPS(this.fps);
        createjs.Ticker.addEventListener("tick", this.loop);
    }

    Game.prototype.loop = function() {
        console.log('test');
    }

    // No reason to return Game, but it'll be useful possibly in the future.
    return new Game();
});