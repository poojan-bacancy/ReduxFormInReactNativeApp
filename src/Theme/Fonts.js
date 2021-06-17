import { StyleSheet } from "react-native";
import { moderateScale } from 'react-native-size-matters'
import Colors from "./Colors";

const fonts = {
    regular : 'Swansea-q3pd',
    bold : 'SwanseaBold-D0ox',
    boldItalic : 'SwanseaBoldItalic-p3Dv',
    italic : 'SwanseaItalic-AwqD'
}


export default StyleSheet.create({
    titleRegular : {
        fontFamily : fonts.bold,
        fontSize : moderateScale(22),
    },
    titleSmall : {
        fontFamily : fonts.bold,
        fontSize : moderateScale(20)
    },
    textRegular : {
        fontSize : moderateScale(18),
        fontFamily : fonts.regular
    },
    textSmall : {
        fontSize : moderateScale(15),
        fontFamily : fonts.regular
    },
    textCenter : {
        textAlign : 'center',
    },
    redText : {
        color : Colors.red
    },
    whiteText : {
        color : Colors.white
    }
})