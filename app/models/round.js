import DS from 'ember-data';

export default DS.Model.extend({
  courseName: DS.attr('string'),
  datePlayed: DS.attr('string'),
  score: DS.attr('number'),
  putts: DS.attr('number'),
  holesPlayed: DS.attr('string'),
  girCount: DS.attr('number'),
  girTotal: DS.attr('number'),
  greenMissDir: DS.attr('string'),
  fwyCount: DS.attr('number'),
  fwyTotal: DS.attr('number'),
  fwyMissDir: DS.attr('string')
});
