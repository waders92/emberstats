import Component from '@ember/component';

export default Component.extend({

    scoringAvg18: null,
    scoringAvg9: null,
    puttsAvg18: null,
    puttsAvg9: null,
    girCountAvg9: null,
    girTotalAvg9: null,
    girCountAvg18: null,
    girTotalAvg18: null,
    fwyCountAvg9: null,
    fwyTotalAvg9: null,
    fwyCountAvg18: null,
    fwyTotalAvg18: null,
    nines: null,
    eighteens: null,

    init() {
        this._super(...arguments);
 
        this.nines = this.model.filter(m => {
            return m.holesPlayed == '9';
        });

        this.eighteens = this.model.filter(m => {
            return m.holesPlayed == '18';
        });

        this.scoringAvg9 = this.nines.reduce(function (acc, obj) { return acc + obj.score; }, 0) / this.nines.length;
        this.scoringAvg18 = this.eighteens.reduce(function (acc, obj) { return acc + obj.score; }, 0) / this.eighteens.length;

        this.puttsAvg9 = this.nines.reduce(function (acc, obj) { return acc + obj.putts; }, 0) / this.nines.length;
        this.puttsAvg18 = this.eighteens.reduce(function (acc, obj) { return acc + obj.putts; }, 0) / this.eighteens.length;

        this.girCountAvg9 = this.nines.reduce(function (acc, obj) { return acc + obj.girCount; }, 0) / this.nines.length;
        this.girTotalAvg9 = this.nines.reduce(function (acc, obj) { return acc + obj.girTotal; }, 0) / this.nines.length;

        this.fwyCountAvg9 = this.nines.reduce(function (acc, obj) { return acc + obj.fwyCount; }, 0) / this.nines.length;
        this.fwyTotalAvg9 = this.nines.reduce(function (acc, obj) { return acc + obj.fwyTotal; }, 0) / this.nines.length;

        this.girCountAvg18 = this.eighteens.reduce(function (acc, obj) { return acc + obj.girCount; }, 0) / this.eighteens.length;
        this.girTotalAvg18 = this.eighteens.reduce(function (acc, obj) { return acc + obj.girTotal; }, 0) / this.eighteens.length;

        this.fwyCountAvg18 = this.eighteens.reduce(function (acc, obj) { return acc + obj.fwyCount; }, 0) / this.eighteens.length;
        this.fwyTotalAvg18= this.eighteens.reduce(function (acc, obj) { return acc + obj.fwyTotal; }, 0) / this.eighteens.length;
    }
});
