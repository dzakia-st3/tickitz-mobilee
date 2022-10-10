import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import commonStyle from "../../../helper/commonStyle";
import { useSelector, useDispatch } from 'react-redux'
import { AuthLogin } from '../../redux/actions/auth'
import { Formik } from 'formik'

const Login = () => {
    const { data, error, loading, isLogin } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);
    
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: '',
    })

    const onInputChange = (value, input) => {
        setFormLogin({
            ...formLogin,
            [input]: value,
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(AuthLogin(formLogin))
    }

    useEffect(() => {
        if (isLogin === true) {
            alert('You are Login')
            navigation.navigate('Home')
        }
        else {
            // alert(error.message)
            navigation.navigate('Login')
        }     
    }, [isLogin])

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
                }}>Sign In</Text>
                <Text style={{
                    fontSize: 15,
                    color: 'black',
                    paddingVertical: 20,
                }}>Sign in with your data that you entered during
                    your registration</Text>
            </View>
            {/* <Formik onSubmit={handleLogin}>
                <> */}
                    <View>
                        <Text style={{ color: 'black' }}>Email</Text>
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
                                marginVertical: 10,
                                borderRadius: 4,
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
                                    value={formLogin.password}
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
                onPress={handleLogin}
                onSubmit={handleLogin}
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
                    paddingVertical: 8,
                    paddingHorizontal: 25,
                    textAlign: 'center'
                }}>Sign In</Text>
            </Pressable>
            <View style={[commonStyle.flex, commonStyle.flexRow, commonStyle.flexCenter, { paddingVertical: 7 }]}>
                <Text style={{ color: 'black' }}>Forgot your password ?</Text>
                <Pressable>
                    <Text
                        style={[commonStyle.textPurple]}
                        onPress={() => navigation.navigate('ForgotPass')}>Reset now</Text>
                </Pressable>
            </View>
            <View style={[commonStyle.flex, commonStyle.flexRow, commonStyle.flexCenter, { paddingVertical: 7 }]}>
                <Text style={{ color: 'black' }}>Don't have an account ?</Text>
                <Pressable>
                    <Text
                        style=
                        {[commonStyle.textPurple]}
                        onPress={() => navigation.navigate('Register')}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login