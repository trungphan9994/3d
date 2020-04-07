import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopTabBar from './child/TopTabBar';
import AllProductStackNavigator from './child/AllProductStackNavigator';
// import OrdersScreen from '../../Screens/OrdersScreen';
// import OrdersScreen2 from '../../Screens/OrdersScreen2';
import ProductList from '../../Screens/ProductList';
const TopTab = createMaterialTopTabNavigator();
const TabNavigator = () => {
    return (
        <TopTab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
            <TopTab.Screen
                name="StackNavigator"
                component={AllProductStackNavigator}
            />
            <TopTab.Screen name="Orders" component={ProductList} />
            <TopTab.Screen name="Orders2" component={ProductList} />
        </TopTab.Navigator>
    );
};

export default TabNavigator;
