import React, { useCallback } from 'react';
import { SafeAreaView, Image, Alert } from 'react-native';
import { Icon, Layout, Text } from '@ui-kitten/components';
import { format_number } from '../../../../utils/functions'
// import {DATA} from '../../../../utils/data';
import styles from './styles';
const ItemCheckout = ({ item, removeCartItem, changeCartItem }) => {

    // const DeleteProduct = useCallback(() => {
    //     Alert.alert(
    //         'Xóa sản phẩm',
    //         `Bạn muốn xóa sản phẩm này không?`,
    //         [
    //             {
    //                 text: 'Hủy',
    //                 onPress: () => console.log('Cancel Pressed'),
    //                 style: 'cancel'
    //             },
    //             { text: 'OK', onPress: () =>{
    //                 removeCartItem(item.id)
    //             } }
    //         ],
    //         { cancelable: false }
    //     );
    // }, [item]);
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <Layout style={styles.Layout}>
                <Image style={styles.headerImage} source={{ uri: item.url }} />
                <Layout style={styles.Layout}>
                    <Layout style={styles.Layout1}>
                        <Text category="h6">
                        {item.name}
                    </Text>
                    </Layout>
                    <Layout style={styles.count}>
                        <Text style={styles.priceText} category="h6">
                            {format_number(item.price / item.count)} đ
                        </Text>
                        <Text category="h6">
                            x {item.count}
                        </Text>
                    </Layout>
                </Layout>
            </Layout>
        </SafeAreaView>
    );
};

export default ItemCheckout;
