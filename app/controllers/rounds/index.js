import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    title: 'Dashboard',

    months: computed('model', function() {
        let rounds = this.get('model');
        let months = [];
        
        rounds.arrangedContent.forEach(round => {
            const date = new Date(round._data.datePlayed); 
            const month = date.toLocaleString('default', { month: 'long' });
            months.push(month);
          });

        months = new Set(months.reverse());
        return months;
    }),

    currentYear: new Date().getFullYear(),
});
