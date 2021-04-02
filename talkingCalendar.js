const talkingCalendar = function(date) {
  let splittedDate = date.split('/');
  let year = splittedDate[0];
  let month = getMonth(splittedDate[1]);
  let day = getDay(splittedDate[2]);
  return month + ' ' + day + ', ' + year;
}

const getMonth = function(month) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const index = month.toString() - 1;
  return monthNames[index];
}

const getDay = function(day) {
  switch(day) {
  case '01':
    return '1st';
  case '02':
    return '2nd';
  case '03':
    return '3rd'
  case '21':
    return '21st';
  case '22':
    return '22nd';
  case '23':
    return '23rd';
  case '31':
    return '31st';
  default:
    return day + 'th';
  }
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2019/02/05"));
console.log(talkingCalendar("2015/05/23"));
console.log(talkingCalendar("2019/09/14"));