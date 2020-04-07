import React, { useState, useMemo, useContext, useCallback } from 'react';
import { ScrollView,FlatList } from 'react-native';
import {
    Layout,
    TopNavigation,
    TopNavigationAction, Divider, Text, Radio, Input, Button
} from '@ui-kitten/components';
import { BackIcon } from '../../Share/IconComponent';
import styles from './styles';
import AddressModel from '../../Models/Address';
import ItemCheckout from './ItemCheckout';
import GlobalContext from '../../../context/global'
import {format_number} from '../../../utils/functions'
const CheckoutScreen = ({ navigation,route }) => {
    let transportfee= 20000;
    const { total } = route.params;
    const {cartList,removeCartItem,changeCartItem}=useContext(GlobalContext);
    const [modalvisible, setModalvisible] = useState(false);
    const navigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);
    const BackAction = useCallback(
        () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />,
        [navigateBack]
    );
    const [formAdress, setFormAdress] = useState({ name: '', phone: '', address: '', city: '', district: '', ward: '' });
    const [checkedCod, setCheckedCod] = React.useState(false);
    const [checkedBank, setCheckedBank] = React.useState(false);
    const [discount, setDiscount] = React.useState('');
    const onCheckedChange = (name, isChecked) => {
        console.log(name);
        if (name === 'Bank') {
            setCheckedBank(isChecked);
        }
        else {
            setCheckedCod(isChecked);
        }
    };
    const handleCancleModalChangeAddress = useCallback(() => {
        setModalvisible(false);
    }, [])
    const handleDoneModalChangeAddress = useCallback((Adress) => {
        setModalvisible(false);
        console.log("Adredsadsadsadsdsad", Adress);
        setFormAdress(Adress)
    }, [])
    const { name, phone, address, city, district, ward } = formAdress;
    return (
        <Layout style={styles.Layout}>
            <TopNavigation title='Thông tin mua hàng' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} />
            <Divider />
            <AddressModel isOpen={modalvisible}
                handleCancleModalChangeAddress={handleCancleModalChangeAddress}
                handleDoneModalChangeAddress={handleDoneModalChangeAddress}
                formAdressCheckout={formAdress}
            />
            <ScrollView>
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F7F9FC' }}>
                    <Text style={styles.marginLayout}>ĐỊA CHỈ NHẬN HÀNG </Text>
                    <Text style={[styles.marginLayout, styles.textunderline]}
                        onPress={() => setModalvisible(true)}
                    >Thay đổi</Text>
                </Layout>
                {
                    formAdress.name !== "" ? (
                        <Layout style={styles.marginLayout}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 8 }}>{name} - {phone} </Text>
                            <Text>{address}  </Text>
                        </Layout>
                    ) : (
                            <Layout style={styles.marginLayout}>
                                <Text>Chưa có địa chỉ nhận hàng</Text>
                            </Layout>

                        )
                }
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F7F9FC' }}>
                    <Text style={styles.marginLayout}>ĐƠN HÀNG </Text>
                </Layout>
                {/* {Flatlist} */}
                <FlatList
                    data={cartList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ItemCheckout item={item} removeCartItem={removeCartItem} changeCartItem={changeCartItem}/>}
                />
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F7F9FC' }}>
                    <Text style={styles.marginLayout}>HÌNH THỨC THANH TOÁN </Text>
                </Layout>
                <Layout style={styles.marginLayout}>
                    <Radio
                        style={styles.marginRadiobutton}
                        text={`Thanh toán khi nhận hàng (COD).`}
                        checked={checkedCod}
                        onChange={(isChecked) => onCheckedChange("COD", isChecked)}
                    />
                    <Radio
                        style={styles.marginRadiobutton}
                        text={`Thanh toán bằng cách chuyển khoản qua ngân hàng.`}
                        checked={checkedBank}
                        onChange={(isChecked) => onCheckedChange("Bank", isChecked)}
                    />
                    {
                        checkedBank ?
                            (
                                <Layout style={{ marginLeft: 30 }}>
                                    <Text>STK: 0129432554583495</Text>
                                    <Text>Chủ TK: Lê Văn Anh</Text>
                                    <Text>Ngân hàng: Vietcombank chi nhánh 1</Text>
                                </Layout>

                            ) : (<></>)
                    }
                </Layout>
                <Divider />
                <Input
                    style={styles.marginLayout}
                    label='MÃ GIẢM GIÁ'
                    placeholder='Nhập mã giảm giá'
                    value={discount}
                    onChangeText={setDiscount}
                />
                <Divider />
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.marginLayout}>Tạm tính </Text>
                    <Text style={[styles.marginLayout, styles.textColorandfontSize]}>{format_number(total)} đ </Text>
                </Layout>
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.marginLayout}>Phí vận chuyển </Text>
                    <Text style={[styles.marginLayout, styles.textColorandfontSize]}>{format_number(transportfee)} đ </Text>
                </Layout>
                <Divider />
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.marginLayout}>Thành tiền </Text>
                    <Text style={[styles.marginLayout, styles.textColorandfontSize, styles.fontSizeTotal]}>{format_number(total+transportfee)}đ </Text>
                </Layout>
            </ScrollView>
            <Button style={[styles.marginLayout, styles.backgroundColorButton]}

            >Hoàn tất đơn hàng</Button>
        </Layout>
    );
};
export default CheckoutScreen;
