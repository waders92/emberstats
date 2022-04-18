import { helper } from '@ember/component/helper';

function ismonthlyround(params) {
    const month = params[0];
    const round = params[1];
    let date = new Date(round.datePlayed);
    date.setDate(date.getDate() + 1);
  
    let dateMonth = date.toLocaleString('default', { month: 'long' });
    return dateMonth == month;
}

export default helper(ismonthlyround);