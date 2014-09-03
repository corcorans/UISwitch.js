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

Object.defineProperty(UISwitch.prototype, 'transitionTime', {
    get: function() {
        return this._transitionTime;
    },
    set: function(transitionTime) {
        this._transitionTime = transitionTime;
    }
});

Object.defineProperty(UISwitch.prototype, 'className', {
    get: function() {
        return this._className;
    },
    set: function(className) {
        this._className = className;
    }
});

Object.defineProperty(UISwitch.prototype, 'disabledOpacity', {
    get: function() {
        return this._disabledOpacity;
    },
    set: function(disabledOpacity) {
        this._disabledOpacity = disabledOpacity;
    }
});

