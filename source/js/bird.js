define(['libs/createjs', 'objects'], function(createjs, game_object) {
    
    /**
     * Bird();
     *
     * Constructor for our Bird class.
     *
     * @return null
     */
    Bird = function() {
        this.character = new createjs.Shape(this.graphics());
    }

    // Our bird is a game object so we will inherit from it.
    Bird.prototype = game_object;
    
    /**
     * Bird::graphics();
     *
     * Creates the sprite needed for our Bird object.
     *
     * @return createjs.Graphics();
     */
    Bird.prototype.graphics = function() {
        // For the time being we will use a shape, later we will change
        // this to the Sprite object.
        return new createjs.Graphics().beginFill("#dd0000").drawRect(0, 20, 10, 10);
    }
    
    /**
     * Bird::update();
     * 
     * This is called for every by our stage everytime the page updates.
     * This should only be called when an object is rendered on the page.
     * 
     * @return void 
     */
    Bird.prototype.update = function() {
        if (this.character.x >= window.outerWidth)
            console.log('true');
        else
            this.character.x += 5;
    }

    return new Bird();

});