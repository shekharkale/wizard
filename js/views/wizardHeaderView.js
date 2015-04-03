define(["jquery", "backbone", "marionette","templates/wizardHeader"], function($, Backbone, Marionette, wizardHeaderTemplate) {

    console.log("loading wizardHeaderView");

    var WizardHeaderView = Marionette.ItemView.extend({
        template: wizardHeaderTemplate,
        tagName: "div",
        className: "header-title",


        initialize: function(options) {
            this.options = options;

        },

        onRender: function() {
            var ddate = new Date().toDateString();
            this.$el.html(this.template({title:this.options.description, ddate:ddate }));
        }

    });

    return WizardHeaderView;
    
});
