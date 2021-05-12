import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View  } from 'react-native'
import { Field, reduxForm } from 'redux-form';
import { passwordRequired , emailRequired , mobileRequired, nameRequired ,
    validateEmail , validatePassword , validatePhoneno } from '../validations'
import CustomButton from '../components/CustomButton';
import MyInput from '../components/MyInput';
import SuccessfullModal from '../modals/SuccessfullModal'

const MyFormSceen = (props) => {

    // state to manage visibility of modal
    const [isModalOpen,setIsModalOpen] = useState(false)

    // handles submission of form
    const onSubmit = (values) => {
        // values will be object of key and value pairs
        // keys are basically field names
        setIsModalOpen(true)
    }

    const closeModalHandler = () => {
        // so form will be reset when modal is going to close
        props.reset()
        setIsModalOpen(false)
    }

    return (
        <ScrollView>

            <Text style={styles.formTitle}>My Form</Text>

            <View style={styles.myForm}>
                {/* Field is used to connect each individual input to redux store */}
                <Field 
                    name="fullName"
                    label="Full Name"
                    placeholder="Enter your full name"
                    component={MyInput}
                    validate={[nameRequired]}
                />
                <Field 
                    name="email"
                    label="Email Id"
                    placeholder="Enter your email id"
                    component={MyInput}
                    validate={[emailRequired,validateEmail]}
                />
                <Field 
                    name="mobileNo"
                    maxLength={10}
                    label="Mobile Number"
                    placeholder="Enter your mobile number"
                    component={MyInput}
                    validate={[mobileRequired,validatePhoneno]}
                />
                <Field 
                    name="password"
                    secureTextEntry
                    label="Password"
                    placeholder="Enter password"
                    component={MyInput}
                    validate={[passwordRequired,validatePassword]}
                />

                <View style={styles.buttonContainer}>
                    <CustomButton 
                        onPress={props.handleSubmit(onSubmit)}
                        buttonLabel="Submit"
                    />
                </View>

                <SuccessfullModal 
                    visible={isModalOpen}
                    closeModal={closeModalHandler}
                />
        
            </View>

        </ScrollView>
    )
}

export default reduxForm({
    form: 'myForm'
})(MyFormSceen)

const styles = StyleSheet.create({
    formTitle : {
        fontSize : 20,
        fontWeight : '700',
        textAlign : 'center',
        marginVertical : 10
    },
    myForm : {
        marginHorizontal  : 15
    },
    buttonContainer : {
        marginHorizontal : 40,
        marginVertical : 15
    }
})
