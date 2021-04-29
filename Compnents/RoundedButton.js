import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const RoundedButton = ({
    style = {},
    textStyle = {},
    size = 125,
    ...props
    }) => {
    return (
      <View>
        <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
          <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
      </View>
    );
}

export default RoundedButton;

const styles = (size) => StyleSheet.create({
    radius:{
        borderRadius: size/2,
        width:size,
        height:size,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'white',
        borderWidth:2,
    },
    text:{
        color:"white",
        fontSize:size/3,

    }

})


