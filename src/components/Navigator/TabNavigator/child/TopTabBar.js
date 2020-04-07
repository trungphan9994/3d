import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';
import { TabBar, Tab, Layout } from '@ui-kitten/components';
const TopTabBar = ({ navigation, state }) => {
    const onSelect = useCallback(
        (index) => {
            navigation.navigate(state.routeNames[index]);
        },
        [navigation, state.routeNames]
    );
    return (
        <Layout>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <TabBar selectedIndex={state.index} onSelect={onSelect}>
                {['Tất cả', 'Category1', 'Category2'].map((item) => (
                    <Tab key={item} title={item} style={{marginTop:10,marginBottom:10}}/>
                ))}
            </TabBar>
        </Layout>
    );
};

export default TopTabBar;
