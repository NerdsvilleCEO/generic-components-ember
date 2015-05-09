import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'generic-components/tests/helpers/start-app';

var application;

module('Acceptance: NameInputComponent', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /name-input-component', function(assert) {
  visit('/name-input-component');

  andThen(function() {
    var expectedValues = ["fname", "lname", "sfx"];
    assert.equal(currentURL(), '/name-input-component');
    assert.equal(find('#name-input').length, 1, "Name input field should exist");
    assert.ok(find('.name-field').length > 1, "We should have more than 1 field");
    for(var value in expectedValues){
      if(expectedValues.hasOwnProperty(value)){
        var checkAttr = "#"+expectedValues[value];
        assert.equal(find(checkAttr).length, 1, "We should have all the expected form fields");
        assert.ok($(find(checkAttr)).attr("placeholder") !== "", "We should have placeholder values from route");
      }
    }
    assert.ok($(find("#submitButton")).text() !== "", "We should have button text");
  });
});
