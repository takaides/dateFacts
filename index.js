const chalk = require('chalk');
const moment = require('moment');

function DST(){
  if (moment().isDST()) {
    return 'is';
  } else {
    return "isn't";
  }
}
function leap(){
  if (moment().isLeapYear()) {
    return 'is';
  } else {
    return "isn't";
  }
}
console.log(`It is ${chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))}.`);
console.log(`It is the ${chalk.magenta(moment().format("DDDo"))} day of the year`);
console.log(`It is ${chalk.cyan((moment().format("k")*3600)+(moment().format("m")*60)+(moment().format("s")))} seconds into the day`);
console.log(`It ${chalk.greenBright(DST())} currently daylight savings time.`);
console.log(`It ${chalk.red(leap())} currently a leap year.`);
