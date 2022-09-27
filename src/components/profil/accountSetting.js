import React, { useState } from 'react'
import { Image, Pressable, Text, View, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Line from '../../../helper/line'

const accountSetting = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <ScrollView style={{
            marginHorizontal: 35,
            marginVertical: 30,
        }}>
            <View>
                <View style={{
                    display: 'flex',
                    backgroundColor: 'white',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    padding: 35
                }}>
                    <Text style={{
                        textAlign: 'left',
                        fontSize: 15
                    }}>INFO</Text>
                    <Image
                        source={require('../../../img/1658089852664.jpg')}
                        style={{
                            borderRadius: 130,
                            width: 200,
                            height: 200,
                            marginVertical: 30,
                            alignSelf: 'center'
                        }} />
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 25
                    }}>Jonas El Rodriguez</Text>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 15,
                        color: 'grey',
                        paddingTop: 20
                    }}>Moviegoers</Text>
                </View>
                <Line />
                <View style={{
                    display: 'flex',
                    backgroundColor: 'white',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    padding: 35
                }}>
                    <Pressable style={{
                        borderRadius: 5,
                        backgroundColor: '#5F2EEA',
                        borderStyle: 'solid',
                        paddingVertical: 15,
                        marginHorizontal: 30
                    }}
                        android_ripple={{ color: "white" }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 15,
                            textAlign: 'center'
                        }}>Logout</Text>
                    </Pressable>
                </View>
            </View>
            <View>
                <Text style={{
                    fontSize: 23,
                    fontWeight: 'bold',
                    paddingTop: 35,
                    paddingBottom: 20
                }}>Account Settings</Text>
                <View style={{
                    display: 'flex',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 35
                }}>
                    <Text style={{
                        paddingBottom: 15
                    }}>Details Information</Text>
                    <Line />
                    <View>
                        <Text style={{
                            color: 'black',
                            paddingTop: 30,
                            paddingBottom: 10
                        }}>Full Name</Text>
                        <TextInput
                            placeholder="Write your full name"
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
                        <Text style={{
                            color: 'black',
                            paddingTop: 30,
                            paddingBottom: 10
                        }}>E-mail</Text>
                        <TextInput
                            placeholder="Write your email"
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
                        <Text style={{
                            color: 'black',
                            paddingTop: 30,
                            paddingBottom: 10
                        }}>Phone Number</Text>
                        <TextInput
                            placeholder="Write your phone number"
                            style={{
                                paddingVertical: 7,
                                paddingLeft: 10,
                                borderStyle: 'solid',
                                borderColor: 'rgba(222, 222, 222, 1)',
                                borderWidth: 1,
                                borderRadius: 4
                            }} />
                    </View>
                </View>
            </View>
            <Pressable style={{
                borderRadius: 5,
                backgroundColor: '#5F2EEA',
                borderStyle: 'solid',
                paddingVertical: 15,
                margin: 20
            }}
                android_ripple={{ color: "white" }}>
                <Text style={{
                    color: 'white',
                    fontSize: 15,
                    textAlign: 'center'
                }}>Update Changes</Text>
            </Pressable>
            <View style={{
                display: 'flex',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 35
            }}>
                <Text style={{
                    paddingBottom: 15
                }}>Account and Privacy</Text>
                <Line />
                <View>
                    <Text style={{
                        color: 'black',
                        paddingTop: 30,
                        paddingBottom: 10
                    }}>New Password</Text>
                    <View style={{
                        paddingLeft: 10,
                        borderStyle: 'solid',
                        borderColor: 'rgba(222, 222, 222, 1)',
                        borderWidth: 1,
                        borderRadius: 4,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }} >
                        <TextInput
                            autoCapitalize='none'
                            secureTextEntry={showPassword ? false : true}
                            placeholder="Write your new password"
                        />
                        <Text onPress={() => setShowPassword(!showPassword)} style={{ alignSelf: 'center', marginRight: 7 }}>{showPassword ? 'Hide' : 'Show'}</Text>
                    </View>
                </View>
                <View>
                    <Text style={{
                        color: 'black',
                        paddingTop: 30,
                        paddingBottom: 10
                    }}>Confirm</Text>
                    <View style={{
                        paddingLeft: 10,
                        borderStyle: 'solid',
                        borderColor: 'rgba(222, 222, 222, 1)',
                        borderWidth: 1,
                        borderRadius: 4,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }} >
                        <TextInput
                            autoCapitalize='none'
                            secureTextEntry={showPassword ? false : true}
                            placeholder="Write your new password"
                        />
                        <Text onPress={() => setShowPassword(!showPassword)} style={{ alignSelf: 'center', marginRight: 7 }}>{showPassword ? 'Hide' : 'Show'}</Text>
                    </View>
                </View>
            </View>
            <Pressable style={{
                borderRadius: 5,
                backgroundColor: '#5F2EEA',
                borderStyle: 'solid',
                paddingVertical: 15,
                margin: 20
            }}
                android_ripple={{ color: "white" }}>
                <Text style={{
                    color: 'white',
                    fontSize: 15,
                    textAlign: 'center'
                }}>Update Changes</Text>
            </Pressable>
        </ScrollView>
    )
}

export default accountSetting