define(['physics'], function(physics) {
    /**
     * GameObject();
     *
     * Constructor for our GameObject `class`.
     *
     * @return GameObject();
     */
    GameObject = function(physics) {
        this.character = null;
        this.physics = physics;
    }

    /**
     * GameObject::getPhysics();
     *
     * Returns our instance of the physics class.
     *
     * @return Physics();
     */
    GameObject.prototype.getPhysics = function() {
        return this.physics;
    }

    /**
     * GameObject::setDisplayObject();
     *
     * Sets and returns the underlying character, this will always
     * be some sort of instance of DisplayObject();
     *
     * @return createjs.setObject();
     */
    GameObject.prototype.setDisplayObject = function(character) {
        return this.character = character;
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
        return this.character;
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
        return this.character.getStage();
    }

    return new GameObject(physics);
});