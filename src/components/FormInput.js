import React from 'react'
import { Text, View , TextInput } from 'react-native'
import { allowOnlyChar, removeSpaces } from '../Services/utils'
import { Colors, Fonts, Styles } from '../Theme'

const MyInput = (props) => {

    const { touched , error }  = props.meta

    // this functionn renders error when input is touched and value is invalid
    const isErrorVisible = () => {
        return touched && error 
            ? <Text style={Fonts.textSmall,Fonts.redText}>{error}</Text> 
            : null
    }

    const textChangeHandler = (term) => {
        // password email and mobile number should not contain white spaces
        // name field should not contain any specialcharacter or number 
        const value = props.label !== "Full Name" ? removeSpaces(term) : allowOnlyChar(term)
        props.input.onChange(value)
    }
 
    return (
        <View style={Styles.formInputContainer}>

            <Text style={Fonts.textRegular}>{props.label}</Text>
            
            <View style={Styles.textInputContainer}>
                <TextInput
                    ref={props.refField}
                    style={[Styles.flexOne,Fonts.textSmall]} 
                    returnKeyType={props.label !==  "Password" ? "next" : "done"}
                    maxLength={props.maxLength}
                    keyboardType={props.label === "Mobile Number" ? 'numeric' : 'default'}
                    secureTextEntry={props.secureTextEntry}
                    placeholder={props.placeholder}
                    placeholderTextColor={Colors.grey}
                    onSubmitEditing={props.onEnter}
                    blurOnSubmit={props.label !==  "Password" ? false : true}
                    // below props are needed for the textInput to be handled properly by redux form
                    value={props.input.value}
                    onChangeText={textChangeHandler}
                    onFocus={props.input.onFocus}
                    onBlur={props.input.onBlur}
                />                
            </View>
            
            {isErrorVisible()}
        
        </View>
    )
}

export default MyInput


