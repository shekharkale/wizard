define(["jquery", "backbone","marionette", "handlebars","templates/steps/stepInfo", "templates/steps/partials/stepTitle"], 
    function($, Backbone, Marionette, Handlebars, StepInfoTemplate, StepTitleTemplate) {

    console.log("loading stepInfoView");

    var StepInfoView = Marionette.ItemView.extend({
        template: StepInfoTemplate,
        tagName: "div",
        className: "wizard-step",

        initialize: function(options) {
            this.options = options;
            Handlebars.registerPartial( "stepTitle", StepTitleTemplate );

        },

        onRender: function() {
            console.log("rendered step Information");
            this.$el.html(this.template({text:"Wizard Step 1"}));
        }

    });

    return StepIntroView;
    
});