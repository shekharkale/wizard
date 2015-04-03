define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n    <div class=\"button-bar\">\n    <ul class=\"macys-group round\">\n        <li id=\"wizardCanclButton\" data-action=\"cancl\" class=\"small macys-button secondary lm100\">Cancel</li>\n    </ul>    \n        <ul class=\"macys-group round\">\n        <li id=\"wizardPrevButton\" data-action=\"prev\" class=\"small macys-button secondary\">Previous</li>\n        <li id=\"wizardNextButton\" data-action=\"next\" class=\"small macys-button secondary\">Next</li>        \n        </ul>\n    </div>\n";
  })

});