import React, { useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import Account from './accountSetting'
import History from './orderHistory'
import styles from '../../../helper/commonStyle'

const profilOrder = () => {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <ScrollView>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'white'
            }}>
                <Pressable style={[toggleState === 1 ? styles.btnTabActive : styles.btnTab, {
                    width: '50%',
                    paddingVertical: 20
                }]}
                    android_ripple={{ color: "#5F2EEA" }}
                    onPress={() => toggleTab(1)}
                >
                    <View><Text style={{
                        textAlign: 'center',
                        fontSize: 17
                    }}>Details Account</Text></View>
                </Pressable>
                <Pressable style={[toggleState === 2 ? styles.btnTabActive : styles.btnTab, {
                    width: '50%',
                    paddingVertical: 20
                }]}
                    android_ripple={{ color: "#5F2EEA" }}
                    onPress={() => toggleTab(2)}
                >
                    <View><Text style={{
                        textAlign: 'center',
                        fontSize: 17
                    }}>Order History</Text></View>
                </Pressable>
            </View>
            <View>
                <View style = {[toggleState === 1 ? styles.activeContent : styles.cardHistory]}>
                    <Account/>
                </View>
                <View style = {[toggleState === 2 ? styles.activeContent : styles.cardHistory]}>
                    <History/>
                </View>
            </View>
        </ScrollView>
    )
}

export default profilOrder