module.exports = function repeater(str, options) {
    let result = '';
    if (options.repeatTimes == undefined) {
        options.repeatTimes = 1;
    }

    if (options.additionRepeatTimes == undefined) {
        options.additionRepeatTimes = 1;
    }

    for (let i = 0; i < options.repeatTimes; i++) {
        result = result + str;
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            if (options.addition != undefined || options.addition === null) {
                result = result + options.addition;
            }
            if (j < options.additionRepeatTimes - 1) {
                if (options.additionSeparator == undefined) {
                    result = result + '|';
                } else {
                    result = result + options.additionSeparator;
                }
            }
            
        }
        if (i < options.repeatTimes - 1) {
            if (options.separator == undefined) {
                result = result + '+';
            } else {
                result = result + options.separator;
            }
        }
    }
    return result;
};
