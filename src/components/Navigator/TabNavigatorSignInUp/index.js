import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopTabBar from './child/TopTabBar';
import SignInScreen from '../../Screens/SingnIn';
import SignUpScreen from '../../Screens/SignUp';
import { MenuIcon } from '../../Share/IconComponent';
const TopTab = createMaterialTopTabNavigator();
const TabNavigatorSignInUp = () => {
    return (
        <TopTab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
            <TopTab.Screen
                name="SignInScreen"
                component={SignInScreen}
            />
            <TopTab.Screen name="SignUpScreen" component={SignUpScreen} />
        </TopTab.Navigator>
    );
};

export default TabNavigatorSignInUp;
