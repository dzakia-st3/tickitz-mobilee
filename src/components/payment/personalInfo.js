import React from 'react'
import { Text, View, Pressable, TextInput } from 'react-native'

const PersonalInfo = () => {
    return (
        <>
            <View style = {{
                marginVertical: 10,
                marginHorizontal: 30,
            }}>
                <Text style={{
                    fontSize: 23,
                    fontWeight: 'bold',
                    paddingTop: 35,
                    paddingBottom: 20
                }}>Personal Info</Text>
                <View style={{
                    display: 'flex',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    paddingVertical: 40,
                    paddingHorizontal: 30,
                }}>
                    <View>
                        <Text style={{
                            color: 'black',
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
                marginTop: 15,
                marginHorizontal: 30
            }}
                android_ripple={{ color: "white" }}>
                <Text style={{
                    color: 'white',
                    fontSize: 15,
                    textAlign: 'center'
                }}>Pay your order</Text>
            </Pressable>
        </>
    )
}

export default PersonalInfo