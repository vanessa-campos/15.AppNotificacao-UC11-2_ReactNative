import React, { Component } from 'react'
import { notificationManager } from './src/services/NotificationManager.js'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import MockScreen from "./src/screens/MockScreen.js"
import Home from './src/screens/Home.js'

const Stack = createStackNavigator()
const notification = notificationManager

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messageNumber: 0, MessageNumber: 0, segundos: 0,
      messages: [
        "Um cupom de 10% de desconto está disponível",
        "Já sabe o que vai ter na sua próxima refeição? Aqui você encontra de tudo!",
        "Veja os restaurantes que estão com promoções agora"
      ]
    }
  }

  componentDidMount() {
    notification.configure()
    notification.createChannel()
    this.coutdown()
  }

  coutdown() {
    this.timer = setInterval(() => this.incrementar(), 1000)
  }

  incrementar() {
    if (this.state.segundos == 295) {
      this.changeNotificationsSchedule()
      console.log("Notificação enviada!")
    }
    if (this.state.segundos == 300) {
      this.zerarTempo()
      console.log("Notificação na Tela!")
    }
    this.setState({ segundos: this.state.segundos + 1 })
  }

  zerarTempo() {
    this.setState({ segundos: 0 })
  }

  changeNotificationsSchedule() {
    notification.buildAndroidNotificationSchedule(this.state.messages[this.state.messageNumber])
    if (this.state.messageNumber == this.state.messages.length - 1) {
      this.setState({ messageNumber: 0 })
    } else {
      this.setState({ messageNumber: this.state.messageNumber + 1 })
    }
  }

  changeNotifications() {
    if (this.state.MessageNumber == this.state.messages.length - 1) {
      this.setState({ MessageNumber: 0 })
    } else {
      this.setState({ MessageNumber: this.state.MessageNumber + 1 })
    }
  }

  onPressSendNotification = () => {
    notification.showNotification(
      0, "Mensagem por botão", this.state.messages[this.state.MessageNumber], {}, {}
    )
    this.changeNotifications()
  }

  onPressCancelAllNotification = () => {
    notification.cancelAllLocalNotification()
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{headerShown: false}}>
            {
              ({ navigation }) => {
                notification.setNavigator(navigation)
                return (
                  <Home
                    SendNotification={this.onPressSendNotification}
                    CancelAllNotification={this.onPressCancelAllNotification}
                    ZerarTempo={this.zerarTempo}
                    segundos={this.state.segundos}
                  />
                )
              }
            }
          </Stack.Screen>
          <Stack.Screen name="MockScreen" component={MockScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}


