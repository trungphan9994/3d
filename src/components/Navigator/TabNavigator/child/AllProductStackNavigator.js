import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import ProductList from '../../../Screens/ProductList';
import ProductsDetailsScreen from '../../../Screens/ProductDetail';
const AllProductStackNavigator = () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="AllProductsScreen" component={ProductList} />
        <Stack.Screen
            name="ProductsDetailsScreen"
            component={ProductsDetailsScreen}
        />
    </Stack.Navigator>
);

export default AllProductStackNavigator;
