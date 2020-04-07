import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    Modal: {
        // borderRadius: Platform.OS === 'ios' ? 20 : 6,
        shadowRadius: 10,
        width: width - 40,
        height: height / 3
    },
    TopNavigation: { fontWeight: 'bold', fontSize: 20 },
    View: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    Input: { margin: 10 }
});
