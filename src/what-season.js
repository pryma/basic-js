module.exports = function getSeason(date) {
  

  try {
    date.valueOf();

    let month = date.getMonth();
    if (month < 2) {
      return 'winter';
    } else if (month < 5) {
      return 'spring';
    } else if (month < 8) {
      return 'summer';
    } else if (month < 11) {
      return 'autumn';
    }
    return 'winter';
  } catch(e) {
    if (date == undefined) {
      return 'Unable to determine the time of year!';
    }
    throw new Error(e);
  }

};