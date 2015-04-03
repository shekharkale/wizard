define(["jquery", "backbone", "marionette","templates/wizardRightNav"], function($, Backbone, Marionette, wizardRightNavTemplate) {

    console.log("loading wizardRightNavView");

    var WizardRightNavView = Marionette.ItemView.extend({
        template: wizardRightNavTemplate,

        initialize: function(options) {
            this.options = options;

        },

        onRender: function() {
            console.log("rendered right nav");
        }

    });

    return WizardRightNavView;
    
});
