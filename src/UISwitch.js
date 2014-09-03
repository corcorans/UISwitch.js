var UISwitch = function(element, options) {
   
};

Object.defineProperty(UISwitch.prototype, 'enabled', {
    get: function() {
        return this._enabled;
    },
    set: function(enabled) {
        this._enabled = enabled;
    }
});

Object.defineProperty(UISwitch.prototype, 'activatedColor', {
    get: function() {
        return this._activatedColor;
    },
    set: function(activatedColor) {
        this._activatedColor = activatedColor;
    }
});

Object.defineProperty(UISwitch.prototype, 'deactivatedColor', {
    get: function() {
        return this._deactivatedColor;
    },
    set: function(deactivatedColor) {
        this._deactivatedColor = deactivatedColor;
    }
});