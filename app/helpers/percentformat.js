import { helper } from '@ember/component/helper';

function percentformat(params) {
    const count = params[0];
    const total = params[1];

    const percent = (count/total) * 100;
    return Math.round(percent)
}

export default helper(percentformat);