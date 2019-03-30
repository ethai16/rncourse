import React from 'react';
import {View,Button,StyleSheet} from 'react-native';

class ButtonForInput extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Button 
            style={styles.placeButton}
            title='Add' 
            onPress = {this.props.placeSubmit}/>
        );
    }
}

const styles = StyleSheet.create({
    placeButton:{
        width: '30%'
    }
})

export default ButtonForInput
