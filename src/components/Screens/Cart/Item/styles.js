import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    SafeAreaView: { flex: 1, backgroundColor: 'white' },
    Layout: { flex: 1, flexDirection: 'row', margin: 5 },
    Layout1: { flex: 1, flexDirection: 'column', marginLeft: 5 },
    Layout2: {
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 4,
        alignItems: 'flex-start'
    },
    headerText: {
        marginLeft: 4
    },
    priceText: {
        marginLeft: 4,
        marginVertical: 6,
        fontWeight: 'bold'
    },
    countText: { marginLeft: 10, marginRight: 10 },
    headerImage: {
        resizeMode: 'cover',
        height: height / 2 / 2,
        width: width / 3
    },
    closeIcon: { width: 32 },
    buttonIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        borderRadius: 32,
        backgroundColor: '#E0E0E0'
    }
});
