import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

const profilOrder = () => {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Pressable style = {{
                width: '50%',
                paddingVertical: 20
            }}
            android_ripple={{ color: "#5F2EEA" }}
            >
                <View><Text style={{
                    textAlign: 'center',
                    fontSize: 17
                }}>Details Account</Text></View>
            </Pressable>
            <Pressable style = {{
                width: '50%',
                paddingVertical: 20,
            }}
            android_ripple={{ color: "#5F2EEA" }}
            >
                <View><Text style={{
                    textAlign: 'center',
                    fontSize: 17
                }}>Order History</Text></View>
            </Pressable>
        </View>
    )
}

export default profilOrder