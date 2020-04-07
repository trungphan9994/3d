import React,{useContext} from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Icon, Layout, Text, Divider } from '@ui-kitten/components';
import CustomHeader from './CustomHeader';
import styles from './styles';
import {format_number} from '../../utils/functions'
import GlobalContext from "../../context/global";

const ItemProduct = ({ id, uri, name, category, price, setProductId,navigation }) => {
    const {addCartItem} = useContext(GlobalContext)
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <TouchableOpacity 
            onPress={() => setProductId(id)}
            >
                <Layout style={styles.Layout}>
                    <CustomHeader uri={uri} name={name} category={category} />
                    <Divider />
                    <Layout style={styles.Layout1}>
                        <Text style={styles.priceText} category="s1">
                        {format_number(price)}đ
                        </Text>
                        <Icon
                            name="shopping-cart"
                            fill="#1654B4"
                            width={32}
                            height={32}
                            // onPress={() => setProductId(id)}
                            onPress={() =>{
                                addCartItem({id,url: uri, name, category, price},false);
                            }}
                        />
                    </Layout>
                </Layout>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default ItemProduct;
