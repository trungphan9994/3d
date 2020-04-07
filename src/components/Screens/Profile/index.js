import React, { useState, useMemo, useCallback} from 'react';
import { SafeAreaView, Image, View, StatusBar, ScrollView,TouchableOpacity } from 'react-native';
import {
    Icon,
    Layout,
    TopNavigation,
    TopNavigationAction, Text,Button, Divider
} from '@ui-kitten/components';
import { ActionSheet, Root } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import { BackIcon } from '../../Share/IconComponent';
import styles from './styles';
import ProfileModel from '../../Models/Profile';
import InputProfile from './input';
import ChangePasswordModel from '../../Models/ChangePassword';
const ProfileScreen = ({ navigation }) => {
    const [currentField, setCurrentField] = useState('');
    const [tmpValues, setTmpValues] = useState('');
    const [modalvisible, setModalvisible] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'Nguyễn Văn Anh',
        phone: '0927381022',
        email: 'nguyenvananh@gmail.com',
        birthday: new Date(),
        gender: 1,
        image: {
            id: Date.now(),
            url: '',
            content: ''
        }
    });
    const navigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);
    const BackAction = useCallback(
        () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />,
        [navigateBack]
    );
    const onClickAddImage = useCallback(() => {
        const BUTTONS = ['Take Photo', 'Choose Photo Library', 'Cancel'];
        ActionSheet.show(
            {
                options: BUTTONS,
                cancleButtonIndex: 2,
                title: 'Select a Photo'
            },
            (buttonIndex) => {
                switch (buttonIndex) {
                    case 0:
                        // takePhotoFromCamera();
                        pickedImage('openCamera');
                        break;
                    case 1:
                        // choosePhotoFromLibrary();
                        pickedImage('openPicker');
                        break;
                    default:
                        break;
                }
            }
        );
    }, [pickedImage]);
    const pickedImage = useCallback(
        async (functionName) => {
            if (typeof ImagePicker[functionName] === 'function') {
                let { path, data } = await ImagePicker[functionName]({
                    compressImageMaxWidth: 500,
                    compressImageMaxHeight: 500,
                    compressImageQuality: 0.7,
                    cropping: true,
                    includeBase64: true
                });
                if (path && data) {
                    handleChangeData('image', {
                        id: Date.now(),
                        url: { uri: path },
                        content: data
                    });
                }
            }
        },
        [handleChangeData]
    );
    const inputs = [
        { name: 'name', lable: 'Họ tên' },
        { name: 'phone', lable: 'Số điện thoại' },
        { name: 'email', lable: 'Email' },
        { name: 'birthday', lable: 'Ngày sinh' },
        { name: 'gender', lable: 'Giới tính' },
    ];
    const getCurrentField = useCallback(() => {
        // cais nafy sai bien currentField nen phai bor vo callback param
        // k bo thi khi setCurrentField mowis thi nos van an gia tri cux luc state dc khoi tao = ""
        let currentSelect = inputs.find((input) => input.name === currentField);//day ne
        return currentSelect ? currentSelect : { name: '', lable: '' };
    }, [currentField, inputs]);
    const handleCancleModal = useCallback(() => {
        setCurrentField('');
        setTmpValues('');
    }, []);
    const handleChangeData = useCallback((name, value) => {
        setProfileData((frofileDataCurren) => ({
            ...frofileDataCurren,
            [name]: value
        }));
    }, []);
    const handleDoneModal = useCallback(() => {
        if (currentField) {
            handleChangeData(currentField, tmpValues);
        }
        setCurrentField('');
    }, [tmpValues, currentField, setCurrentField]);

    const handleCancleModalChangePassword = useCallback(()=>{
        setModalvisible(false);
    },[])
    const handleDoneModalChangePassword = useCallback((password)=>{
        setModalvisible(false);
        console.log(password);
    },[])

    let findCurrentFiled = getCurrentField();
    let {
        image: { url }
    } = profileData;
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <ProfileModel
                isOpen={currentField ? true : false}
                label={findCurrentFiled.lable}
                name={findCurrentFiled.name}
                value={tmpValues}
                setValues={setTmpValues}
                handleCancleModal={handleCancleModal}
                handleDoneModal={handleDoneModal}
            />
            <ChangePasswordModel isOpen={modalvisible}
                handleCancleModalChangePassword={handleCancleModalChangePassword}
                handleDoneModalChangePassword={handleDoneModalChangePassword}
            />
            <TopNavigation
                style={styles.TopNavigation}
                title="Profile"
                titleStyle={styles.titleStyleTopNavigation}
                alignment="center"
                leftControl={BackAction()}
            />
            <Divider/>
            <Root style={{flex:1}}>
                <ScrollView>
                    <Layout style={styles.Layout}>
                        <View style={styles.View}>
                            <Image
                                style={styles.circleNumber}
                                source={
                                    !url
                                        ? {
                                            uri:
                                                'https://i.pinimg.com/originals/47/fa/ee/47faee72871798390d518d0681ac6aab.jpg'
                                        }
                                        : url
                                }
                            />
                            <View style={styles.icon}>
                                <Icon
                                    name="camera"
                                    fill="#1654B4"
                                    width={28}
                                    height={28}
                                    onPress={onClickAddImage}
                                />
                            </View>
                        </View>
                    </Layout>
                    <Layout>
                        {inputs.map(({ name, lable }, key) => {
                            let value = profileData[name];
                            const MemoView = useMemo(
                                () => (
                                    <InputProfile
                                        key={key}
                                        name={name}
                                        lable={lable}
                                        value={value}
                                        setCurrentField={setCurrentField}
                                        setTmpValues={setTmpValues}
                                        handleChangeData={handleChangeData} //chi la truyen k phai goi
                                    />
                                ),
                                [name, lable, value] // nhuwngx cai param callback nay thay doi
                                //neu la gia tri k doi no se k render lai
                                //dung de han che viec render qua nhieu lan k can thiet cua 1 component
                                //compoent InputProfile chir render laij khi 
                            );
                            return MemoView;
                        })}
                    </Layout>
                    <View style={styles.View} />
                    <TouchableOpacity onPress={()=>setModalvisible(true)}>
                        <Layout style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Text style={styles.headerText}
                                category="s1">ĐỔI MẬT KHẨU</Text>
                            <Icon name='arrow-ios-forward' style={{ width: 32 }} width={32} height={32} fill='#C5CEE0' />
                        </Layout>
                    </TouchableOpacity>
                </ScrollView>
            </Root>
            <Button style={styles.button}>Lưu</Button>
        </SafeAreaView>
    );
};
export default ProfileScreen;
