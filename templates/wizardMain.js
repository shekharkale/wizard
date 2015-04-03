define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"wizard-container\" class=\"wizard-container\">\n    <div id=\"left-region\" class=\"wizard-left wizard-nav\">left</div>\n    <div id=\"header-region\" class=\"wizard-header\">Header</div>\n\n    <div id=\"main-region\" class=\"wizard-main\">\n        <p>Here is static content in the web page. You'll notice that it gets replaced by our app as soon as we start it.</p>\n    </div>\n\n    <div id=\"footer-region\" class=\"wizard-footer\">footer</div>\n    <div id=\"right-region\" class=\"wizard-right  wizard-nav\">right</div>\n</div>";
  })

});