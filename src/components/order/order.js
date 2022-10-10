import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, Image, Pressable, ScrollView } from "react-native";
import Line from "../../../helper/line"


const Order = () => {
    const navigation = useNavigation()
    return (
        <View style={{
            marginHorizontal: 35,
            marginVertical: 30,
        }}>
            <View style={{
                display: 'flex',
            }}>
                <Text style={{
                    fontSize: 23,
                    fontWeight: 'bold',
                    paddingBottom: 20
                }}>Order Info</Text>
                <View style={{
                    display: 'flex',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 35
                }}>
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Image
                            style={{
                                height: 50,
                                width: 100,
                                resizeMode: 'contain',
                            }}
                            source={require('../../../img/hiflix.png')} />
                        <Text style={{
                            fontSize: 30,
                            color: 'black',
                            paddingVertical: 10
                        }}>Hiflix Cinema</Text>
                        <Text style={{
                            paddingBottom: 35,
                            color: 'black',
                            fontSize: 17,
                            marginHorizontal: 10,
                        }}>Spider-Man Homecoming</Text>
                    </View>
                    <View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 20
                        }}>
                            <Text style={{
                                fontSize: 15,
                                color: 'grey'
                            }}>Tuesday, 07 Juli 2020</Text>
                            <Text style={{
                                fontSize: 15,
                                color: 'black'
                            }}>02.00 pm</Text>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 20
                        }}>
                            <Text style={{
                                fontSize: 15,
                                color: 'grey'
                            }}>One Ticket Price</Text>
                            <Text style={{
                                fontSize: 15,
                                color: 'black'
                            }}>$10</Text>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 20
                        }}>
                            <Text style={{
                                fontSize: 15,
                                color: 'grey'
                            }}>Seat Choosed</Text>
                            <Text style={{
                                fontSize: 15,
                                color: 'black'
                            }}>C3, C4, C5</Text>
                        </View>
                    </View>
                    <Line />
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 20,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontStyle: 'bold',
                            color: 'black'
                        }}>Total Payment</Text>
                        <Text style={{
                            fontSize: 20,
                            fontStyle: 'bold',
                            color: 'black'
                        }}>$30.00</Text>
                    </View>
                </View>
            </View>
            <Pressable style={{
                borderRadius: 5,
                backgroundColor: '#5F2EEA',
                borderStyle: 'solid',
                paddingVertical: 15,
                marginVertical: 20
            }}
                onPress={() => navigation.navigate('Payment')}
                android_ripple={{ color: "white" }}>
                <Text style={{
                    color: 'white',
                    fontSize: 15,
                    textAlign: 'center'
                }}>Checkout Now</Text>
            </Pressable>
        </View>
    )
}

export default Order