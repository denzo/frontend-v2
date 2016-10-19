import DS from 'ember-data';

export default DS.Model.extend({

  // owner: belongsTo('user')
  active: DS.attr('boolean'),
  billingMethod: DS.attr('string'),
  seats: DS.attr('number'),
  provider: DS.attr('string'),
  failedPayment: DS.attr('boolean'),
  nextBillingDate: DS.attr('date'),
  endOfTrialDate: DS.attr('date'),
  tier: DS.attr('string'),
  period: DS.attr('string')

});
