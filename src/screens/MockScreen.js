import React, { Component } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { styles } from '../styles/index.js'

export default class MockScreen extends Component {
    render() {
        return (
            <ImageBackground source={require('../images/background.jpg')}
                imageStyle={{ opacity: 0.6 }} style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.timer}>Tela destino da notificação</Text>
                </View>
            </ImageBackground>
        )
    }
}