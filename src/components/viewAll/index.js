import axios from "axios";
import React, { useState, useEffect } from "react";
import { Text, TextInput, View, Image, ScrollView, Pressable, RefreshControl } from "react-native";
import commonStyle from '../../../helper/commonStyle'
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import {URL_BE} from "react-native-dotenv";

const ViewAll = () => {
    const [loading, setLoading] = useState(false)
    const [refetch, setRefetch] = useState(false)

    
    const [query, setQuery] = useState ({
        title: '',
        page: 1,
        limit: 99
    })

    const onInputChange = (value, input) => {
        setQuery({
            ...query,
            [input]: value,
        })
    }

    const [dataMovie, setDataMovie] = useState({
        loading: false,
        "data": {
            "result": [],
            "page": 0,
            "limit": 0,
            "totalRows": 0,
            "totalPage": 0,
        }
    })

    useEffect(() => {
        const {title, page, limit} = query
        console.log(title)
        setDataMovie((prevState) => ({
            ...prevState,
            loading: true
        }))
        setLoading(true);
        axios.get(`${URL_BE}/api/v1/movie?${title ? `title=${title}`:``}${page ? `&page=${page}`:``}${limit ? `&limit=${limit}`:``}`).then((res) => {
            setDataMovie(res.data.data)
            console.log(data, 'cek data movie')
        }).catch((err) => {
            console.log(err, 'error')
        }).finally(() => {
            setLoading(false);
        })
    }, [refetch, query])

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'A-Z', value: 'asc' },
        { label: 'Z-A', value: 'desc' }
    ]);

    return (
        <ScrollView>
            <View>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    listMode="SCROLLVIEW"
                />
                <TextInput
                    value={query.title}
                    onChangeText={value => onInputChange(value, 'title')}
                    placeholder="Search Movie Name..."
                    style={{
                        paddingVertical: 7,
                        paddingLeft: 10,
                        borderStyle: 'solid',
                        borderColor: 'black',
                        borderWidth: 1,
                        marginVertical: 10,
                        borderRadius: 4
                    }} />
            </View>
            <FlatList
                style={[commonStyle.flex, commonStyle.flexRow, {
                    marginHorizontal: 11,
                }]}
                refreshControl={<RefreshControl refreshing={loading}
                    onRefresh={() => { setRefetch(!refetch) }} />}
                data={dataMovie.result}
                numColumns={2}
                // listKey={(item) => item.id.toStirng()}
                // keyExtractor={(result) => result.id.toStirng()}
                ItemSeparatorComponent={() => <View style={[commonStyle.flex, commonStyle.flexRow, {
                    marginHorizontal: 11,
                    justifyContent: 'space-between',
                    flexWrap: 'wrap'
                }]} />}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            height: 240,
                            width: 180,
                            paddingHorizontal: 20,
                            paddingVertical: 18,
                            marginRight: 7,
                            borderRadius: 7,
                            borderColor: 'white',
                            borderWidth: 2,
                            borderStyle: 'solid',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 11,
                        }}>
                            <Image style={{ height: 200, width: 150, resizeMode: 'contain' }} source={{ uri: `${URL_BE}/uploads/` + item.image }} />
                        </View>
                    )
                }}
            />
            {/* <View style={[commonStyle.flex, commonStyle.flexRow, {
                marginHorizontal: 11,
                justifyContent: 'space-between',
                flexWrap: 'wrap'
            }]}>
                <View style={{
                    height: 250,
                    width: 180,
                    paddingHorizontal: 20,
                    paddingVertical: 18,
                    borderRadius: 7,
                    borderColor: 'white',
                    borderWidth: 2,
                    borderStyle: 'solid',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 11,
                }}>
                    <Image style={{
                        height: 220,
                        width: 150, resizeMode: 'contain'
                    }} source={require('../../../img/blackwidow.png')} />
                </View>
                <View style={{
                    height: 250,
                    width: 180,
                    paddingHorizontal: 20,
                    paddingVertical: 18,
                    borderRadius: 7,
                    borderColor: 'white',
                    borderWidth: 2,
                    borderStyle: 'solid',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 11,
                }}>
                    <Image style={{
                        height: 220,
                        width: 150, resizeMode: 'contain'
                    }} source={require('../../../img/blackwidow.png')} />
                </View>
                <View style={{
                    height: 250,
                    width: 180,
                    paddingHorizontal: 20,
                    paddingVertical: 18,
                    borderRadius: 7,
                    borderColor: 'white',
                    borderWidth: 2,
                    borderStyle: 'solid',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 11,
                }}>
                    <Image style={{
                        height: 220,
                        width: 150, resizeMode: 'contain'
                    }} source={require('../../../img/blackwidow.png')} />
                </View>
                <View style={{
                    height: 250,
                    width: 180,
                    paddingHorizontal: 20,
                    paddingVertical: 18,
                    borderRadius: 7,
                    borderColor: 'white',
                    borderWidth: 2,
                    borderStyle: 'solid',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 11,
                }}>
                    <Image style={{
                        height: 220,
                        width: 150, resizeMode: 'contain'
                    }} source={require('../../../img/blackwidow.png')} />
                </View>
                <View style={{
                    height: 250,
                    width: 180,
                    paddingHorizontal: 20,
                    paddingVertical: 18,
                    borderRadius: 7,
                    borderColor: 'white',
                    borderWidth: 2,
                    borderStyle: 'solid',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 11,
                }}>
                    <Image style={{
                        height: 220,
                        width: 150, resizeMode: 'contain'
                    }} source={require('../../../img/blackwidow.png')} />
                </View>
            </View> */}

            {/* <FlatList
                refreshControl={<RefreshControl refreshing={loading}
                    onRefresh={() => { setRefetch(!refetch) }} />}
                data={dataMovie.result}
                onEndReachedThreshold={0.5}
                onEndReached={() => setPage(page + 1)}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable
                            onPress={() => alert('yeayyy!!')}
                            style={{
                                borderRadius: 10,
                                marginVertical: 7,
                                paddingHorizontal: 15,
                                backgroundColor: '#5F2EEA',
                                borderRadius: 8,
                            }}
                            android_ripple={{ color: "#5F2EEA" }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 15,
                                paddingVertical: 8,
                                textAlign: 'center'
                            }}>1</Text>
                        </Pressable>
                    )
                }}
            /> */}
            {/* <View style={[
                commonStyle.flex, commonStyle.flexRow, {
                    justifyContent: 'space-evenly',
                    marginHorizontal: 50,
                    marginVertical: 20,
                }
            ]}> */}
                {/* <Pressable 
                onPress={() => alert('yeayyy!!')} 
                style = {{ 
                    borderRadius: 10, 
                    marginVertical: 7,
                    paddingHorizontal: 15, 
                    backgroundColor: '#5F2EEA',
                    borderRadius: 8, }} 
                    android_ripple={{ color: "#5F2EEA" }}>
                    <Text style = {{ 
                        color: 'white', 
                        fontSize: 15, 
                        paddingVertical: 8,
                        textAlign: 'center' 
                    }}>1</Text>
                </Pressable>
                <Pressable 
                onPress={() => alert('yeayyy!!')} 
                style = {{ 
                    borderRadius: 10, 
                    marginVertical: 7,
                    paddingHorizontal: 15, 
                    backgroundColor: '#5F2EEA',
                    borderRadius: 8, }} 
                    android_ripple={{ color: "#5F2EEA" }}>
                    <Text style = {{ 
                        color: 'white', 
                        fontSize: 15, 
                        paddingVertical: 8,
                        textAlign: 'center' 
                    }}>2</Text>
                </Pressable>
                <Pressable 
                onPress={() => alert('yeayyy!!')} 
                style = {{ 
                    borderRadius: 10, 
                    marginVertical: 7,
                    paddingHorizontal: 15, 
                    backgroundColor: '#5F2EEA',
                    borderRadius: 8, }} 
                    android_ripple={{ color: "#5F2EEA" }}>
                    <Text style = {{ 
                        color: 'white', 
                        fontSize: 15, 
                        paddingVertical: 8,
                        textAlign: 'center' 
                    }}>3</Text>
                </Pressable> */}
            {/* </View> */}
        </ScrollView>
    )
}

export default ViewAll
