import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
    SafeAreaView: { flex: 1, backgroundColor: '#F7F9FC' },
    Layout: {
        flex: 1,
        margin: 5,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#EEF1F6'
    },
    Layout1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 8
    },
    priceText: { fontWeight: 'bold' }
});
