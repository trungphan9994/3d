import React, { useRef,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import screen from '../../utils/screen';
const Stack = createStackNavigator();
const AppNavigator = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    const navigationRef = useRef();
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                headerMode="none"
                initialRouteName={screen.initialRouteName}
            >
                {screen.screens.map(({ name, component }, key) => (
                    //p day co man hinh profile ne screen 
                    <Stack.Screen key={key} name={name} component={component} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigator;
