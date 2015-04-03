//Main App file

define(["jquery", "marionette", "js/lib/dialogRegion"], function($, Marionette){

    var Wizard = new Marionette.Application();

    Wizard.on("start", function(options){

        var wizardOptions = options;

        var wizID = "#" + wizardOptions.wizID; 
        Wizard.addRegions({
            dialogRegion:Marionette.Region.Dialog.extend ({
                el: wizID
            })
        });
        require(["js/views/wizardView"], function(WizardContainerView){

            var mainView = new WizardContainerView(wizardOptions);
            mainView.title = options.title;
            Wizard.dialogRegion.show(mainView);

        });
        
    });

    return Wizard;

});