define(["jquery", "marionette"], function($, Marionette){

    var WorkApp = new Marionette.Application();
    var steps = [];

    WorkApp.on("start", function(options){

        var wizardOptions = options;
        
        require(["js/features/workApp/views/stepIntro"], function(StepIntroView){

            var stepView = new StepIntroView(wizardOptions);
            steps.push(stepView.title);
            stepView.title = options.title;
            wizardOptions.contentRegion.show(stepView);

        });
        
    });

    WorkApp.vent.on("WIZ_NAV_CLICKED", function(options){
        console.log("nav clicked event received " + options);

    });

    var wizardNavigate = function(direction) {
        var dir = -1;
        if(direction === 'next')
            dir = 1;
        if(direction === 'prev')
            dir = 0;

        // If direction is not one of the above, then something went wrong.
        if(dir === -1)
            alert("Invalid direction, cannot navigate");

    }

    return WorkApp;

    
});