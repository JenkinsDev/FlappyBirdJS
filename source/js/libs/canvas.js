define(function() {
    
    /**
     * Canvas();
     * 
     * Constructor for our Canvas class.
     * 
     * @return Canvas
     */
    Canvas = function() {
        this._id = null;
        
        // We want to make sure we keep the canvas's aspect ratio
        // correct during a browser resize.
        window.addEventListener('resize', this.onResize.bind(this), false);
    }
    
    /**
     * Canvas::onResize();
     * 
     * Called whenever the user resizes their browser window.
     * 
     * @return void
     */
    Canvas.prototype.onResize = function() {
        // This method "stupid" if you will and it will guess that
        // the canvas SHOULD be 100% of the width and height of the
        // browser's view.
        var canvasRatio = this._canvas.height / this._canvas.width,
            windowRatio = window.innerHeight / window.innerWidth,
            width = 0,
            height = 0;
    
        if (windowRatio < canvasRatio) {
            height = window.innerHeight;
            width = height / canvasRatio;
        } else {
            width = window.innerWidth;
            height = width * canvasRatio;
        }
    
        this._canvas.style.width = width + 'px';
        this._canvas.style.height = height + 'px';
    }
    
    /**
     * Canvas::getCanvasFromId();
     * 
     * Sets our canvas property equal to the canvas that we get from
     * the supplied id.
     * 
     * @return void
     */
    Canvas.prototype.setCanvasByID = function(id) {
        var canvas = document.getElementById(id);
        
        if (! this._isCanvasReal(canvas)) {
            throw Error("There is no canvas with the id of: " + id);
        }
        
        this._canvas = canvas;
        this._id = id;

        return this;
    }
    
    /**
     * Canvas::_isCanvasReal();
     * 
     * Checks whether the id supplied for the canvas is real and if so
     * we then check to see if the element is a canvas.
     * 
     * @property id (String) - String represenation of our canvas's ID.
     * 
     * @return Boolean
     */
    Canvas.prototype._isCanvasReal = function(element_object) {
        return element_object === null || element_object.tag !== "canvas";
    }
    
    /**
     * Canvas::getCanvasID();
     * 
     * Returns our _id property's value unless it is set to null then throws an error.
     * 
     * @return String
     */
    Canvas.prototype.getCanvasID = function() {
        if (this._id === null) {
            throw Error("You must supply a canvas ID before you can return it!");
        }

        return this._id;
    }
    
    return new Canvas();
    
});