import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Image, Pressable, RefreshControl, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";
import {URL_BE} from "react-native-dotenv";

const Schedule = ({ id }) => {
    const idMovie = id
    const [loading, setLoading] = useState(false)
    const [refetch, setRefetch] = useState(false)
    const navigation = useNavigation();

    const [dataSchedule, setDataSchedule] = useState({
        "data": []
    })

    useEffect(() => {
        axios.get(`${URL_BE}/api/v1/schedule/${idMovie}`).then((res) => {
            setDataSchedule(res.data)
        }).catch((err) => {
            console.log(err, 'error')
        }).finally(() => {
            console.log('finish')
        })
    }, [dataSchedule])

    var Schedule = dataSchedule


    return (
        <ScrollView>
            <View>
                <Text>Ini Search</Text>

                <FlatList
                    style={{
                        marginBottom: 20
                    }}
                    refreshControl={<RefreshControl refreshing={loading} onRefresh={() => { setRefetch(!refetch) }} />}

                    data={dataSchedule.data}
                    ItemSeparatorComponent={() => <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: 12,
                        marginBottom: 1,
                        shadowColor: 'black',
                    }} />}

                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                backgroundColor: 'white',
                                marginHorizontal: '4%',
                                marginVertical: '7%',
                                borderRadius: 4,
                                paddingVertical: 20
                            }}>
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
                                        source={{ uri: `${URL_BE}/uploads/` + `${item.logo_cinema}` }}/>
                                    <Text style={{
                                        paddingBottom: 35,
                                        fontSize: 18,
                                        marginHorizontal: 10,
                                    }}>{item.addres} {item.place}</Text>
                                </View>
                                <View style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingHorizontal: 10,
                                    paddingBottom: 30,
                                }}>
                                    <View style={{
                                        borderColor: '#8692A6',
                                        borderWidth: 1,
                                        marginBottom: 10,
                                        height: 30,
                                        width: 80,
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        borderRadius: 4,
                                    }}>
                                        <Text>08.30am</Text>
                                    </View>
                                    <View style={{
                                        borderColor: '#8692A6',
                                        borderWidth: 1,
                                        marginBottom: 10,
                                        height: 30,
                                        width: 80,
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        borderRadius: 4,
                                    }}>
                                        <Text>08.30am</Text>
                                    </View>
                                    <View style={{
                                        borderColor: '#8692A6',
                                        borderWidth: 1,
                                        marginBottom: 10,
                                        height: 30,
                                        width: 80,
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        borderRadius: 4,
                                    }}>
                                        <Text>08.30am</Text>
                                    </View>
                                    <View style={{
                                        borderColor: '#8692A6',
                                        borderWidth: 1,
                                        marginBottom: 10,
                                        height: 30,
                                        width: 80,
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        borderRadius: 4,
                                    }}>
                                        <Text>08.30am</Text>
                                    </View>
                                    <View style={{
                                        borderColor: '#8692A6',
                                        borderWidth: 1,
                                        marginBottom: 10,
                                        height: 30,
                                        width: 80,
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        borderRadius: 4,
                                    }}>
                                        <Text>08.30am</Text>
                                    </View>
                                    <View style={{
                                        borderColor: '#8692A6',
                                        borderWidth: 1,
                                        marginBottom: 10,
                                        height: 30,
                                        width: 80,
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        borderRadius: 4,
                                    }}>
                                        <Text>08.30am</Text>
                                    </View>
                                    <View style={{
                                        borderColor: '#8692A6',
                                        borderWidth: 1,
                                        marginBottom: 10,
                                        height: 30,
                                        width: 80,
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        borderRadius: 4,
                                    }}>
                                        <Text>08.30am</Text>
                                    </View>
                                    <View style={{
                                        borderColor: '#8692A6',
                                        borderWidth: 1,
                                        marginBottom: 10,
                                        height: 30,
                                        width: 80,
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        borderRadius: 4,
                                    }}>
                                        <Text>08.30am</Text>
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
                                    }}>Price</Text>
                                    <Text style={{
                                        fontSize: 20,
                                        fontStyle: 'bold',
                                        color: 'black'
                                    }}>{item.price}/seat</Text>
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
                                    onPress={() => navigation.navigate('Order')}
                                >
                                    <Text style={{
                                        color: 'white',
                                        textAlign: 'center',
                                        paddingVertical: 12,
                                    }}
                                    >Book now</Text>
                                </Pressable>
                            </View>
                        )
                    }}
                >
                </FlatList>
                {/* <View style={{
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
                            paddingBottom: 35,
                            fontSize: 18,
                            marginHorizontal: 10,
                        }}>Whatever street No.12. South Purwokerto</Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                        paddingBottom: 30,
                    }}>
                        <View style={{
                            borderColor: '#8692A6',
                            borderWidth: 1,
                            marginBottom: 10,
                            height: 30,
                            width: 80,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            borderRadius: 4,
                        }}>
                            <Text>08.30am</Text>
                        </View>
                        <View style={{
                            borderColor: '#8692A6',
                            borderWidth: 1,
                            marginBottom: 10,
                            height: 30,
                            width: 80,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            borderRadius: 4,
                        }}>
                            <Text>08.30am</Text>
                        </View>
                        <View style={{
                            borderColor: '#8692A6',
                            borderWidth: 1,
                            marginBottom: 10,
                            height: 30,
                            width: 80,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            borderRadius: 4,
                        }}>
                            <Text>08.30am</Text>
                        </View>
                        <View style={{
                            borderColor: '#8692A6',
                            borderWidth: 1,
                            marginBottom: 10,
                            height: 30,
                            width: 80,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            borderRadius: 4,
                        }}>
                            <Text>08.30am</Text>
                        </View>
                        <View style={{
                            borderColor: '#8692A6',
                            borderWidth: 1,
                            marginBottom: 10,
                            height: 30,
                            width: 80,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            borderRadius: 4,
                        }}>
                            <Text>08.30am</Text>
                        </View>
                        <View style={{
                            borderColor: '#8692A6',
                            borderWidth: 1,
                            marginBottom: 10,
                            height: 30,
                            width: 80,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            borderRadius: 4,
                        }}>
                            <Text>08.30am</Text>
                        </View>
                        <View style={{
                            borderColor: '#8692A6',
                            borderWidth: 1,
                            marginBottom: 10,
                            height: 30,
                            width: 80,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            borderRadius: 4,
                        }}>
                            <Text>08.30am</Text>
                        </View>
                        <View style={{
                            borderColor: '#8692A6',
                            borderWidth: 1,
                            marginBottom: 10,
                            height: 30,
                            width: 80,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            borderRadius: 4,
                        }}>
                            <Text>08.30am</Text>
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
                        }}>Price</Text>
                        <Text style={{
                            fontSize: 20,
                            fontStyle: 'bold',
                            color: 'black'
                        }}>$10.00/seat</Text>
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
                        >Book now</Text>
                    </Pressable> */}

            </View >
        </ScrollView >
    )
}

export default Schedule