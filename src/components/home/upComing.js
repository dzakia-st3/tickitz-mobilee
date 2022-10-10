import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, Pressable, RefreshControl } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import commonStyle from '../../../helper/commonStyle'
import { FlatList } from "react-native-gesture-handler";
import {URL_BE} from "react-native-dotenv";

const UpComing = () => {
    const [loading, setLoading] = useState(false)
    const [refetch, setRefetch] = useState(false)
    const navigation = useNavigation();

    const [dataMovie, setDataMovie] = useState({
        "data" : {
            "result": [],
            "page": 0,
            "limit": 0,
            "totalRows": 0,
            "totalPage": 0,
        }
    })

    useEffect(() => {
        setLoading(true);
        axios.get(`${URL_BE}/api/v1/movie`).then ((res) => {
            setDataMovie(res.data.data)
        }).catch((err) => {
            console.log(err, 'error')
        }).finally(() => {
            setLoading(false)
        })
    }, [refetch])

    return (
        <View style={{
            backgroundColor: 'white'

        }}>
            <View style={
                [commonStyle.flex, commonStyle.flexRow, commonStyle.flexBetween, {
                    paddingHorizontal: 25,
                    paddingVertical: 20,
                }]}>
                <Text style={
                    [commonStyle.textPurple, {
                        fontSize: 25,
                        fontStyle: 'bold'
                    }]}>Up Coming</Text>
                <Pressable onPress={() => navigation.navigate('List Movie')}>
                    <Text style={
                        [commonStyle.textPurple, {
                            fontSize: 20,
                            fontStyle: 'bold'
                        }]}
                    >view all</Text>
                </Pressable>
            </View>

            <FlatList
                style = {{paddingHorizontal: 10}}
                horizontal={true}
                refreshControl={<RefreshControl refreshing={loading}
                    onRefresh={() => { setRefetch(!refetch) }} />}
                data={dataMovie.result}
                // numColumns={5}
                // listKey={(item) => item.id.toStirng()}
                // keyExtractor={(result) => result.id.toStirng()}
                ItemSeparatorComponent={() => <View style={[commonStyle.flex, commonStyle.flexRow, {
                    marginHorizontal: 3,
                    marginVertical: 10,
                }]} />}
                renderItem={({ item, index}) => {
                    return (
                        <View style={[commonStyle.flex, commonStyle.flexColumn, commonStyle.itemsCenter, commonStyle.flexCenter, {
                            height: 340,
                            width: 180,
                            paddingHorizontal: 10,
                            paddingVertical: 18,
                            borderRadius: 7,
                            borderColor: 'rgba(222, 222, 222, 1)',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            alignItems: 'center',
                            marginRight: 13,
                        }]}>
                            <Image 
                            style={{
                                height: 200, 
                                width: 200, 
                                resizeMode: 'contain'
                                }} 
                            source={{uri: `${URL_BE}/uploads/` + item.image }} />
                            <Text style = {{ 
                                marginVertical: 5,
                                color: 'black',
                                fontSize: 15,
                                paddingTop: 10
                                 }}>{item.title}</Text>
                            <Text style = {{
                                color: 'black',
                                fontSize: 12,
                                paddingVertical: 10
                            }}>{item.categories}</Text>
                            <Pressable 
                            onPress={() => {
                                navigation.navigate("Detail", {id:item.id})
                            }} 
                           
                            style={{ 
                                borderRadius: 10, 
                                marginVertical: 5, 
                                borderColor: '#5F2EEA', 
                                borderWidth: 1, 
                                borderStyle: 'solid', 
                                borderRadius: 8, 
                                }} 
                            android_ripple={{ color: "#5F2EEA" }}>
                                <Text style={{ 
                                    color: '#5F2EEA', 
                                    fontSize: 15, 
                                    paddingVertical: 8, 
                                    paddingHorizontal: 25, 
                                }}>Details</Text>
                            </Pressable>
                        </View>
                    )
                }}
            />

            {/* <ScrollView horizontal={true}>
                <View style={[commonStyle.flex, commonStyle.flexRow, {
                    marginHorizontal: 10,
                    marginVertical: 10,
                    paddingBottom: 15,
                }]}>
                    <View style={[commonStyle.flex, commonStyle.flexColumn, commonStyle.itemsCenter, commonStyle.flexCenter, {
                        height: 370,
                        width: 200,
                        paddingHorizontal: 20,
                        paddingVertical: 18,
                        borderRadius: 7,
                        borderColor: 'rgba(222, 222, 222, 1)',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        alignItems: 'center',
                        marginRight: 13,
                    }]}>
                        <Image style={{}} source={require('../../../img/blackwidow.png')} />
                        <Text style={{ marginVertical: 5 }}>Judul Film</Text>
                        <Text>Genre</Text>
                        <Pressable onPress={() => navigation.navigate('Detail')} style={{ borderRadius: 10, marginVertical: 5, borderColor: '#5F2EEA', borderWidth: 1, borderStyle: 'solid', borderRadius: 8, }} android_ripple={{ color: "#5F2EEA" }}>
                            <Text style={{ color: '#5F2EEA', fontSize: 15, paddingVertical: 8, paddingHorizontal: 25, }}>Details</Text>
                        </Pressable>

                    </View>
                    <View style={[commonStyle.flex, commonStyle.flexColumn, commonStyle.itemsCenter, commonStyle.flexCenter, {
                        height: 370,
                        width: 200,
                        paddingHorizontal: 20,
                        paddingVertical: 18,
                        borderRadius: 7,
                        borderColor: 'rgba(222, 222, 222, 1)',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        alignItems: 'center',
                        marginRight: 13,
                    }]}>
                        <Image style={{}} source={require('../../../img/blackwidow.png')} />
                        <Text style={{ marginVertical: 5 }}>Judul Film</Text>
                        <Text>Genre</Text>
                        <Pressable onPress={() => navigation.navigate('Detail')} style={{ borderRadius: 10, marginVertical: 5, borderColor: '#5F2EEA', borderWidth: 1, borderStyle: 'solid', borderRadius: 8, }} android_ripple={{ color: "#5F2EEA" }}>
                            <Text style={{ color: '#5F2EEA', fontSize: 15, paddingVertical: 8, paddingHorizontal: 25, }}>Details</Text>
                        </Pressable>

                    </View>
                    <View style={[commonStyle.flex, commonStyle.flexColumn, commonStyle.itemsCenter, commonStyle.flexCenter, {
                        height: 370,
                        width: 200,
                        paddingHorizontal: 20,
                        paddingVertical: 18,
                        borderRadius: 7,
                        borderColor: 'rgba(222, 222, 222, 1)',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        alignItems: 'center',
                        marginRight: 13,
                    }]}>
                        <Image style={{}} source={require('../../../img/blackwidow.png')} />
                        <Text style={{ marginVertical: 5 }}>Judul Film</Text>
                        <Text>Genre</Text>
                        <Pressable onPress={() => navigation.navigate('Detail')} style={{ borderRadius: 10, marginVertical: 5, borderColor: '#5F2EEA', borderWidth: 1, borderStyle: 'solid', borderRadius: 8, }} android_ripple={{ color: "#5F2EEA" }}>
                            <Text style={{ color: '#5F2EEA', fontSize: 15, paddingVertical: 8, paddingHorizontal: 25, }}>Details</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView> */}
        </View>
    )
}

export default UpComing