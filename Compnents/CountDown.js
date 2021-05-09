import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

 // setInterval() // to do repetative task

const minutesToMillies =(min) => min*1000*60;
const formatTime =(time) =>time < 10 ? '00' : time;
const CountDown = ({
   minutes = 21,
   isPaused, 
}) => {
    const [milles,setMilles] = useState (minutesToMillies(minutes));
    const minute = Math.floor(milles/100/60) % 60;
    const seconds = Math.floor(milles / 100 ) % 60;

    return (
        <View>
            <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
        </View>
    )
}

export default CountDown;

const styles = StyleSheet.create({
    text:{
        fontSize:25,
        fontWeight:'bold',
        backgroundColor:'rgba(94,132,226 ,0.3)',
        color:'white',
        paddingLeft:20,
    }
})

