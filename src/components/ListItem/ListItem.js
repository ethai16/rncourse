import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onItemPressed}>
                <View style = {styles.listItem}>
                    <Text>{this.props.placeName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        marginBottom: 5
    }
});

export default ListItem
