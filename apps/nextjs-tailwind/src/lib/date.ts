import moment from 'moment'

export function getDate(date?: Date): string {
  let formatDate = '-'
  if (date) {
    const dateObject = moment(date)
    formatDate = dateObject.format('DD MMMM YYYY')
  }
  return formatDate
}
