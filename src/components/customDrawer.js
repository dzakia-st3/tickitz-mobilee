import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { ImageBackground } from "react-native";
import commonStyle from "../../helper/commonStyle";
import { AuthLogout } from "../redux/actions/auth";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux'


const CustomDrawer = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    return (
        <DrawerContentScrollView {...props}
            contentContainerStyle={{
                backgroundColor: 'white',
            }}>
            <View style={[commonStyle.flex, commonStyle.flexRow, commonStyle.itemsCenter, {
                paddingVertical: 40,
                paddingHorizontal: 20,
                backgroundColor: '#5F2EEA',
                marginBottom: 30
            }]}>
                <Image source={require('../../img/defaultProfile.jpg')} style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40
                }} />
                <View style = {{
                    marginHorizontal : 20,
                }}>
                    <Text style = {{
                        color: 'white',
                        fontSize: 17,
                        paddingBottom: 5
                    }}>Syalalala</Text>
                    <Text style = {{
                        color: 'white',
                        fontSize: 13,
                        paddingBottom: 5
                    }}>Syalalala@gmail.com</Text>
                    <Text style = {{
                        color: 'white',
                        fontSize: 13,
                        paddingBottom: 5
                    }}>Member</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
            <Pressable
            onPress={() => {
                dispatch(AuthLogout())
                alert('Logout success')
                navigation.navigate('Home')
            }}
            style={{
                borderRadius: 10,
                marginVertical: 5,
                marginHorizontal: 20,
                backgroundColor: '#5F2EEA',
                borderStyle: 'solid',
                borderRadius: 4,
            }}
            android_ripple={{ color: "white" }}
            ><Text style={{
                color: 'white',
                fontSize: 15,
                fontStyle: 'bold',
                paddingVertical: 8, paddingHorizontal: 25,
                textAlign: 'center'
            }}>Log Out</Text></Pressable>
        </DrawerContentScrollView>
    )
}

export default CustomDrawer

