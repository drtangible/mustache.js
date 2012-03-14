Mustache.registerHelper('bold', function(text, render) {
  return "<b>" + render(text) + "</b>";
});

var overriding_helpers = {
  bold: function() {
    return function(text, render) {
      return "<strong>" + render(text) + "!</strong>";
    }
  }
};
