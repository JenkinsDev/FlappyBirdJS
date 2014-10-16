define(['libs/createjs', 'bird'], function(createjs, bird) {
    Stage = function() {
        this.stage = new createjs.Stage("flappyBird");

        // Add our FLAPPY BIRD
        this.addChild(bird);
    }

    Stage.prototype.addChild = function(child_object) {
        // There is probably a better way to do this, but right now
        // we will just check to see if the child_object has our
        // amazing getDisplayObject method and if it does then 
        // we will call it, otherwise we will assume that 
        // it is an instance of DisplayObject.
        if (child_object.getDisplayObject !== null)
            this.stage.addChild(child_object.getDisplayObject());
        else
            this.stage.addChild(child_object);
    }

    Stage.prototype.objectsOnStage = function() {
        return this.stage.children;
    }

    Stage.prototype.update = function() {
        this.stage.update();
    }
    
    return new Stage();
});