import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    SafeAreaView: { flex: 1, backgroundColor: 'white' },
    Layout: { flex: 1 },
    Layout1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8
    },
    headerText: {
        marginHorizontal: 24,
        marginVertical: 4
    },
    priceText: {
        marginRight: 24,
        fontWeight: 'bold',
        color: '#D82828'
    },
    button: {
        backgroundColor: '#D82828',
        borderRadius: 8,
        borderColor: '#D82828',
        marginLeft: 24,
        marginRight: 24,
        marginTop: 14,
        marginBottom: 14
    }
});
