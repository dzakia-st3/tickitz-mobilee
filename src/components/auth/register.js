import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import commonStyle from "../../../helper/commonStyle";
import { useSelector, useDispatch } from 'react-redux'
import { AuthRegister } from '../../redux/actions/auth'

const Login = () => {
    const { data, error, loading, isRegister } = useSelector((state) => state.authRegister)
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);


    const [formRegister, setFormRegister] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: '',
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
            alert('Register Successfully')
            navigation.navigate('Login')
        }
        else {
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
            {/* <Formik onSubmit={handleLogin}>
                <> */}
            <View>
                <Text style={{ color: 'black', paddingVertical: 8 }}>First Name</Text>
                <TextInput
                    value={formRegister.first_name}
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
                <Text style={{ color: 'black', paddingVertical: 8 }}>Last Name</Text>
                <TextInput
                    value={formRegister.last_name}
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
                <Text style={{ color: 'black', paddingVertical: 8 }}>Phone Number</Text>
                <TextInput
                    value={formRegister.phone_number}
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
                <Text style={{ color: 'black', paddingVertical: 8 }}>Email</Text>
                <TextInput
                    value={formRegister.email}
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
                <Text style={{ color: 'black', paddingVertical: 8 }}>Password</Text>
                <View style={[{ marginBottom: 15 }]}>
                    <View style={[commonStyle.flexRow, {
                        borderStyle: 'solid',
                        borderColor: 'rgba(222, 222, 222, 1)',
                        borderWidth: 1,
                        borderRadius: 4,
                    }]}>
                        <TextInput
                            value={formRegister.password}
                            onChangeText={value => onInputChange(value, 'password')}
                            placeholder="Write your password"
                            style={{
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
            {/* </>
            </Formik> */}
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
                        onPress={() => navigation.navigate('Login')}>Sign In</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login