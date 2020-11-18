import {StyleSheet} from 'react-native';
import { content } from '../../../assets/helper/Colors';

export default StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    date: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      alignItems: 'center',
    },
    content: {
      marginTop: 50,
      padding: 50,
      backgroundColor: content,
      borderBottomRightRadius: 50
    },
    textContent: {
      color: '#FDCF05',
      fontSize: 18,
      textAlign: 'center',
    },
    statsContent: {
      flexDirection: 'row',
    },
    stats: {
      alignItems: "center",
      padding: 20,
    },
    statsText:{
      alignItems: "center",
      fontSize: 14
    },
    statsNumber: {
      fontSize: 30
    }
  });