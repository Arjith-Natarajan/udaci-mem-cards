import moment from 'moment'

export const calculateTimeAgo = (lastStudied) => {
  if (!lastStudied) return 'never'
  const now = moment()
  const diffString = moment.duration(now.diff(lastStudied)).humanize()
  return `${diffString} ago`
}

// NEXT KEY
export const getNextObj = (o, id) => {
  const keys = Object.keys(o)
  if (!id) return o[keys[0]]
  let idIndex = keys.indexOf(id)
  idIndex += 1
  const nextIndex = idIndex
  if (nextIndex >= keys.length) {
    // we&#x27;re at the end, there is no next
    return undefined
  }
  const nextKey = keys[nextIndex]
  return o[nextKey]
}

// PREVIOUS KEY
export const getPreviousObj = (o, id) => {
  const keys = Object.keys(o)
  let idIndex = keys.indexOf(id)
  idIndex -= 1
  const nextIndex = idIndex
  if (idIndex === 0) {
    // we&#x27;re at the beginning, there is no previous
    return undefined
  }
  const nextKey = keys[nextIndex]
  return o[nextKey]
}

export const computeScore = (crctlyAnsweredQuestions, totalQuestions) =>
  `${((crctlyAnsweredQuestions / totalQuestions) * 100).toFixed(3)} %`
