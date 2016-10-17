import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-org/default/credit-card', 'Integration | Component | create org/default/credit card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{create-org/default/credit-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#create-org/default/credit-card}}
      template block text
    {{/create-org/default/credit-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
