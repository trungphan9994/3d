import React, { useMemo, useContext } from 'react';
import {
    Layout,
    TopNavigation,
    TopNavigationAction,Divider
} from '@ui-kitten/components';
import CartModel from '../../Models/Cart';
import { MenuIcon } from '../../Share/IconComponent';
import TabNavigator from '../../Navigator/TabNavigator';
import { RightControls } from '../../Share/RightControls';
import styles from './styles';
import GlobalContext from "../../../context/global";
const HomeScreen = ({ navigation }) => {
    const { refModalCartScreen } = useContext(GlobalContext);
    const Right = useMemo(() => <RightControls refModalCartScreen={refModalCartScreen} />, [refModalCartScreen]);
    return (
        <Layout style={styles.Layout}>
            <CartModel refModalCartScreen={refModalCartScreen} navigation={navigation} />
            <TopNavigation
                style={styles.TopNavigation}
                title="Sản phẩm"
                alignment="center"
                titleStyle={styles.titleStyle}
                leftControl={
                    <TopNavigationAction
                        icon={MenuIcon}
                        onPress={() => {
                            navigation.openDrawer();
                        }}
                    />
                }
                rightControls={Right}
            />
            <Divider/>
            <TabNavigator />
        </Layout>
    );
};

export default HomeScreen;
