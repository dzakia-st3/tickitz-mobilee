import React from "react";
import { Text, View, TextInput, Image, Pressable } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import commonStyle from "../../../helper/commonStyle";

const ConfirmNewPass = () => {
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
                }}>Set Password</Text>
                <Text style={{
                    fontSize: 15,
                    color: 'black',
                    paddingVertical: 15,
                }}>set your new password</Text>
            </View>
            <View>
                <Text style={{ color: 'black', paddingVertical: 8}}>Password</Text>
                <View style={[{ marginBottom: 15 }]}>
                    <View style = {[commonStyle.flexRow, {
                        borderStyle: 'solid',
                        borderColor: 'rgba(222, 222, 222, 1)',
                        borderWidth: 1,
                        borderRadius: 4, 
                    }]}>
                        <TextInput 
                        placeholder = "Write your password" 
                        style = {{ 
                            paddingVertical: 7,
                            paddingLeft: 10,
                            flex: 1 
                            }} 
                            autoCapitalize='none' 
                            secureTextEntry={showPassword ? false : true} />
                        <Text onPress={() => setShowPassword(!showPassword)} style={{ alignSelf: 'center', padding: 5, marginRight: 7 }}>{showPassword ? 'Hide' : 'Show'}</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ color: 'black', paddingVertical: 8}}>Confirm Password</Text>
                <View style={[{ marginBottom: 15 }]}>
                    <View style = {[commonStyle.flexRow, {
                        borderStyle: 'solid',
                        borderColor: 'rgba(222, 222, 222, 1)',
                        borderWidth: 1,
                        borderRadius: 4, 
                    }]}>
                        <TextInput 
                        placeholder = "Write your password" 
                        style = {{ 
                            paddingVertical: 7,
                            paddingLeft: 10,
                            flex: 1 
                            }} 
                            autoCapitalize='none' 
                            secureTextEntry={showPassword ? false : true} />
                        <Text onPress={() => setShowPassword(!showPassword)} style={{ alignSelf: 'center', padding: 5, marginRight: 7 }}>{showPassword ? 'Hide' : 'Show'}</Text>
                    </View>
                </View>
            </View>
            <Pressable 
            onPress={() => navigation.navigate('Home')} 
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
                    }}>Submit</Text>
            </Pressable>
        </View>
    )
}

export default ConfirmNewPass