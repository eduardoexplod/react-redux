import React from 'react';
import { useReducer } from 'react';
import {StyleSheet, Text, View, ViewStyle, TouchableHighlight, TextStyle } from 'react-native';
import Header from '../../component/header';
import Footer from '../../component/footer';
import { IInitialState } from '../../redux';
import { ADD_COUNTER  } from '../../redux/actions'

import { connect } from 'react-redux';

interface IApp{
  state: any , 
  dispatch: any 
}

const Home : React.FunctionComponent<IApp> = ( { state, dispatch } ) =>{

  
  
  return (
    // Fragmento
    <View style={styles.root}>
      
      <Header/>
      <View style={styles.body}>
        
        <TouchableHighlight onPress={ () => dispatch( { type: ADD_COUNTER } ) } style={styles.button}>
          <Text style={styles.buttonText} >Incrementar</Text>
        </TouchableHighlight>
        <Text>{ state.num }</Text>
        <TouchableHighlight  onPress={ () => undefined } style={styles.button}>
          <Text style={styles.buttonText} > Decremntar</Text>
        </TouchableHighlight>
      </View>
      <Footer/>

    </View>
  );

}

const mapStateToProps = (state: IInitialState ) => {
  return {
    state: state.counter
  }
}
const mapDistpatchToProps = {
  dispatch: ( {type, payload }:{ type: string, payload: any }) => {
    return {
      type,
      payload
    }
  }
}

export default  connect( mapStateToProps, mapDistpatchToProps ) ( Home ) ;

interface IAPPStyles{
  root: ViewStyle
  body: ViewStyle
  button: ViewStyle
  buttonText: TextStyle
}

const styles = StyleSheet.create<IAPPStyles>({
  root: {
    //Agarra todo lo que pueda de la pantalla
    flex: 1,
  },

    body: {
      flex: 1,
      backgroundColor: 'yellow',
      justifyContent: 'center',
      alignContent: 'center'
    },

    button: {
      width: '100%',
      height: 30,
      backgroundColor: 'blue'
    },
    buttonText: {
      color: 'white',
      textAlign: 'center'
    }



});