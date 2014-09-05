var UISwitch = function(element, options) {
    options = options || {};

    if (typeof element.type === 'undefined' || element.type !== 'checkbox') {
        throw new Error("'element' must be a checkbox");
    }

    for (var option in UISwitch.defaultOptions) {
        if (!(option in options)) {
            options[option] = UISwitch.defaultOptions[option];
        }
    }

    this.element = element;
    this._enabled = options.enabled;
    this._activatedColor = options.activatedColor;
    this._deactivatedColor = options.deactivatedColor;
    this._transitionTime = options.transitionTime;
    this._disabledOpacity = options.disabledOpacity;
    this._activated = element.checked;
    
    this.hide();
    this.create();
};

UISwitch.prototype.create = function() {
    var uiswitch = document.createElement('span');
    uiswitch.className = 'uiswitch';
    var slider = document.createElement('span');
    uiswitch.appendChild(slider);
    this.element.parentNode.insertBefore(uiswitch, this.element.nextSibling);
};

UISwitch.prototype.hide = function() {
    this.element.style.display = 'none';
};

UISwitch.defaultOptions = {
    enabled: true,
    activatedColor: '#4bd963',
    deactivatedColor: '#ffffff',
    transitionTime: 2500,
    disabledOpacity: 0.5
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

Object.defineProperty(UISwitch.prototype, 'activated', {
    get: function() {
        return this._activated;
    },
    set: function() {
        this._activated = activated;
    }
});
