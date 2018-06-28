import moment from 'moment'
import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'UdaciCards:notifications'

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
    return undefined
  }
  const nextKey = keys[nextIndex]
  return o[nextKey]
}

export const computeScore = (crctlyAnsweredQuestions, totalQuestions) =>
  `${((crctlyAnsweredQuestions / totalQuestions) * 100).toFixed(2)} %`

export const clearLocalNotification = () =>
  AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync)

const createNotification = () => ({
  title: "Hey let's flash some cards",
  body: "👋 don't forget to Study today",
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  },
})

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()

            const tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(18)
            tomorrow.setMinutes(0)

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day',
            })
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
      }
    })
}
