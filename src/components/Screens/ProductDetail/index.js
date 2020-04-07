import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Divider, Layout, Text, Button } from '@ui-kitten/components';
import CustomHeader from './CustomerHeader';
import styles from './styles';

const ProductsDetail = ({id, uri, name, category, price, description,refModalCartScreen ,addCartItem}) => {
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            {/* <TopNavigation style={{ marginTop: 20 }} title='Chi tiết' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} /> */}
            <Divider/>
            <Layout style={styles.Layout}>
                <CustomHeader
                    uri={uri}
                    name={name}
                    category={category}
                    price={price}
                />
                <ScrollView style={styles.headerText}>
                    <Text>{description}</Text>
                </ScrollView>
            </Layout>
            <Divider />
            
            <Layout style={{flexDirection:'row'}}>
            <Button
                style={[styles.buttonAddProduct,styles.colorButton]}
                onPress={() =>{
                    addCartItem({id,url: uri, name, category, price},false);
                }
                }
            >
                Thêm vào giỏ hàng
            </Button>
            <Button
                style={[styles.button,styles.buttonBuy]}
                onPress={() =>{
                    addCartItem({id,url: uri, name, category, price},true);
                    refModalCartScreen.current.open();
                }      
                }
            >
                Mua ngay
            </Button>
            </Layout>
            
        </SafeAreaView>
    );
};
export default ProductsDetail;
