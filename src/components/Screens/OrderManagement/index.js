import React, { useMemo, useContext,useCallback } from 'react';
import {
    Layout,
    TopNavigation,
    TopNavigationAction,Divider
} from '@ui-kitten/components';
import { BackIcon } from '../../Share/IconComponent';
import TabNavigator from '../../Navigator/TabNavigator';
import { RightControls } from '../../Share/RightControls';
import styles from './styles';
const OrderManagementScreen = ({ navigation }) => {
    const navigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);
    const BackAction = useCallback(
        () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />,
        [navigateBack]
    );
    return (
        <Layout style={styles.Layout}>
            <TopNavigation title='Quản lý đơn hàng' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} />
            <Divider/>
        </Layout>
    );
};

export default OrderManagementScreen;
