import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      paddingTop: 68,
      paddingLeft: 15,
      paddingRight: 15
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    eventName: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold'
      
    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#1F1E25',
      borderRadius: 5,
      color: '#FDFCFE',
      padding: 16,
      fontSize: 16,
      marginRight: 12
    },
    buttonText: {
      color: '#fff'
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42
    },
    listEmptyText: {
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center'
    }
  });
  