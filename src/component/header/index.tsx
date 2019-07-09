import * as React from 'react';
import {StyleSheet, Text, View, ViewStyle, StatusBar, TextStyle} from 'react-native';

const Header : React.FunctionComponent = () =>{

  return (
    <View style={styles.header}>
      <StatusBar></StatusBar>
      <View style={styles.headerContent}>
        <Text style={styles.headerText}>Header</Text>
      </View>
    </View>
  );

}

export default Header ;

interface IAPPStyles{
  header: ViewStyle
  headerContent: ViewStyle
  headerText: TextStyle
}

const styles = StyleSheet.create<IAPPStyles>({

  header:{
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
    headerContent: {
      backgroundColor: 'blue',
      alignSelf: 'flex-end',
      flex: 1,
      height: 25,
      justifyContent: 'center',
    },
    headerText: {
      textAlign: 'center',
      color:'white',
    },

});