import Controller from '@ember/controller';

export default Controller.extend({
    title: 'Edit Round',
    holesPlayed: null,

    actions: {
        updateRound() {
            const model = this.get('model');
            const updatedRound = this.store.findRecord('round', model.id).then((round) => {
                round.save();
                this.transitionToRoute('rounds');
            });
        }
    },
});
