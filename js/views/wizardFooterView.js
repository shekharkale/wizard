define(["jquery", "backbone", "marionette", "js/wizard", "templates/wizardFooter"], 
    function($, Backbone, Marionette, Wizard, wizardFooterTemplate) {

    console.log("loading wizardFooterView");

    var WizardFooterView = Marionette.ItemView.extend({
        template: wizardFooterTemplate,
        tagName: "div",
        className: "wfooter",

        ui: {
            nextButton: '#wizardNextButton',
            prevButton: '#wizardPrevButton'
        },
        
        events: {
            'click @ui.nextButton': 'clickedButton',
            'click @ui.prevButton': 'clickedButton'
        },

        clickedButton: function(event) {
            console.log('button clicked : ' + $(event.currentTarget).data('action'));
            Wizard.vent.trigger("WIZ_NAV_CLICKED", $(event.currentTarget).data('action'));

        },

        initialize: function(options) {
            this.options = options;

        },

        onRender: function() {
            console.log("rendered footer");
        }

    });

    return WizardFooterView;
    
});
