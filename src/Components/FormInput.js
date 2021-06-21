import React from 'react'
import { Text, View , TextInput } from 'react-native'
import { allowOnlyChar, removeSpaces } from '../Services/utils/validations'
import { Colors, Fonts, Styles } from '../Theme'

const FormInput = (props) => {

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
        const value = props.allowOnlyChar ? allowOnlyChar(term) : removeSpaces(term)
        props.input.onChange(value)
    }
 
    return (
        <View style={Styles.formInputContainer}>

            <Text style={Fonts.textRegular}>{props.label}</Text>
            
            <View style={Styles.textInputContainer}>
                <TextInput
                    {...props}
                    ref={props.refField}
                    style={[Styles.flexOne,Fonts.textSmall]} 
                    placeholderTextColor={Colors.grey}
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

export default FormInput


