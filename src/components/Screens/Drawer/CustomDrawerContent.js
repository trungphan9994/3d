import React from 'react';
import { Alert, StyleSheet, Image, Text, View, TouchableNativeFeedback } from 'react-native';
import { DrawerHeaderFooter, Button, Avatar, Icon, Divider } from '@ui-kitten/components';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { LogoutIcon } from '../../Share/IconComponent';
const ConfirmLogOut = (navigation) => {
    Alert.alert(
        'LogOut',
        'Bạn muốn đăng xuất?',
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            { text: 'OK', onPress: () => { navigation.navigate('SignInScreen') } }
        ],
        { cancelable: false }
    );
};
const CustomDrawerContent = ({ ...rest }) => {
    let isAuth = false;
    return (
        <DrawerContentScrollView {...rest}>
                {isAuth ? (
                    <View style={styles.DrawerHeaderFooter}>
                        <View style={{ flexDirection: 'row' }}>
                            <Avatar style={styles.drawerImage} size='large' source={{
                                uri: 'https://i.pinimg.com/originals/47/fa/ee/47faee72871798390d518d0681ac6aab.jpg'
                            }}
                            />
                            <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Nguyễn Văn Anh</Text>
                                <Text style={styles.textUnderline} onPress={() => rest.navigation.navigate("Profile")}>Chỉnh sửa thông tin</Text>
                            </View>
                        </View>
                    </View>) : (
                        <View style={styles.DrawerHeaderFooter}>
                            <View style={{ flexDirection: 'row' }}>
                                <Avatar style={styles.drawerImage} size='large' source={{
                                    uri: 'https://library.kissclipart.com/20181005/bee/kissclipart-white-person-icon-png-clipart-computer-icons-deskt-73f851694f2ebca8.jpg'
                                }}
                                />
                                <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 5 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 11 }}>Chào mừng bạn đến với Horizon Tech</Text>
                                    <Text style={{ textDecorationLine: 'underline', fontSize: 11, color: '#1654B4' }} onPress={() => rest.navigation.navigate("SignInScreen")}>Đăng nhập/ Đăng ký</Text>
                                </View>
                            </View>
                        </View>)}
                <View>
                    <Divider />
                    <DrawerItem label="Sản phẩm" onPress={() => rest.navigation.navigate('Home')} />
                    <Divider />
                    <DrawerItem label="Giỏ hàng" onPress={() => rest.navigation.navigate('CartScreen')} />
                    <Divider />
                    <DrawerItem label="Quản lý giỏ hàng" onPress={() => rest.navigation.navigate('OrderManagementScreen')} />
                    <Divider />
                </View>
                <View>
                    <Text style={{ margin: 20 }}>Hotline hỗ trợ: 0903 234 234</Text>
                    <DrawerItem label="ĐĂNG XUẤT" onPress={() => ConfirmLogOut(rest.navigation)} />
                </View>
        </DrawerContentScrollView>
    );
};
const styles = StyleSheet.create({
    DrawerHeaderFooter: { height: 120, justifyContent: 'center', marginLeft: 10 },
    drawerImage: { height: 50, width: 50, resizeMode: 'cover' },
    textUnderline: { textDecorationLine: 'underline' },

});
export default CustomDrawerContent;
