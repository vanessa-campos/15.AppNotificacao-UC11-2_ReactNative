import PushNotification from "react-native-push-notification"

class NotificationManager {
    setNavigator = (newNavigator) => {
        navigation = newNavigator
    }

    configure = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[NotificationManager] onRegister token:", token)
            },
            onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification)
                console.log("Página carregada")        
                navigation.navigate("MockScreen")
                // navigator.navigate("MockScreen" + notification.id)
            },
        })
    }


    createChannel = () => {
        PushNotification.createChannel(
            {
                channelId: "channel-id",
                channelName: "My channel",
                channelDescription: "A channel to categorise your notifications",
            },
            (created) => console.log(`createChannel returned '${created}'`)
        )
    }

    buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            id: id,
            channelId: "channel-id",
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data
        }
    }

    buildAndroidNotificationSchedule = (message) => {
        PushNotification.localNotificationSchedule({
            id: 1,
            message: message,
            date: new Date(Date.now()), // in 60 secs
            allowWhileIdle: false,
            channelId: "channel-id",
        })
    }

    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            ...this.buildAndroidNotification(id, title, message, data, options),
            ticker: "My Notification Ticker",
            showWhen: true,
            autoCancel: true,
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false
        })
    }

    cancelAllLocalNotification = () => {
        PushNotification.cancelAllLocalNotifications()
    }

    openNotification = () => {
        PushNotification.openNotification()
    }

}

export const notificationManager = new NotificationManager()