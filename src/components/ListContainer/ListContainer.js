import React from 'react';
import { View, StyleSheet  } from "react-native";
import ListItem from '../ListItem/ListItem'

class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const placesOutput = this.props.places.map((place, i) => {
            return <ListItem 
                    key = {i} 
                    placeName = {place} 
                    onItemPressed={()=>{this.props.onItemDeleted(i)}}
                    />
        })

        return (
            <View style = {styles.listContainer}>
            {placesOutput}
          </View>
        );
    }
}

const styles = StyleSheet.create({
    listContainer:{
        width: "100%"
      }
})


export default ListContainer
