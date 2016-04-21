import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('bands.band');
  },

  resetController: function(controller) {
    controller.set('songCreationStarted', false);
  },

  actions: {
    didTransition: function() {
      var band = this.modelFor('bands.band');
      document.title = `${band.get('name')} songs - Rock & Roll`;
    },
    createSong: function() {
      var controller = this.get('controller');
      var band = this.modelFor('bands.band');
      
      var song = this.store.createRecord('song', {
        title: controller.get('title'),
        band: band
      });
      song.save().then(function() {
        controller.set('title', '');
      });
    },
  }
});
