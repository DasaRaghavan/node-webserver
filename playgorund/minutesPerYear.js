const minutesPerYear = 60 * 24 * 365;
const percent = 2;

const minutesPerDay = 60 * 24;

let totalDaysElapsed = ((percent / 100) * minutesPerYear / minutesPerDay);
let intOfDaysElapsed = parseInt(totalDaysElapsed);
console.log(intOfDaysElapsed)

let hoursElapsedInTheLastDay  = ((totalDaysElapsed - (parseInt(totalDaysElapsed))) * 24);
let integerOfLastHour = (parseInt(hoursElapsedInTheLastDay));

let minutesRemainingInTheLastHour = Math.round((hoursElapsedInTheLastDay - parseInt(hoursElapsedInTheLastDay)) * 60)

console.log(`${integerOfLastHour}:${minutesRemainingInTheLastHour}`);
