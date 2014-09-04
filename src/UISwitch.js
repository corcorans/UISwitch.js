var UISwitch = function(element, options) {
    options = options || {};

    if (typeof element.type === 'undefined' || element.type !== 'checkbox') {
        throw new Error("'element' must be a checkbox");
    }

    if (typeof options.enabled === 'undefined') {
        options.enabled = true;
    }

    if (typeof options.activatedColor === 'undefined') {
        options.activatedColor = '#4bd963';
    }

    if (typeof options.deactivatedColor === 'undefined') {
        options.deactivatedColor = '#ffffff';
    }

    if (typeof options.transitionTime === 'undefined') {
        options.transitionTime = 2500;
    }

    if (typeof options.disabledOpacity === 'undefined') {
        options.disabledOpacity = 0.5;
    }

    this._enabled = options.enabled;
    this._activatedColor = options.activatedColor;
    this._deactivatedColor = options.deactivatedColor;
    this._transitionTime = options.transitionTime;
    this._disabledOpacity = options.disabledOpacity;
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
