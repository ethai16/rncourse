/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
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

  render() {
    const placesOutput = this.state.places.map((place, i) => {
      return <ListItem 
              key = {i} 
              placeName = {place} 
              onItemPressed={()=>alert('item pressed: ' + place)}
              />
    })

    return (
      <View style={styles.container}>
        <InputContainer placeChange = {this.placeNameChangeHandler} placeSubmit = {this.placeSubmitHandler}/>
        <View style = {styles.listContainer}>
          {placesOutput}
        </View>
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
  },
  listContainer:{
    width: "100%"
  }
});
