module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2, disksNumber) - 1;
    let time = turns / (turnsSpeed / 3600);
    return {'turns':turns, 'seconds':time};
}