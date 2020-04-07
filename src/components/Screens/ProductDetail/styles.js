import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
export default StyleSheet.create({
    SafeAreaView: { flex: 1, backgroundColor: 'white' },
    Layout: { flex: 1 },
    headerText: {
        marginHorizontal: 24,
        marginVertical: 4
    },
    headerImage: {
        resizeMode: 'center',
        height: height / 2 / 1.5
    },
    buttonAddProduct: {
        backgroundColor: '#D82828',
        borderRadius: 8,
        // borderColor: '#D82828',
        marginLeft: 24,
        marginTop: 14,
        marginBottom: 14
    },
    colorButton:{
        backgroundColor:'#1654B4'
    },
    buttonBuy:{
        flex:1,
        backgroundColor: '#D82828',
        borderRadius: 8,
        borderColor: '#D82828',
        marginLeft: 10,
        marginRight: 24,
        marginTop: 14,
        marginBottom: 14
    }


});
