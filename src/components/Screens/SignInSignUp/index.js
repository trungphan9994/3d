import React, { useMemo, useContext } from 'react';
import {
    Layout,
    TopNavigation,
    TopNavigationAction,Divider
} from '@ui-kitten/components';
import { DeleteIcon } from '../../Share/IconComponent';
import TabNavigatorSignInUp from '../../Navigator/TabNavigatorSignInUp';
import styles from './styles';
const SignInScreen = ({ navigation }) => {
    return (
        <Layout style={styles.Layout}>
            <TopNavigation
                style={styles.TopNavigation}
                title="Đăng ký / Đăng nhập"
                alignment="center"
                titleStyle={styles.titleStyle}
                leftControl={
                    <TopNavigationAction
                        icon={DeleteIcon}
                        onPress={() => {
                            navigation.navigate('HomeScreen');
                        }}
                    />
                }
            />
            <Divider/>
            <TabNavigatorSignInUp />
        </Layout>
    );
};

export default SignInScreen;
