import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomButton = ({onPress,buttonLabel}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.7} 
            style={styles.button} 
            onPress={onPress}
        >
            <Text style={styles.buttonLabel}> {buttonLabel} </Text>

        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'green',
        paddingVertical : 10,
        borderRadius  : 25,
    },
    buttonLabel : {
        color : 'white'
    }
})
