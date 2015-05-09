import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      fName : "First Name",
      lName : "Last Name",
      sfx : "Suffix"
    };
  }
});
