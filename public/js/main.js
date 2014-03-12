var ractive = new Ractive({
  el: 'container',
  template: '#ractiveTemplate',
  data: {
    greeting: 'Hello',
    who: 'Ractive world',
    loggedIn: true
  }
});