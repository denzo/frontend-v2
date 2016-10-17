import Ember from 'ember';
import computed from 'ember-computed-decorators';

const states = [
  'tier',
  'details',
  'credit-card'
];

export default Ember.Component.extend({

  index: 0,

  @computed('index')
  activeState(index) {
    return {
      index: index,
      componentName: states[index]
    }
  },

  actions: {

    next() {
      this.incrementProperty('index');
    },

    prev() {
      this.decrementProperty('index');
    },

    changeState(index) {

    }

  }

});
