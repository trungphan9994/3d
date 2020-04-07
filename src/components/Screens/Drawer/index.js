import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import HomeScreen from '../Home';
import CartScreen from '../Cart';
import OrderManagementScreen from '../OrderManagement';
const Drawer = createDrawerNavigator();
const DrawerList = [
    {
        name: 'Home',
        component: HomeScreen,
        title: 'Sản phẩm'
    },
    {
        name: 'CartScreen',
        component: CartScreen,
        title: 'Giỏ hàng'
    },
    {
        name: 'OrderManagementScreen',
        component: OrderManagementScreen,
        title: 'Quản lý đơn hàng'
    }
];
const DrawerNavigator = () => {
    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            drawerType={width > 900 ? 'permanent' : 'front'}
        >
            {DrawerList.map(({ name, component, title }, key) => (
                <Drawer.Screen name={name} options={{ title }} initialParams={{ disableTopNavigation: false }} component={component} key={key} />
            ))}
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
