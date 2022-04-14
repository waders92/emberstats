import DS from 'ember-data';

export default DS.Model.extend({
  courseName: DS.attr('string'),
  datePlayed: DS.attr('string'),
  score: DS.attr('string'),
  putts: DS.attr('string'),
  holesPlayed: DS.attr('string'),
  girCount: DS.attr('string'),
  girTotal: DS.attr('string'),
  greenMissDir: DS.attr('string'),
  fwyCount: DS.attr('string'),
  fwyTotal: DS.attr('string'),
  fwyMissDir: DS.attr('string')
});
