import React, { useState , useRef } from 'react'
import { StyleSheet, Text, View , SafeAreaView, ScrollView } from 'react-native'
import { Field, reduxForm } from 'redux-form';
import { scale } from 'react-native-size-matters';
import { passwordRequired , emailRequired , mobileRequired, nameRequired ,
    validateEmail , validatePassword , validatePhoneno } from '../../Services/utils'
import { CustomButton , FormInput } from '../../Components';
import SuccessfullModal from './SuccessfullModal'
import { Strings } from '../../Constants';
import { Styles , Fonts } from '../../Theme';

const MyForm = (props) => {
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

    // creating refs to focus next input after submit editting
    const field2Ref = useRef()
    const field3Ref = useRef()
    const field4Ref = useRef()

    return (
        <SafeAreaView style={Styles.flexOne}>
            
            <ScrollView>

                <Text style={[Fonts.titleRegular,Fonts.textCenter,Styles.formTitle]}>
                    {Strings.formTitle}
                </Text>

                <View style={Styles.formContainer}>
                    {/* Field is used to connect each individual input to redux store */}
                    <Field 
                        name="fullName"
                        label={Strings.nameFieldLabel}
                        placeholder={Strings.nameFieldPlaceholder}
                        component={FormInput}
                        validate={[nameRequired]}
                        onEnter={() => field2Ref.current.focus()} 
                    />
                    <Field 
                        name="email"
                        refField={field2Ref}
                        label={Strings.emailFieldLabel}
                        placeholder={Strings.emailFieldPlaceholder}
                        component={FormInput}
                        validate={[emailRequired,validateEmail]}
                        onEnter={() => field3Ref.current.focus()}
                    />
                    <Field 
                        name="mobileNo"
                        refField={field3Ref}
                        label={Strings.mobileNoFieldLabel}
                        placeholder={Strings.mobileNoFieldPlaceholder}
                        maxLength={10}
                        component={FormInput}
                        validate={[mobileRequired,validatePhoneno]}
                        onEnter={() => field4Ref.current.focus()}
                    />
                    <Field
                        name="password"
                        refField={field4Ref}
                        label={Strings.passFieldLabel}
                        placeholder={Strings.passFieldPlaceholder}
                        secureTextEntry
                        component={FormInput}
                        validate={[passwordRequired,validatePassword]}
                        onEnter={props.handleSubmit(onSubmit)}
                    />

                    <View style={styles.buttonContainer}>
                        <CustomButton 
                            onPress={props.handleSubmit(onSubmit)}
                            buttonLabel={Strings.submitButtonLabel}
                        />
                    </View>

                    <SuccessfullModal 
                        visible={isModalOpen}
                        closeModal={closeModalHandler}
                    />
            
                </View>

            </ScrollView>
            
        </SafeAreaView>
    )
}

export default reduxForm({
    form: 'myForm'
})(MyForm)

const styles = StyleSheet.create({
    buttonContainer : {
        marginHorizontal : scale(40),
        marginVertical : scale(15)
    }
})
