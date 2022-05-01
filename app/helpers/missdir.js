import { helper } from '@ember/component/helper';

function missDir(params) {
  let miss = '';
  switch (params[0].toLowerCase()) {
      case 'l':
        miss = 'Left';
        break;
      case 'r':
        miss = 'Right';
        break;
      case 's':
        miss = 'Short';
        break;
       case 'n':
        miss = 'Long';
        break;
       default:
        miss = '';
        break;
  }

  return miss;
}

export default helper(missDir);