function sortDates(date1, date2) {
  const [year1, month1, day1] = date1.split("-");
  const [year2, month2, day2] = date2.split("-");

  if (year1 !== year2) {
    return year1 - year2;
  }

  if (month1 !== month2) {
    return month1 - month2;
  }

  return day1 - day2;
}

function sortDate(dates) {
  return dates.sort(sortDates);
}

const dates = ["2024-12-25", "2023-01-01", "2024-11-15", "2023-03-10"];

console.log(sortDate(dates));