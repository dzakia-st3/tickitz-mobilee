import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import commonStyle from "../../../helper/commonStyle";

const Join = () => {
    return (
        <View style={{
            backgroundColor: 'white'
        }}>
            <View style={{
                borderRadius: 6,
                marginHorizontal: 40,
                marginVertical: 25,
            }}>
                <View style = {{
                    shadowColor: 'rgb(186, 186, 186)',
                    shadowOpacity: 0.1,
                    elevation: 3,
                    marginLeft: 5,
                    marginRight: 5,
                }}>
                    <View style={{
                        alignItems: 'center',
                        marginTop: 20,
                    }}>
                        <Text style={{
                            color: 'rgba(78, 75, 102, 1)',
                            fontSize: 22,
                            marginVertical: 8,
                        }}>Be the vanguard of the</Text>
                        <Text style={[commonStyle.textPurple, {
                            fontSize: 50,
                            fontStyle: 'bold',
                            marginBottom: 30
                        }]}>Moviegoers</Text>
                    </View>
                    <View>
                        <TextInput
                            placeholder="Type your email"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            style={{
                                paddingVertical: 7,
                                paddingLeft: 10,
                                borderStyle: 'solid',
                                borderColor: 'rgba(222, 222, 222, 1)',
                                borderWidth: 1,
                                marginHorizontal: 30,
                                marginVertical: 15,
                                borderRadius: 4
                            }} />
                        <Pressable
                            onPress={() => alert('yeayy!')}
                            style={{
                                borderStyle: 'solid',
                                backgroundColor: '#5F2EEA',
                                borderRadius: 4,
                                marginHorizontal: 30,
                                alignItems: 'center'
                            }}
                            android_ripple={{ color: "#9570FE" }}>
                            <Text style={{
                                color: 'white',
                                paddingVertical: 8
                            }}>Join Now</Text>
                        </Pressable>
                    </View>
                    <View style={{ marginVertical: 30 }}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 15,
                            color: 'rgba(110, 113, 145, 1)',
                            lineHeight: 30
                        }}>{`By joining you as a Tickitz member, \n we will always send you the \n latest updates via email.`}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Join