/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import ListContainer from './src/components/ListContainer/ListContainer'
import InputContainer from './src/components/InputField/InputContainer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{

  state = {
    placeName: '',
    places: []
  }

  placeNameChangeHandler = (val) => {
    this.setState({
      ...this.state,
      placeName: val
    })
  }

  placeSubmitHandler = () =>{
    if(this.state.placeName.trim() === ''){
      return;
    }

    this.setState({
      places: this.state.places.concat(this.state.placeName)
    })
  }

  onItemDeleted = (index) => {

    this.setState(prevState =>{
      return {
        places: prevState.places.filter((place,i) => {
          return i !== index;
        })
      }
    })
  }



  render() {

    return (
      <View style={styles.container}>
        <InputContainer placeChange = {this.placeNameChangeHandler} placeSubmit = {this.placeSubmitHandler}/>
        <ListContainer places = {this.state.places}  onItemDeleted = {this.onItemDeleted}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 75
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
