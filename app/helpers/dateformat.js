import { helper } from '@ember/component/helper';

function dateformat(dates) {
  return dates[0].toDateString().split(' ').slice(1).join(' ');
}

export default helper(dateformat);