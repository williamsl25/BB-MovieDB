//Movie Listing
var MovieListing = Backbone.Model.extend({
  urlRoot:"http://tiy-fee-rest.herokuapp.com/collections/bb-MovieDatabase",
  idAttribute: "_id",
  defaults: function() {
    return {
      poster: 'http://fillmurray.com/300/300'
    };
  },
  initialize: function() {
    console.log('model was created');
  }
});
