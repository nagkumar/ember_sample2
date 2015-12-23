import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
                             books: this.store.findAll('book'),
                             oldbooks: this.store.findAll('oldbook')
                           });

    //if Ember Data is not used.. explicit call can happen this way
    //var remoteURLPrefix = 'http://hw/rest/v1/sites/?number=2&category=';
    //
    //return new Ember.RSVP.hash({
    //  books: Ember.$.ajax({ url: remoteURLPrefix + 'news', dataType: "jsonp", type: 'GET' }),
    //  oldbooks: Ember.$.ajax({ url: remoteURLPrefix + 'events', dataType: "jsonp", type: 'GET' })
    //}
  },

    //setupController(controller, model) {
    //  this._super(...arguments);
    //  Ember.set(controller, 'books', model.books);
    //  Ember.set(controller, 'oldbooks', model.oldbooks);
    //}
});
