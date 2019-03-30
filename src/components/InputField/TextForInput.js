import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

class TextForInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            placename: ''
        }
    }

    render() {
        return (
        <TextInput
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.props.placeChange}
            placeholder={'Text Input'}>
        </TextInput>
        );
    }
}


const styles = StyleSheet.create({
    placeInput:{
        width: '70%'
    },
})


export default TextForInput
