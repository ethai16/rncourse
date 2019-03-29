/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

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
    const placesOutput = this.state.places.map(place => {
      return <Text key = {{place}}>{place}</Text>
    })

    return (
      <View style={styles.container}>
        <View style = {styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
            placeholder={'Text Input'}>
          </TextInput>
          <Button 
            style={styles.placeButton}
            title='Add' 
            onPress = {this.placeSubmitHandler}/>
        </View>
        <View>
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
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput:{
    width: '70%'
  },
  placeButton:{
    width: '30%'
  }
});
