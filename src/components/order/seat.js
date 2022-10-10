import React, { useState } from "react";
import { Text, View } from "react-native";

const getColor = (isBooked, isSelected) => {
    if(isSelected) {
        return "#5424D6"
    } else if (isBooked) {
        return "#444451"
    } else {
        return "#E3E5E9"
    }
}

const Seat = () => {
    const [seats, setSeat] = useState({
        seat : [
            'A', 'B', 'C', 'D', 'E', 'F', 'G'
        ],
        seatAvailable: [
            1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14
        ],
        seatReserved: []
    })

    const onClickData = (seats) => {
        if (seats.seatReserved.indexOf(Seat) > -1) {
            setSeat({
                seatAvailable:
                seatAvailable.concat(seats),
                seatReserved:
                seatReserved.filter(res => res !=seats)
            })
        } else {
            setSeat({
                seatReserved:
                seatReserved.concat(seats),
                seatAvailable:
                seatAvailable.filter(res => res != seats)
            })
        }
    } 

    return (
        <View style={{
            marginHorizontal: 35,
            marginTop: 30,
        }}>
            <View style={{
                display: 'flex',
            }}>
                <Text style={{
                    fontSize: 23,
                    fontWeight: 'bold',
                    paddingBottom: 20
                }}>Choose Your Seat</Text>
                <View style={{
                    display: 'flex',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 35
                }}>
                    <View style = {{
                        height: 2,
                        width: '100%',
                        backgroundColor: '#9570FE',
                        borderRadius: 2
                    }}></View>
                    {seats.seat.map( row => 
                        key={row}
                        )}
                </View>
            </View>
        </View>
    )
}

export default Seat