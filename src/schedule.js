function getFullSchedule(data) {
  const days = Object.keys(data.hours);
  const hours = Object.values(data.hours);
  const result = {};
  for (let index = 0; index < days.length; index += 1) {
    const day = days[index];
    const hour = hours[index];
    if (hour.open + hour.close === 0) {
      result[day] = 'CLOSED';
    } else {
      result[day] = `Open from ${hour.open}am until ${hour.close - 12}pm`;
    }
  }
  return result;
}

function getScheduleOfTheDay(data, dayName) {
  const result = {};
  result[dayName] = getFullSchedule(data)[dayName];
  return result;
}

module.exports = {
  getFullSchedule,
  getScheduleOfTheDay,
};
