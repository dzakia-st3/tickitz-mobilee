import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import commonStyle from '../../../helper/commonStyle'

const paymentMethod = () => {
    return (
        <>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                justifyContent: 'space-between',
                backgroundColor: 'white',
                paddingHorizontal: 25,
                paddingVertical: 20
            }}>
                <Text style={{
                    fontSize: 20,
                    fontStyle: 'bold',
                    color: 'grey'
                }}>Total Payment</Text>
                <Text style={{
                    fontSize: 20,
                    fontStyle: 'bold',
                    color: 'black'
                }}>$30.00</Text>
            </View>
            <View style={{
                marginVertical: 10,
                marginHorizontal: 30,
            }}>
                <Text style={{
                    fontSize: 23,
                    fontWeight: 'bold',
                    paddingTop: 35,
                    paddingBottom: 20
                }}>Payment Method</Text>
                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 35,
                }}>
                    <View style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}>
                        <Pressable style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 2,
                            borderColor: '#E6E6E6',
                            borderRadius: 4,
                            width: 70,
                            height: 40,
                        }}
                            android_ripple={{ color: 'rgba(222, 222, 222, 1)' }}>
                            <Image style={{
                                resizeMode: 'contain',
                                width: 50,
                                height: 25
                            }} source={require('../../../img/GPay.jpg')} />
                        </Pressable>
                        <Pressable style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 2,
                            borderColor: '#E6E6E6',
                            borderRadius: 4,
                            width: 70,
                            height: 40,
                        }}
                            android_ripple={{ color: 'rgba(222, 222, 222, 1)' }}>
                            <Image style={{
                                resizeMode: 'contain',
                                width: 50,
                                height: 25
                            }} source={require('../../../img/VISA.jpg')} />
                        </Pressable>
                        <Pressable style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 2,
                            borderColor: '#E6E6E6',
                            borderRadius: 4,
                            width: 70,
                            height: 40,
                        }}
                            android_ripple={{ color: 'rgba(222, 222, 222, 1)' }}>
                            <Image style={{
                                resizeMode: 'contain',
                                width: 50,
                                height: 25
                            }} source={require('../../../img/gopay.jpg')} />
                        </Pressable>
                        <Pressable style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 2,
                            borderColor: '#E6E6E6',
                            borderRadius: 4,
                            marginTop: 20,
                            width: 70,
                            height: 40,
                        }}
                            android_ripple={{ color: 'rgba(222, 222, 222, 1)' }}>
                            <Image style={{
                                resizeMode: 'contain',
                                width: 50,
                                height: 25
                            }} source={require('../../../img/paypal.jpg')} />
                        </Pressable>
                        <Pressable style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 2,
                            borderColor: '#E6E6E6',
                            borderRadius: 4,
                            marginTop: 20,
                            width: 70,
                            height: 40,
                        }}
                            android_ripple={{ color: 'rgba(222, 222, 222, 1)' }}>
                            <Image style={{
                                resizeMode: 'contain',
                                width: 50,
                                height: 25
                            }} source={require('../../../img/OVO.jpg')} />
                        </Pressable>
                        <Pressable style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 2,
                            borderColor: '#E6E6E6',
                            borderRadius: 4,
                            marginTop: 20,
                            width: 70,
                            height: 40,
                        }}
                            android_ripple={{ color: 'rgba(222, 222, 222, 1)' }}>
                            <Image style={{
                                resizeMode: 'contain',
                                width: 50,
                                height: 25
                            }} source={require('../../../img/dana.jpg')} />
                        </Pressable>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            backgroundColor: '#E6E6E6',
                            height: 2,
                            width: 110,
                            marginHorizontal: 10
                        }}></View>
                        <Text style={{
                            color: 'grey',
                            marginVertical: 20
                        }}>or</Text>
                        <View style={{
                            backgroundColor: '#E6E6E6',
                            height: 2,
                            width: 110,
                            marginHorizontal: 10
                        }}></View>
                    </View>
                    <View style={[commonStyle.flex, commonStyle.flexRow, commonStyle.flexCenter, { paddingVertical: 7 }]}>
                        <Text style={{ color: 'grey' }}>Pay via cash.</Text>
                        <Pressable>
                            <Text
                                style=
                                {[commonStyle.textPurple]}
                                onPress={() => navigation.navigate('#')}> See how it work</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </>
    )
}

export default paymentMethod