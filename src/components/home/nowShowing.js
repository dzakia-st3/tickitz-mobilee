import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, Pressable, RefreshControl, ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";
import commonStyle from '../../../helper/commonStyle'
import { FlatList } from "react-native-gesture-handler";
import {URL_BE} from "react-native-dotenv";


const NowShowing = () => {
    const [loading, setLoading] = useState(false)
    const [refetch, setRefetch] = useState(false)
    const navigation = useNavigation();

    const [dataMovie, setDataMovie] = useState({
        "data": {
            "result": [],
            "page": 0,
            "limit": 5,
            "totalRows": 0,
            "totalPage": 0,
        }
    })

    useEffect(() => {
        setLoading(true);
        axios.get(`${URL_BE}/api/v1/movie`).then((res) => {
            setDataMovie(res.data.data)
        }).catch((err) => {
            console.log(err, 'error')
        }).finally(() => {
            setLoading(false);
        })
    }, [refetch])

    return (
        <View style={{
            marginBottom: 20,
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
                    }]}>Now Showing</Text>
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
                style={{ paddingHorizontal: 10 }}
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
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            height: 240,
                            width: 180,
                            paddingHorizontal: 10,
                            paddingVertical: 18,
                            borderRadius: 7,
                            borderColor: 'white',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            alignItems: 'center',
                            marginRight: 13,
                        }}>
                            <Image style={{ height: 200, width: 200, resizeMode: 'contain' }} source={{ uri: `${URL_BE}/uploads/` + item.image }} />
                        </View>
                    )
                }}
            />

            {/* <ScrollView horizontal={true} >
                <View style={[commonStyle.flex, commonStyle.flexRow, {
                    marginHorizontal: 10,
                    marginVertical: 10,
                }]}>
                    <View style={{
                        height: 280,
                        width: 200,
                        paddingHorizontal: 20,
                        paddingVertical: 18,
                        borderRadius: 7,
                        borderColor: 'white',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        alignItems: 'center',
                        marginRight: 13,
                    }}>
                        <Image style={{}} source={require('../../../img/blackwidow.png')} />
                    </View>
                    <View style={{
                        height: 280,
                        width: 200,
                        paddingHorizontal: 20,
                        paddingVertical: 18,
                        borderRadius: 7,
                        borderColor: 'white',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        alignItems: 'center',
                        marginRight: 13,
                    }}>
                        <Image style={{}} source={require('../../../img/blackwidow.png')} />
                    </View>
                    <View style={{
                        height: 280,
                        width: 200,
                        paddingHorizontal: 20,
                        paddingVertical: 18,
                        borderRadius: 7,
                        borderColor: 'white',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        alignItems: 'center',
                    }}>
                        <Image style={{}} source={require('../../../img/blackwidow.png')} />
                    </View>
                </View>
            </ScrollView> */}
        </View>
    )
}

export default NowShowing