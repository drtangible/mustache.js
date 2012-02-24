Mustache.registerHelper('bold', function(text, render) {
  return "<b>" + render(text) + "</b>";
});

var helpers = {
  city: {
    name: "Caprica City"
  },
  planet: {
    name: "Caprica"
  }
};