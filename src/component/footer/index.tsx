import * as React from 'react';
import {StyleSheet, Text, View, ViewStyle, StatusBar, TextStyle} from 'react-native';

const Footer : React.FunctionComponent = () =>{
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText} >footer </Text>
    </View>
  );
}

export default Footer ;

interface IAPPStyles{
  footer: ViewStyle
  footerText: TextStyle
}

const styles = StyleSheet.create<IAPPStyles>({

  footer:{
    backgroundColor: 'white',
  },

    footerText:{
      justifyContent: 'center',
      textAlign: 'center',
    },

});