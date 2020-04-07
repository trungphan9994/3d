import React, { useMemo, useContext } from 'react';
import { BackIcon } from '../../Share/IconComponent';
import { Modal, View } from 'react-native';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import ProductsDetailsScreen from '../../Screens/ProductDetail';
import { CartControls } from '../../Share/RightControls';
import styles from './styles';
import GlobalContext from "../../../context/global";
import CartModel from '../Cart'
const ProductModel = ({ navigation,setProductId, ...props }) => {
    const { refModalCartScreen,addCartItem } = useContext(GlobalContext)
    const Right = useMemo(() => <CartControls refModalCartScreen={refModalCartScreen} navigation={navigation}  />, [refModalCartScreen]);
    return (
        <Modal animationType="slide" transparent={false}>
            <View style={styles.View}>
                <CartModel refModalCartScreen={refModalCartScreen} navigation={navigation} />
                <TopNavigation
                    title="Chi tiết sản phẩm"
                    titleStyle={styles.TopNavigation}
                    alignment="center"
                    leftControl={
                        <TopNavigationAction
                            icon={BackIcon}
                            onPress={() => setProductId('')}
                        />
                    }
                    rightControls={Right}
                />
                <View style={styles.View}>
                    <ProductsDetailsScreen {...props} refModalCartScreen={refModalCartScreen} addCartItem={addCartItem} />
                </View>
            </View>
        </Modal>
    );
};

export default ProductModel;
