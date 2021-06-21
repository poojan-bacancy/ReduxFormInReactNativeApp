import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { scale } from 'react-native-size-matters'
import { Colors, Fonts } from '../Theme'

const CustomButton = ({onPress,buttonLabel}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.7} 
            style={styles.button} 
            onPress={onPress}
        >
            <Text style={[Fonts.whiteText,Fonts.textRegular]}> {buttonLabel} </Text>

        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : Colors.green,
        paddingVertical : scale(10),
        width : scale(200),
        maxWidth : 300,
        maxHeight : 70,
        borderRadius  : scale(25),
    }
})
