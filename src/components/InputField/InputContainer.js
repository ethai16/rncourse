import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextForInput from './TextForInput';
import ButtonForInput from './ButtonForInput'

class InputContainer extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
        <View style = {styles.inputContainer}>
            <TextForInput placeChange = {this.props.placeChange}/>
            <ButtonForInput placeSubmit = {this.props.placeSubmit}/>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    }
})

export default InputContainer

