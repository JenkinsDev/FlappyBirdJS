define(['libs/createjs'], function(createjs) {
    Bird = function() {
        this.character = createjs.Shape(this._drawBird());
    }
    
    Bird.prototype._drawBird = function() {
        // For the time being we will use a shape, later we will change
        // this to the Sprite object.
        return createjs.Graphics.beginFill("#dddd00").drawRect(0, 0, 100, 100);
    }

    Bird.prototype.getCharacter = function() {
        return this.character;
    }

    Bird.prototype.getStage = function() {
        return this.character.getStage();
    }

    return new Bird();
});