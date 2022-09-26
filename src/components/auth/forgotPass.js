import React from "react";
import { Text, View, TextInput, Image, Pressable } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import commonStyle from "../../../helper/commonStyle";

const ForgotPass = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();
    return (
        <View style={{ marginHorizontal: 50 }}>
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Image source={require('../../../img/TickitzMobile.png')} style={{
                    marginVertical: 30,
                }} />
            </Pressable>
            <View>
                <Text style={{
                    fontSize: 25,
                    color: 'black',
                    fontStyle: 'bold'
                }}>Forgot Password</Text>
                <Text style={{
                    fontSize: 15,
                    color: 'black',
                    paddingVertical: 20,
                }}>we'll send a link to your email shortly</Text>
            </View>
            <View>
                <Text style={{ color: 'black' }}>Email</Text>
                <TextInput
                    placeholder="Write your email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={{
                        paddingVertical: 7,
                        paddingLeft: 10,
                        borderStyle: 'solid',
                        borderColor: 'rgba(222, 222, 222, 1)',
                        borderWidth: 1,
                        marginVertical: 10,
                        borderRadius: 4
                    }} />
            </View>
            <Pressable 
            onPress={() => navigation.navigate('ConfirmNewPass')} 
            style = {{ 
                borderRadius: 10, 
                marginVertical: 5, 
                backgroundColor: '#5F2EEA',  
                borderStyle: 'solid', 
                borderRadius: 4, }} 
                android_ripple={{ color: "white" }}>
                <Text style = {{ 
                    color: 'white', 
                    fontSize: 15,
                    fontStyle: 'bold', 
                    paddingVertical: 8, paddingHorizontal: 25,
                    textAlign: 'center' 
                    }}>Send</Text>
            </Pressable>
        </View>
    )
}

export default ForgotPass