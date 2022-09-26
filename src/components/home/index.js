import React from 'react'
import Cover from './cover'
import NowShowing from './nowShowing'
import UpComing from './upComing'
import Join from './join'
import { ScrollView } from 'react-native'

const HomeComp = () => {
    return (
    <ScrollView>
        <Cover/>
        <NowShowing/>
        <UpComing/>
        <Join/>
    </ScrollView>
    )

}

export default HomeComp