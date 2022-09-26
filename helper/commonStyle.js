import { StyleSheet } from "react-native";

const commonStyle = StyleSheet.create({
    flex: { display: 'flex' },
    flexRow: { flexDirection: 'row' },
    flexColumn: { flexDirection: 'column' },
    flexBetween: { justifyContent: 'space-between' },
    flexCenter: { justifyContent: 'center' },
    itemsCenter: { alignItems: 'center' },
    textPurple: { color: '#5F2EEA' },
    backgroundPurple: { backgroundColor: '#5F2EEA' },
    tabs: {
        padding: '15px',
        textAlign: 'center',
        width: '50%',
        cursor: 'pointer',
        boxSizing: 'contentBox',
        position: 'relative',
        outline: 'none',
        color: '#5424d6',
        fontWeight: 'bold',
    },

})

export default commonStyle