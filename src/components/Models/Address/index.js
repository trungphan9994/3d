import React, { useState, useCallback, useEffect } from 'react';
import { BackIcon, IconSecure } from '../../Share/IconComponent';
import { Modal, View } from 'react-native';
import { TopNavigation, TopNavigationAction, Input, Button, Divider, Text, Select } from '@ui-kitten/components';
import styles from './styles';
const AddressModel = ({ isOpen, handleCancleModalChangeAddress,
    handleDoneModalChangeAddress, formAdressCheckout, ...props }) => {
    useEffect(() => {
        fetchData();
    }, []);
    const [citys, setCitys] = useState({});
    const fetchData = async () => {
        const res = await fetch("https://thongtindoanhnghiep.co/api/city");
        res
            .json()
            .then(res => setCitys(res))
            .catch(err => console.log(err));
    }
    const [formAdress, setFormAdress] = useState(formAdressCheckout);

    const handleInputChange = useCallback((name, value) => {
        return setFormAdress((formDataState) => ({
            ...formDataState,
            [name]: value
        }));
    }, []);
    const { name, phone, address, city, district, ward } = formAdress;
    const check = useCallback((name, phone, address, city, district, ward) => {
        // if (oldPassword !== newPassword){
        //     if(newPassword === verifyPassword){
        //         handleDoneModalChangeAddress(verifyPassword)
        //     } else {
        //         alert('Mật khẩu mới không trùng khớp')
        //     }
        // }else{
        //     alert('Mật khẩu mới trùng với mật khẩu cũ')
        // }
        handleDoneModalChangeAddress(formAdress)
    }, [name, phone, address, city, district, ward])
    return (
        <Modal animationType="slide" transparent={false} visible={isOpen}>
            <View style={styles.View}>
                <TopNavigation
                    title="Địa chỉ nhận hàng"
                    titleStyle={styles.TopNavigation}
                    alignment="center"
                    leftControl={
                        <TopNavigationAction
                            icon={BackIcon}
                            onPress={handleCancleModalChangeAddress}
                        />
                    }

                />
                <Divider />
                <View style={styles.Body}>
                    <Input
                        label="TÊN NGƯỜI NHẬN"
                        value={name}
                        placeholder="Tên người nhận"
                        style={styles.Input}
                        onChangeText={(value) =>
                            handleInputChange('name', value)
                        }
                    />
                    <Input
                        label="SỐ ĐIỆN THOẠI"
                        value={phone}
                        placeholder="Số điện thoại"
                        keyboardType='phone-pad'
                        style={styles.Input}
                        onChangeText={(value) =>
                            handleInputChange('phone', value)
                        }
                    />
                    <Input
                        label="ĐỊA CHỈ NHẬN HÀNG"
                        value={address}
                        placeholder="Địa chỉ nhận hàng"
                        style={styles.Input}
                        onChangeText={(value) =>
                            handleInputChange('address', value)
                        }
                    />
                    <Text>{JSON.stringify(citys)}</Text>
                </View>
                <Button style={styles.button} onPress={() => check(name, phone, address, city, district, ward)}>Lưu</Button>
            </View>
        </Modal>
    );
};

export default AddressModel;
