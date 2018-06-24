import moment from 'moment'

export const calculateTimeAgo = (lastStudied) => {
  if (!lastStudied) return 'never'
  const now = moment()
  const diffString = moment.duration(now.diff(lastStudied)).humanize()
  return `${diffString} ago`
}
