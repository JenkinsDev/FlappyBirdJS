define(['libs/createjs'], function(createjs) {
    Bird = function() {
        this.character = new createjs.Shape(this._drawBird());
    }
    
    Bird.prototype._drawBird = function() {
        // For the time being we will use a shape, later we will change
        // this to the Sprite object.
        return new createjs.Graphics().beginFill("#dd0000").drawRect(0, 20, 10, 10);
    }

    Bird.prototype.getDisplayObject = function() {
        return this.character;
    }

    Bird.prototype.getStage = function() {
        return this.character.getStage();
    }

    return new Bird();
});