import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { Image, ScrollView, Text, View, RefreshControl } from "react-native";
import commonStyle from "../../../helper/commonStyle";
import { useNavigation } from "@react-navigation/native";
import {URL_BE} from "react-native-dotenv";
import { FlatList } from "react-native-gesture-handler";

const DetailMovie = ({ id }) => {
    const idMovie = id
    const [loading, setLoading] = useState(false)
    const [refetch, setRefetch] = useState(false)
    const navigation = useNavigation();

    const [dataMovie, setDataMovie] = useState({
        "data": []
    })

    useEffect(() => {
        axios.get(`${URL_BE}/api/v1/movie/${idMovie}`).then((res) => {
            setDataMovie(res.data)
        }).catch((err) => {
            console.log(err, 'error')
        }).finally(() => {
            console.log('finish')
        })
    }, [dataMovie])

    var movie = dataMovie?.data[0]

    return (
        <>
            <View
                style={{
                    backgroundColor: 'white',
                    paddingVertical: 30
                }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#8692A6',
                        height: 250,
                        width: 180,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image source=
                            // {{uri: 'http://192.168.43.192:3000/uploads/' + movie.image }} 
                            // {{uri: 'http://192.168.43.192:3000/uploads/' + '1657526402520-138286424-spiderman-homeComing.png' }} 
                            {{ uri: `${URL_BE}/uploads/` + dataMovie?.data[0]?.image }}

                            style={{
                                height: 220,
                                width: 200,
                                resizeMode: 'contain'
                            }} />
                    </View>
                    <Text style={{
                        fontSize: 30,
                        fontStyle: 'bold',
                        color: 'black',
                        marginTop: 20,
                    }}>
                        {/* spiderman  */}
                        {/* {movie.title} */}
                        {dataMovie?.data[0]?.title}
                    </Text>
                    <Text style={{
                        fontSize: 23,
                        color: 'rgba(78, 75, 102, 1)',
                        marginVertical: 15,
                    }}>
                        {/* Adventure, Action, Sci-Fi */}
                        {/* {movie.categories} */}
                        {dataMovie?.data[0]?.categories}
                    </Text>
                    <View style={{
                        width: '85%'
                    }}>
                        <View style={[commonStyle.flex, commonStyle.flexRow, { justifyContent: 'center', }]}>
                            <View style={{
                                width: '50%'
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: '#8692A6'
                                }}>Release Date</Text>
                                <Text style={{
                                    fontSize: 20,
                                    color: 'black',
                                    paddingTop: 8,
                                }}>
                                    {/* 2017-10-17 */}
                                    {/* {movie.release_date.slice(0,10)} */}
                                    {dataMovie?.data[0]?.release_date.slice(0, 10)}
                                </Text>
                            </View>
                            <View style={{ width: '50%' }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: '#8692A6'
                                }}>Casts</Text>
                                <View>
                                    <Text style={{
                                        fontSize: 20,
                                        color: 'black',
                                        paddingTop: 8,
                                    }}>
                                        {/* Tom Holland, Michael Keaton, Robert Downey Jr. */}
                                        {/* {movie.cast} */}
                                        {dataMovie?.data[0]?.cast}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={[commonStyle.flex, commonStyle.flexRow, { marginTop: 18 }]}>
                            <View style={{
                                width: '50%'
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: '#8692A6'
                                }}>Duration</Text>
                                <Text style={{
                                    fontSize: 20,
                                    color: 'black',
                                    paddingTop: 8,
                                }}>
                                    {/* 2 hours 13 minutes */}
                                    {`${dataMovie?.data[0]?.duration_hour} hr ${dataMovie?.data[0]?.duration_minute} mnt`}
                                </Text>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 18,
                                    color: '#8692A6'
                                }}>Directed by</Text>
                                <Text style={{
                                    fontSize: 20,
                                    color: 'black',
                                    paddingTop: 8,
                                }}>
                                    {/* Jon Watss */}
                                    {dataMovie?.data[0]?.directed_by}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    width: '85%',
                    marginHorizontal: 28,
                    marginVertical: 30
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: 'black',
                        lineHeight: 25
                    }}>
                        {/* Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. */}
                        {dataMovie?.data[0]?.synopsis}
                    </Text>
                </View>
            </View>
        </>

    )
}

export default DetailMovie