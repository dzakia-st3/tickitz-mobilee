import { Dimensions, StyleSheet } from "react-native";

const commonStyle = StyleSheet.create({
    flex: { display: 'flex' },
    flexRow: { flexDirection: 'row' },
    flexColumn: { flexDirection: 'column' },
    flexBetween: { justifyContent: 'space-between' },
    flexCenter: { justifyContent: 'center' },
    itemsCenter: { alignItems: 'center' },
    textPurple: { color: '#5F2EEA' },
    backgroundPurple: { backgroundColor: '#5F2EEA' },
    container : {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    listTab: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15
    },
    btnTab: {
        width: Dimensions.get('window').width / 0.5,
    },
    btnTabActive: {
        borderBottomWidth: 3,
        borderBottomColor: '#5F2EEA',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    cardHistory : {
        display: 'none'
    },
    activeContent : {
        display: 'flex',
    }
})

export default commonStyle