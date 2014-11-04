define(['libs/createjs'], function(createjs) {
    
    /**
     * Stage();
     * 
     * Constructor for our Stage class.
     * 
     * @return Stage
     */
    Stage = function() {
        this._stage = null;
        this._canvas = null;
        this._children = [];
    }
    
    /**
     * Stage::setStageFromCanvas();
     * 
     * Sets our createjs Stage based on the canvas object
     * that we create during application initiation.
     * 
     * @param canvas (Canvas Object) - Used to set/create our stage for 
     *                                 createjs.
     * 
     * @return Stage
     */
    Stage.prototype.setStageFromCanvas = function(canvas) {
        this._stage = new createjs.Stage(canvas.getCanvasID());
        this._canvas = canvas;
        
        return this;
    }
    
    /**
     * Stage::_checkStageIsAdded();
     * 
     * Checks to make sure the user has already added our
     * stage, we do this by
     * 
     * @return void
     */
    Stage.prototype._checkStageIsAdded = function(error_message) {
        if (error_message === null) {
            error_message = "You must set a stage before starting our game."
        }
        
        if (this._canvas === null || this._stage === null) {
            throw Error(error_message);
        }
    }

    /**
     * Stage::addObjectToStage();
     * 
     * This method is used to add a child object to our Stage. The
     * child object MUST be a child class of GameObject.
     * 
     * @return void
     */
    Stage.prototype.addObjectToStage = function(child_object) {
        if (child_object.getDisplayObject === null) {
            throw Error("Stage child must be of GameObject origin.");
        }

        this._stage.addChild(child_object.getDisplayObject());
        this._children.push(child_object);
    }

    /**
     * Stage::getObjectsOnStage();
     * 
     * Returns all of the children objects that are currently rendered
     * on the Stage in an array format.
     * 
     * @return Array
     */
    Stage.prototype.getObjectsOnStage = function() {
        return this._children;
    }

    /**
     * Stage::update();
     * 
     * This is/should be called on every frame by our core game loop, this
     * will help abstract the update calls to each of our children objects.
     * 
     * @return void
     */
    Stage.prototype.update = function() {
        // We need to make sure the user has already added the stage
        // by this point.
        this._checkStageIsAdded();

        for (var i=0; i<this._children.length; i++) {
            this._children[i].update();
        }
        
        // We want to, in theory, update the stage AFTER we `update` all of our
        // children objects.
        this._stage.update();
    }
    
    return new Stage();

});