
requirejs.config({
  baseUrl: "",
  paths: {
    backbone: "js/vendor/backbone",
    jquery: "js/vendor/jquery",
    "jquery-ui": "js/vendor/jquery-ui",
    json2: "js/vendor/json2",
    localstorage: "js/vendor/backbone.localstorage",
    marionette: "js/vendor/backbone.marionette",
    text: "js/vendor/text",
    underscore: "js/vendor/underscore",
    handlebars: "js//vendor/handlebars"
  },

  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore", "json2"],
      exports: "Backbone"
    },
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
    "jquery-ui": ["jquery"],
    localstorage: ["backbone"],
    
    "handlebars": {
        exports: 'Handlebars'
    }
  }
});

