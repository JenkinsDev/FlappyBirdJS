define(['physics'], function(physics) {
    
    /**
     * GameObject();
     *
     * Constructor for our GameObject `class`.
     *
     * @return GameObject();
     */
    GameObject = function(physics) {
        this._character = null;
        this._physics = physics;
    }

    /**
     * GameObject::getPhysics();
     *
     * Returns our instance of the physics class.
     *
     * @return Physics();
     */
    GameObject.prototype.getPhysics = function() {
        return this._physics;
    }

    /**
     * GameObject::setDisplayObject();
     *
     * Sets and returns the underlying character, this will always
     * be some sort of instance of DisplayObject();
     *
     * @return void
     */
    GameObject.prototype.setDisplayObject = function(character) {
        this._character = character;
    }

    /**
     * GameObject::getObject();
     *
     * Returns the underlying character, this will always
     * be some sort of instance of DisplayObject();
     *
     * @return createjs.DisplayObject();
     */
    GameObject.prototype.getDisplayObject = function() {
        return this._character;
    }

    /**
     * GameObject::getStage();
     *
     * Returns the stage that the game object is currently
     * displayed on.
     *
     * @return createjs.Stage();
     */
    GameObject.prototype.getStage = function() {
        return this._character.getStage();
    }
    
    /**
     * GameObject::update();
     * 
     * This is called for every by our stage everytime the page updates.
     * This should only be called when an object is rendered on the page.
     * 
     * @return void 
     */
    GameObject.prototype.update = function() {
        throw Error("GameObject MUST have their own update methods.");
    }

    return new GameObject(physics);

});