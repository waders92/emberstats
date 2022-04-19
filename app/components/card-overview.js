import Component from '@ember/component';

export default Component.extend({
    nines: null,
    eighteens: null,

    init() {
        this._super(...arguments);
        this.model = this.model.filter(m => {
            let date = new Date(m.datePlayed);
            date.setDate(date.getDate() + 1);
            let dateMonth = date.toLocaleString('default', { month: 'long' });
            return dateMonth == this.month;
        });

        this.nines = this.model.filter(m => {
            return m.holesPlayed == '9';
        });

        this.eighteens = this.model.filter(m => {
            return m.holesPlayed == '18';
        })
    }
});
