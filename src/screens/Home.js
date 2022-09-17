import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { styles } from '../styles/index.js'

export default class Home extends Component {

  render() {
    return (
        <ImageBackground source={require('../images/background.jpg')}
          imageStyle={{ opacity: 0.6 }} style={styles.background}>
          <View style={styles.container}>
            <Image source={require('../images/logo.png')} style={styles.image} />
            <TouchableOpacity style={styles.button1} onPress={this.props.SendNotification}>
              <Text style={styles.text}>Testar Notificação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => { this.props.CancelAllNotification(), this.props.ZerarTempo() }}>
              <Text style={styles.text}>Cancelar Notificações</Text>
            </TouchableOpacity>
            <Text style={styles.timer}>{this.props.segundos}</Text>
          </View>
        </ImageBackground>
    )
  }

}


