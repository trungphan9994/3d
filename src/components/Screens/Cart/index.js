import React, { useCallback, useState, useEffect,useContext } from 'react';
import { SafeAreaView, FlatList, StatusBar,Alert } from 'react-native';
import { Divider, Layout, Text, Button, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import ItemCart from './Item';
import styles from './styles';
import { BackIcon } from "../../Share/IconComponent"
import PropTypes from 'prop-types';
import {format_number} from '../../../utils/functions'
import GlobalContext from '../../../context/global'
const CartScreen = ({ navigation, route: { params: { disableTopNavigation } } }) => {
    const {cartList,removeCartItem,changeCartItem}=useContext(GlobalContext);
    useEffect(() => {
        totalPrice();//cart list thay doi tu dong goi ham nay
    }, [cartList])
    const [total, setTotal] = useState(0);
    const navigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);
    const BackAction = useCallback(
        () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />,
        [navigateBack]
    );
    const totalPrice = useCallback(() => {
        setTotal(cartList.reduce((tong, Product) => {
            tong += Product.price
            return tong
        }, 0))
    }, [cartList])
    const MoveCheckout = useCallback(() => {
        if(cartList.length>0){
            navigation.navigate('CheckoutScreen',{total:total})
        }
        else{
            Alert.alert('Chưa có sản phẩm nào')
        }
    },[total])
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            {
                !disableTopNavigation && <TopNavigation title='Giỏ hàng' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} />
            }
            <Divider />
            <Layout style={styles.Layout}>
                <FlatList
                    data={cartList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ItemCart item={item} removeCartItem={removeCartItem} changeCartItem={changeCartItem}/>}
                />
            </Layout>
            <Divider />
            <Layout style={styles.Layout1}>
                <Text style={styles.headerText} category="s1">
                    Thành tiền
                </Text>
                <Text category="h6" style={styles.priceText}>
                {format_number(total)} đ
                </Text>
            </Layout>
            <Button style={styles.button} onPress={()=>MoveCheckout()}>Tiến hành mua hàng</Button>
        </SafeAreaView>
    );
};
CartScreen.propTypes = {
    navigation: PropTypes.object,
    route: PropTypes.object
}
CartScreen.defaultProps = {
    navigation: {},
    route: { params: { disableTopNavigation: true } }
}
export default CartScreen;
