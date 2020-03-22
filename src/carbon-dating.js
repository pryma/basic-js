const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

    if (typeof sampleActivity != 'string' || isNaN(parseFloat(sampleActivity))) return false;

    sampleActivity = parseFloat(sampleActivity);
    if (sampleActivity <= 0 || sampleActivity > 15) return false;

    k = Math.log(2) / HALF_LIFE_PERIOD;

    let result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
    return result;
};
