import React from "react";
import { Text, View, TextInput, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import commonStyle from "../../../helper/commonStyle";
import { useDispatch} from "react-redux/es/exports";
import { AuthRegister } from '../../redux/actions/auth'
import { useSelector } from "react-redux/es/exports";

const Register = () => {
    const { data, error, loading, isRegister} = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();

    const [formRegister, setFormRegister] = useState({
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        phone_number:'',
    })

    const onInputChange = (value, input) => {
        setFormRegister({
            ...formRegister,
            [input]: value,
        })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(AuthRegister(formRegister))
    }

    useEffect(() => {
        if (isRegister === true) {
            alert('Regsiter Succesfully!')
            navigation.navigate('Login')
        }
        else {
            alert('Oops, something wrong')
            navigation.navigate('Register')
        }     
    }, [isRegister])

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
                }}>Sign Up</Text>
                <Text style={{
                    fontSize: 10,
                    color: 'black',
                    paddingVertical: 20,
                }}>Fill your additional details</Text>
            </View>
            <View>
                <Text style={{ color: 'black', paddingVertical: 8}}>First Name</Text>
                <TextInput
                    value={formLogin.first_name}
                    onChangeText={value => onInputChange(value, 'first_name')}
                    placeholder="Write your first name"
                    style={{
                        paddingVertical: 7,
                        paddingLeft: 10,
                        borderStyle: 'solid',
                        borderColor: 'rgba(222, 222, 222, 1)',
                        borderWidth: 1,
                        borderRadius: 4
                    }} />
            </View>
            <View>
                <Text style={{ color: 'black', paddingVertical: 8}}>Last Name</Text>
                <TextInput
                    value={formLogin.last_name}
                    onChangeText={value => onInputChange(value, 'last_name')}
                    placeholder="Write your last name"
                    style={{
                        paddingVertical: 7,
                        paddingLeft: 10,
                        borderStyle: 'solid',
                        borderColor: 'rgba(222, 222, 222, 1)',
                        borderWidth: 1,
                        borderRadius: 4
                    }} />
            </View>
            <View>
                <Text style={{ color: 'black', paddingVertical: 8}}>Phone Number</Text>
                <TextInput
                    value={formLogin.phone_number}
                    onChangeText={value => onInputChange(value, 'phone_number')}
                    placeholder="Write your phone number"
                    keyboardType="phone-pad"
                    style={{
                        paddingVertical: 7,
                        paddingLeft: 10,
                        borderStyle: 'solid',
                        borderColor: 'rgba(222, 222, 222, 1)',
                        borderWidth: 1,
                        borderRadius: 4
                    }} />
            </View>
            <View>
                <Text style={{ color: 'black', paddingVertical: 8}}>Email</Text>
                <TextInput
                    value={formLogin.email}
                    onChangeText={value => onInputChange(value, 'email')}
                    placeholder="Write your email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={{
                        paddingVertical: 7,
                        paddingLeft: 10,
                        borderStyle: 'solid',
                        borderColor: 'rgba(222, 222, 222, 1)',
                        borderWidth: 1,
                        borderRadius: 4
                    }} />
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
                        value={formLogin.password}
                        onChangeText={value => onInputChange(value, 'password')}
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
                onPress={handleRegister}
                
                style={{
                    borderRadius: 10,
                    marginVertical: 5,
                    backgroundColor: '#5F2EEA',
                    borderStyle: 'solid',
                    borderRadius: 4,
                }}
                android_ripple={{ color: "white" }}>
                <Text style={{
                    color: 'white',
                    fontSize: 15,
                    fontStyle: 'bold',
                    paddingVertical: 8, paddingHorizontal: 25,
                    textAlign: 'center'
                }}>Sign Up</Text>
            </Pressable>
            <View style={[commonStyle.flex, commonStyle.flexRow, commonStyle.flexCenter, { paddingVertical: 7 }]}>
                <Text style={{ color: 'black' }}>Already have account ?</Text>
                <Pressable>
                    <Text 
                    style={[commonStyle.textPurple]}
                    onPress = {() => navigation.navigate('Login')}>Sign In</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Register