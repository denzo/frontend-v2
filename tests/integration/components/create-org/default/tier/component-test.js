import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-org/default/tier', 'Integration | Component | create org/default/tier', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{create-org/default/tier}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#create-org/default/tier}}
      template block text
    {{/create-org/default/tier}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
