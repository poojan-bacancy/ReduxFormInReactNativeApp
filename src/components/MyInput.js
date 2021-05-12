import React from 'react'
import { StyleSheet, Text, View , TextInput } from 'react-native'

const MyInput = (props) => {

    const { touched , error }  = props.meta

    // this functionn renders error when input is touched and value is invalid
    const isErrorVisible = () => {
        return touched && error 
            ? <Text style={styles.errorText}>{error}</Text> 
            : null
    }

    return (
        <View style={styles.formInputContainer}>

            <Text style={styles.inputLabel}>{props.label}</Text>
            
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.input} 
                    secureTextEntry={props.secureTextEntry}
                    placeholder={props.placeholder}
                    placeholderTextColor={'lightgrey'}
                    // below props are needed for the textInput to be handled properly by redux form
                    defaultValue={props.input.value}
                    onChangeText={props.input.onChange}
                    onFocus={props.input.onFocus}
                    onBlur={props.input.onBlur}
                />                
            </View>
            
            {isErrorVisible()}
        
        </View>
    )
}

export default MyInput

const styles = StyleSheet.create({
    formInputContainer : {
        marginVertical : 10
    },
    inputLabel : {
        color : 'black',
        fontSize : 17,
        fontWeight : '500'
    },
    textInputContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        borderBottomColor : 'grey',
        borderBottomWidth : 1
    },
    input : {
        flex : 1,
        fontSize : 15,
        color : 'black'
    },
    errorText : {
        marginTop : 5,
        color : 'red'
    }
})
