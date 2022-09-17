import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
      height: '100%', width: '100%'
    },
    container: {
      flex: 1, alignItems: 'center', justifyContent: 'center',
    },
    image: {
      width: 150, height: 150, marginBottom: 20, backgroundColor: 'white', borderRadius: 40
    },
    button1: {
      backgroundColor: '#eb534b', height: 40, width: 150, borderRadius: 5, justifyContent: 'center', alignItems: 'center'
    },
    button2: {
      backgroundColor: '#3b3939', height: 40, width: 150, borderRadius: 5,
      justifyContent: 'center', alignItems: 'center', marginTop: 10
    },
    text: {
      fontSize: 15, color: 'white', textAlign: 'center', width: 100, fontWeight: '700'
    },
    timer: {
      fontSize: 15, color: 'black', textAlign: 'center', width: 100, fontWeight: '700'
    }
  });

  export { styles }