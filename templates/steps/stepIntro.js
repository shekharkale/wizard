define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  stack1 = self.invokePartial(partials.stepTitle, 'stepTitle', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<form>\n    <label for=\"product\">Product</label>\n    <input id=\"product\"></input>\n    <label for=\"desc\">Description</label>\n    <input id=\"desc\"></input>\n    <label for=\"price\">Price</label>\n    <input id=\"birthdate\"></input>\n</form>\n";
  return buffer;
  })

});