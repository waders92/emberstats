import { helper } from '@ember/component/helper';

function dateformat(dates) {
  let date = new Date(dates[0]);
  return date.toDateString().split(' ').slice(1).join(' ');
}

export default helper(dateformat);