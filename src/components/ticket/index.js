import React from 'react'
import { Text, Image, View, ScrollView, Pressable } from 'react-native'
import Line from '../../../helper/line'

const index = () => {
  return (
    <ScrollView style={{
      marginHorizontal: 35,
      marginVertical: 30,
    }}>
      <View>
        <View style={{
          display: 'flex',
          backgroundColor: 'white',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          padding: 35
        }}>
          <Image
            source={require('../../../img/QRCode.png')}
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
              resizeMode: 'cover'
            }} />
        </View>
        <Line/>
        <View style={{
          display: 'flex',
          backgroundColor: 'white',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingVertical: 30,
          paddingHorizontal: 35,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <View>
            <View style = {{
              height: 55,
              display: 'flex',
              justifyContent: 'space-between',
              marginVertical: 15
            }}>
              <Text style = {{
                fontSize: 15,
                color: 'grey'
              }}>Movie</Text>
              <Text style = {{
                fontSize: 20,
                fontWeight: 'bold'
              }}>Spider-Man: ..</Text>
            </View>
            <View style = {{
              height: 55,
              display: 'flex',
              justifyContent: 'space-between',
              marginVertical: 15
            }}>
              <Text style = {{
                fontSize: 15,
                color: 'grey'
              }}>Date</Text>
              <Text style = {{
                fontSize: 20,
                fontWeight: 'bold'
              }}>07 July</Text>
            </View>
            <View style = {{
              height: 55,
              display: 'flex',
              justifyContent: 'space-between',
              marginVertical: 15
            }}>
              <Text style = {{
                fontSize: 15,
                color: 'grey'
              }}>Count</Text>
              <Text style = {{
                fontSize: 20,
                fontWeight: 'bold'
              }}>3 pcs</Text>
            </View>
          </View>
          <View>
            <View style = {{
              height: 55,
              display: 'flex',
              justifyContent: 'space-between',
              marginVertical: 15
            }}>
              <Text style = {{
                fontSize: 15,
                color: 'grey'
              }}>Category</Text>
              <Text style = {{
                fontSize: 20,
                fontWeight: 'bold'
              }}>Action</Text>
            </View>
            <View style = {{
              height: 55,
              display: 'flex',
              justifyContent: 'space-between',
              marginVertical: 15
            }}>
              <Text style = {{
                fontSize: 15,
                color: 'grey'
              }}>Time</Text>
              <Text style = {{
                fontSize: 20,
                fontWeight: 'bold'
              }}>2:00pm</Text>
            </View>
            <View style = {{
              height: 55,
              display: 'flex',
              justifyContent: 'space-between',
              marginVertical: 15
            }}>
              <Text style = {{
                fontSize: 15,
                color: 'grey'
              }}>Seats</Text>
              <Text style = {{
                fontSize: 20,
                fontWeight: 'bold'
              }}>C4, C5, C6</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default index