const leapYears = function (theYear) {
    const isYearDivisibleByFour = theYear % 4 === 0;
    const isCentury = theYear % 100 === 0;
    const isYearDivisibleByFourHundred = theYear % 400 === 0;
  
    if (
      isYearDivisibleByFour &&
      (!isCentury || isYearDivisibleByFourHundred)
    ) {
      return true;
    } else {
      return false;
    }
  };

// Do not edit below this line
module.exports = leapYears;
