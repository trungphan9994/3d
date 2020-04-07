import React from 'react';
import { View } from 'react-native';
import { BackIcon } from '../../Share/IconComponent';
import CartScreen from '../../Screens/Cart';
import Modal from 'react-native-modalbox';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import styles from './styles';
const CartModel = ({ refModalCartScreen,navigation }) => {
    return (
        <Modal
            ref={refModalCartScreen}
            animationType="slide"
            transparent={false}
            swipeToClose={false}
        >
            <View style={styles.View}>
                <TopNavigation
                    title="Giỏ hàng"
                    titleStyle={styles.TopNavigation}
                    alignment="center"
                    leftControl={
                        <TopNavigationAction
                            icon={BackIcon}
                            onPress={() => refModalCartScreen.current.close()}
                        />
                    }
                />
                <View style={styles.ViewChild}>
                    <CartScreen navigation={navigation} />
                </View>
            </View>
        </Modal>
    );
};

export default CartModel;
