import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const circleNumberSize = (height / 10) * 4 - 40;
export default StyleSheet.create({
    SafeAreaView: { flex: 1, backgroundColor: 'white' },
    // TopNavigation: { marginTop: 20 },
    titleStyleTopNavigation: { fontWeight: 'bold', fontSize: 20 },
    headerText: {
        marginHorizontal: 24,
        marginVertical: 4,
        marginTop: 12,
        marginBottom: 12
    },
    text: {
        // marginHorizontal: 24,
        marginVertical: 4,
        marginTop: 12,
        marginBottom: 12
    },
    Layout: {
        width: width,
        height: height / 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f8fb'
    },
    View: { paddingTop: 10, paddingBottom: 10 },
    Layout1: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    LayoutBreak: {
        height: 30,
        backgroundColor: '#f7f8fb'
    },
    headerImage: {
        resizeMode: 'cover',
        height: height / 2 / 2
    },
    circleNumber: {
        resizeMode: 'cover',
        width: circleNumberSize - 90,
        height: circleNumberSize - 90,
        borderRadius: (circleNumberSize - 90) / 2,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 10,
        shadowRadius: 20
    },
    icon: {
        position: 'absolute',
        top: 110,
        left: 100,
        width: circleNumberSize / 4,
        height: circleNumberSize / 4,
        borderRadius: circleNumberSize / 4 / 2,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 10,
        shadowRadius: 20,

        elevation: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f8fb'
    },
    button: {
        backgroundColor: '#1654B4',
        borderRadius: 8,
        borderColor: '#1654B4',
        marginLeft: 24,
        marginRight: 24,
        marginTop: 14,
        marginBottom: 14
    }
});
