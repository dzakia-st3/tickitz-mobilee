import React from "react";
import { Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import commonStyle from "../../helper/commonStyle";


const Navbar = () => {
    const navigation = useNavigation()
    return (
        <View style={[commonStyle.flex, commonStyle.flexRow, commonStyle.flexBetween, commonStyle.itemsCenter, {
            paddingVertical: 20,
            paddingHorizontal: 25,
            backgroundColor: 'white',
            elevation: 12,
            marginBottom: 1,
        }]}>
            <Pressable onPress={() => navigation.navigate('Login')}>
                <Image source={require('../../img/TickitzMobile.png')}/>
            </Pressable>
            <Pressable onPress={navigation.openDrawer}>
                <Image source={require('../../img/list.png')} style={{width: 20, height: 20 , resizeMode:'contain'}}/>
            </Pressable>
        </View>
    )
}

export default Navbar