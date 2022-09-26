import React from "react";
import { View, Image, Text } from "react-native";
import commonStyle from '../../../helper/commonStyle'

const Cover = () => {
    return (
        <View style = {{backgroundColor: 'white', paddingHorizontal: 25, paddingVertical: 20,}}>
        <View>
            <Text style = {{
                fontSize: 15,
            }}>Nearest Cinema, Newest Movie</Text>
            <Text style = {[commonStyle.textPurple, {
                fontSize: 40,
                fontStyle: 'bold',
                paddingVertical: 15,
            }]}>Find Out Now</Text>
        </View>
        <View style={
            [commonStyle.flex, commonStyle.flexRow,]}>
            <Image style={{ marginTop: 90, marginRight: 10 }} source={require('../../../img/spd.png')} />
            <Image style={{ marginTop: 60, marginRight: 10 }} source={require('../../../img/lion.png')} />
            <Image style={{ marginTop: 30 }} source={require('../../../img/wmn.png')} />
        </View>
        </View>
    )
}

export default Cover