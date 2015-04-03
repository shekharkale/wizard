define(["jquery", "backbone","marionette", "handlebars","templates/steps/stepIntro", "templates/steps/partials/stepTitle"], 
    function($, Backbone, Marionette, Handlebars, StepIntroTemplate, StepTitleTemplate) {

    console.log("loading stepIntroView");

    var StepIntroView = Marionette.ItemView.extend({
        template: StepIntroTemplate,
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

    return StepIntroView;
    
});