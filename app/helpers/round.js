import { helper } from '@ember/component/helper';

function round(params) {
    const count = params[0];

    const percent = (count * 100) / 100;
    return Math.round(percent)
}

export default helper(round);