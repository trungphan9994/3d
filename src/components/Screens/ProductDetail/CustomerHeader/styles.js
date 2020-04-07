import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
export default StyleSheet.create({
    headerImage: {
        resizeMode: 'center',
        height: height / 2 / 1.5
    },
    Layout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    LayoutChild: { justifyContent: 'flex-start' },
    headerText: {
        marginHorizontal: 24,
        marginVertical: 4
    },
    priceText: { marginRight: 20, fontWeight: 'bold' }
});
