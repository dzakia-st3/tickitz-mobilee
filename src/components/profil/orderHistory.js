import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, ScrollView, View, Pressable, Image } from 'react-native'
import Line from '../../../helper/line'

const orderHistory = () => {
    const navigation = useNavigation()
    return (
        <ScrollView style={{
            marginHorizontal: 35,
        }}>
            <View>
                <View style={{
                    display: 'flex',
                    backgroundColor: 'white',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    alignItems: 'center',
                    marginTop: 30,
                    padding: 35
                }}>
                    <Image
                        source={require('../../../img/hiflix.png')}
                        style={{
                            width: 150,
                            height: 35,
                            marginLeft: 0,
                            resizeMode: 'contain',
                        }} />
                    <Text style={{
                        fontSize: 15,
                        color: 'grey',
                        paddingVertical: 20
                    }}>Tuesday, 07 July 2020 - 04:30pm</Text>
                    <Text style={{
                        fontSize: 25
                    }}>Spider-Man: Homecoming</Text>
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
                        backgroundColor: '#00BA88',
                        borderStyle: 'solid',
                        paddingVertical: 15,
                    }}
                        onPress={() => navigation.navigate('Ticket')}
                        android_ripple={{ color: "white" }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 15,
                            textAlign: 'center'
                        }}>Ticket in active</Text>
                    </Pressable>
                </View>
            </View>
            <View>
                <View style={{
                    display: 'flex',
                    backgroundColor: 'white',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    marginTop: 30,
                    alignItems: 'center',
                    padding: 35
                }}>
                    <Image
                        source={require('../../../img/hiflix.png')}
                        style={{
                            width: 150,
                            height: 35,
                            marginLeft: 0,
                            resizeMode: 'contain',
                        }} />
                    <Text style={{
                        fontSize: 15,
                        color: 'grey',
                        paddingVertical: 20
                    }}>Monday, 14 June 2020 - 02:00pm</Text>
                    <Text style={{
                        fontSize: 25
                    }}>Avengers: End Game</Text>
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
                        backgroundColor: '#6E7191',
                        borderStyle: 'solid',
                        paddingVertical: 15,
                    }}
                        android_ripple={{ color: "white" }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 15,
                            textAlign: 'center'
                        }}>Ticket used</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default orderHistory