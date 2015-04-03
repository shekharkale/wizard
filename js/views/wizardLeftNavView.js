define(["jquery", "backbone", "marionette","templates/wizardLeftNav"], function($, Backbone, Marionette, wizardLeftNavTemplate) {

    console.log("loading wizardLeftNavView");

    var WizardLeftNavView = Marionette.ItemView.extend({
        template: wizardLeftNavTemplate,
        tagName:"div",
        className: "step",

        initialize: function(options) {
            this.options = options;

        },

        onRender: function() {
            console.log("rendered left nav");
            this.$el.html(this.template({text:"Wizard Step 1"}));
        }

    });

    return WizardLeftNavView;
    
});
