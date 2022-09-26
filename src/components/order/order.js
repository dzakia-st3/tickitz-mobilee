import React from "react";
import { Text, View, Image, Pressable } from "react-native";

const Order = () => {
    return (
        <>
            <View style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 12,
                marginBottom: 1,
                shadowColor: 'black',
            }}>
                <Image
                    style={{
                        height: 100,
                        width: 100,
                        resizeMode: 'contain'
                    }}
                    source={require('../../../img/hiflix.png')} />
                <Text style={{
                    fontSize: 30,
                    color: 'black',
                    paddingVertical: 15,
                }}>Hiflix Cinema</Text>
                <Text style={{
                    paddingBottom: 35,
                    color: 'black',
                    fontSize: 20,
                    marginHorizontal: 10,
                }}>Spider-Man Homecoming</Text>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingHorizontal: 10,
                paddingBottom: 30,
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '90%',
                    marginHorizontal: 10,
                    justifyContent: 'space-between',
                    marginBottom: 30
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: 'black'
                    }}>Tuesday, 07 Juli 2020</Text>
                    <Text style={{
                        fontSize: 18,
                        color: 'black'
                    }}>02.00 pm</Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '90%',
                    marginHorizontal: 10,
                    justifyContent: 'space-between',
                    marginBottom: 30
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: 'black'
                    }}>One Ticket Price</Text>
                    <Text style={{
                        fontSize: 18,
                        color: 'black'
                    }}>$10</Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '90%',
                    marginHorizontal: 10,
                    justifyContent: 'space-between',
                    marginBottom: 20
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: 'black'
                    }}>Seat Choosed</Text>
                    <Text style={{
                        fontSize: 18,
                        color: 'black'
                    }}>C3, C4, C5</Text>
                </View>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 18,
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
            <Pressable style={{
                marginHorizontal: 15,
                marginVertical: 15,
                borderRadius: 4,
                backgroundColor: '#5F2EEA',
                borderStyle: 'solid',
                height: 40,
            }}
                android_ripple={{ color: "white" }}
            >
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    paddingVertical: 12,
                }}
                >Checkout Now</Text>
            </Pressable>
        </>
    )
}

export default Order