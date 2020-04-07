import React, { useState, useCallback, useMemo, useRef } from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light, dark } from '@eva-design/eva';
import AppNavigator from './Navigator';
import CartModel from "./Models/Cart";
const themes = { light, dark };
import GlobalContext from "../context/global"
import { Alert } from 'react-native';
const App = () => {
    const [theme, setTheme] = useState('light');
    const [cartList, setCartList] = useState([]);
    const removeCartItem = useCallback((id) => {
        let tmpList = [...cartList];
        let index = tmpList.findIndex(item => item.id === id);
        if (index !== -1) {
            tmpList.splice(index, 1);
            setCartList(tmpList);
        }
    }, [cartList]);
    const addCartItem = useCallback((product,isBuy) => {
        let index = cartList.findIndex(item => item.id === product.id);
        if (index === -1) {
            if(!isBuy) {
                Alert.alert("Sản phẩm đã được thêm vào giỏ hàng")
            }
            setCartList((currentCart) => ([...currentCart, { ...product, count: 1 }]))
        }
    }, [cartList]);
    const changeCartItem = useCallback((id, number) => {
        
        let tmpData = [...cartList];
        let index = tmpData.findIndex(item => item.id === id);
        if (index !== -1) {
            if (tmpData[index].count === 1 && number === -1) {
                return;
            }
            let price= tmpData[index].price/tmpData[index].count;
            tmpData[index].count += number;
            tmpData[index].price = price*tmpData[index].count;
            setCartList(tmpData)
        }
    }, [cartList]);
    const currentTheme = useMemo(() => themes[theme], [theme]);
    const toggleTheme = useCallback(() => {
        setTheme((currentThemeState) =>
            currentThemeState === 'light' ? 'dark' : 'light'
        );
    }, []);
    const refModalCartScreen = useRef()
    return (
        <>
            <CartModel refModalCartScreen={refModalCartScreen} />
            <IconRegistry icons={EvaIconsPack} />
            <GlobalContext.Provider value={{
                theme,
                toggleTheme, refModalCartScreen, cartList,
                removeCartItem, addCartItem, changeCartItem
            }}>
                <ApplicationProvider mapping={mapping} theme={currentTheme}>
                    <AppNavigator />
                </ApplicationProvider>
            </GlobalContext.Provider>
        </>
    );
};

export default App;
