define(["jquery", "backbone", "marionette","templates/steps/stepSelect","templates/steps/partials/stepTitle"], 
    function($, Backbone, Marionette, stepSelectTemplate, StepTitleTemplate) {

    console.log("loading stepSelectView");

    var StepSelectView = Marionette.ItemView.extend({
        template: stepSelectTemplate,
        tagName: "div",
        className: "wizard-step",

        initialize: function(options) {
            this.options = options;
            Handlebars.registerPartial( "stepTitle", StepTitleTemplate );

        },

        onRender: function() {
            console.log("rendered step Introduction");

            this.$el.html(this.template({text:"Wizard Step 1"}));
        }

    });

    return StepSelectView;
    
});