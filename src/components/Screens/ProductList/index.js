import React, { useState, useCallback } from 'react';
import { Layout } from '@ui-kitten/components';
import { FlatList } from 'react-native';
import styles from './styles';
import { DATA } from '../../../utils/data';
import ItemProduct from '../../ItemProduct/index';
import ProductModel from '../../Models/Product/index';
const ProductM = {
    id: '',
    url: '',
    name: '',
    categoty: '',
    price: '',
    description: ''
};
const ProductList = ({ navigation }) => {
    const setProductId = useCallback((id) => {
        let product = DATA.find((item) => item.id === id);
        setCurrentProduct(product || ProductM); // neeys kiem thay product !=null thi set laf product ney k thi 
    }, []);
    const [currentProduct, setCurrentProduct] = useState(ProductM);
    return (
        <Layout style={styles.Layout}>
            {/* //open model cho nay */}
            {currentProduct.id ? (
                <ProductModel
                    setProductId={setProductId}
                    {...currentProduct}
                    uri={currentProduct.url}
                    navigation={navigation}
                />
            ) : (
                <></>
            )}
            <FlatList
                columnWrapperStyle={styles.FlatList}
                data={DATA}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({
                    item: { url: uri, name, category, price, id }
                }) => (
                    <ItemProduct
                        id={id}
                        uri={uri}
                        name={name}
                        category={category}
                        price={price}
                        navigation={navigation}
                        setProductId={setProductId}
                    />
                )}
            />
        </Layout>
    );
};

export default ProductList;
