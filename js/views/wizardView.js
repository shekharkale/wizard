define(["jquery", "underscore", "backbone", "marionette","templates/wizardMain"], function($, _, Backbone, Marionette, wizardTemplate) {

    console.log("loading wizardView");
    
    var WizardMainView = Marionette.LayoutView.extend({
        template: wizardTemplate,
 
        regions: {
            header: "#header-region",
            content: "#main-region",
            footer: "#footer-region",
            leftnav: "#left-region",
            rightnav: "#right-region"
        },

        initialize: function(options){
            this.options = options;

        },

        onBeforeShow: function() {
            var _this = this;
            var WizardApp;
            require(["js/views/wizardHeaderView"], function(WizardHeaderView) {
                var wizHeaderView = new WizardHeaderView(_this.options);
                _this.getRegion('header').show( wizHeaderView);
            });


            require(["js/features/workApp/WorkApp"], function(WorkApp){
                _this.options = _.extend(_this.options, {contentRegion:_this.getRegion('content')});
                WizardApp = WorkApp;
                WizardApp.start(_this.options);

            });

            require(["js/views/wizardFooterView"], function(WizardFooterView) {
                var wizFooterView = new WizardFooterView(_this.options);
                _this.getRegion('footer').show( wizFooterView);
                _this.listenTo(wizFooterView, "NAV_CLICKED", function(event){
                    WizardApp.trigger("WIZ_NAV_CLICKED", event);
                });
            });

            require(["js/views/wizardLeftNavView"], function(WizardLeftNavView) {
                var wizLeftNavView = new WizardLeftNavView(_this.options);
                _this.getRegion('leftnav').show( wizLeftNavView);
            });

            require(["js/views/wizardRightNavView"], function(WizardRightNavView) {
                var wizRightNavView = new WizardRightNavView(_this.options);
                _this.getRegion('rightnav').show( wizRightNavView);
            });
            
        }

    });


    return WizardMainView;
 });