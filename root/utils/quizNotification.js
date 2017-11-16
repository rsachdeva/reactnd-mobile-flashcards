import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'
import { Alert } from 'react-native'

const NOTIFICATION_KEY = 'us.drinnovations.mobile-flashcards:notifications'
const HOUR = 18
const MINUTE = 0

export const removeKeyAndClearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

const createNotification = () => {
  return {
    title: 'Flashcards Quiz Reminder!',
    body: "Its getting late 🌇! Don't forget to complete at least one quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

const setUpNotificationReminder = (hours, minutes) => {
  let reminder = new Date()
  reminder.setDate(reminder.getDate() +1)
  reminder.setHours(hours)
  reminder.setMinutes(minutes)

  return reminder
}

export const checkKeyAndSetLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              const today = new Date()
              let reminder = setUpNotificationReminder(HOUR, MINUTE)
              console.log("reminder is set at", reminder)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: reminder,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            } else {
              Alert.alert('Hey! You might want to enable notifications for this app, they are good reminder for you to study.')
            }
          })
      }
    })
}

export const getLocalNotificationPermissionStatus = () => {
  Permissions.getAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
    return status
  })
}

export const getNotificationKeySaved = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then((result) => {
      return JSON.parse(result)
    })
}