import moment from 'moment'

function formatTime (time) {
  return moment(time).format('HH:mm')
}

function isToday (date) {
  const today = new Date();
  const sameDay = moment(today).isSame(date, 'day')
  return sameDay;
}

export {
  formatTime,
  isToday
}
