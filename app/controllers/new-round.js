import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    title: 'New Round',
    courseName: null,
    datePlayed: null,
    score: null,
    putts: null,
    holesPlayed: null,
    girCount: null,
    girTotal: null,
    greenMissDir: null,  
    fwyCount: null,
    fwyTotal: null,
    fwyMissDir: null,
    formInvalid: computed('courseName', 'datePlayed', 'score', 'putts', 'holesPlayed', 'girCount', 'girTotal', 'greenMissDir', 'fwyCount', 'fwyTotal', 'fwyMissDir', function() {
        const formFields = [
            this.get('courseName'),
            this.get('datePlayed'),
            this.get('score'),
            this.get('putts'),
            this.get('holesPlayed'),
            this.get('girCount'),
            this.get('girTotal'),
            this.get('greenMissDir'),
            this.get('fwyCount'),
            this.get('fwyTotal'),
            this.get('fwyMissDir')
        ]

        return !formFields.every(field => !!field);
      }),

    actions: {
        saveRound() {
            const courseName = this.get('courseName');
            const datePlayed = this.get('datePlayed');
            const score = this.get('score');
            const putts = this.get('putts');
            const holesPlayed = this.get('holesPlayed');
            const girCount = this.get('girCount');
            const girTotal = this.get('girTotal');
            const greenMissDir = this.get('greenMissDir');
            const fwyCount = this.get('fwyCount');
            const fwyTotal = this.get('fwyTotal');
            const fwyMissDir = this.get('fwyMissDir');

            const newRound = this.store.createRecord('round', {
                courseName,
                datePlayed,
                score,
                putts,
                holesPlayed,
                girCount,
                girTotal,
                greenMissDir,
                fwyCount,
                fwyTotal,
                fwyMissDir
            });

            newRound.save().then(response => {
                this.transitionToRoute('rounds');
            });
        },

        setHolesPlayed: function(selected) {
            this.set('holesPlayed', selected);
        },

        setGreenMissDirection: function(selected) {
            this.set('greenMissDir', selected);
        },

        setFwyMissDirection: function(selected) {
            this.set('fwyMissDir', selected);
        },

        clearForm() {
            this.set('courseName', null),
            this.set('datePlayed', null),
            this.set('score', null),
            this.set('putts', null),
            this.set('holesPlayed', null),
            this.set('girCount', null),
            this.set('girTotal', null),
            this.set('greenMissDir', null),
            this.set('fwyCount', null),
            this.set('fwyTotal', null),
            this.set('fwyMissDir', null)
            
            return true;
         }
    }
});
