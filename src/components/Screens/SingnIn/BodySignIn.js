
import React, { useCallback, useState } from 'react';
import { Text, TouchableOpacity, Image,View } from 'react-native';
import { Button, Layout, Input, CheckBox } from '@ui-kitten/components';

import { IconSecure, FacebookIcon, GoogleIcon } from '../../Share/IconComponent';
import { indexStyles } from './styles';
const BodySignIn = ({ navigation }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [checked, setChecked] = useState(false);
    const handleInputChange = useCallback((name, value) => {
        return setFormData((formDataState) => ({
            ...formDataState,
            [name]: value
        }));
    }, []);
    const navigateHome = useCallback(() => {
        navigation.navigate('HomeScreen');
    }, [navigation]);
    const onIconPress = useCallback(() => {
        setSecureTextEntry((secureTextEntryState) => !secureTextEntryState);
    }, []);

    const onCheckedChange = useCallback(() => {
        setChecked((isChecked) => !isChecked);
    }, []);
    const RenderIcon = (props) => (
        <IconSecure {...props} secureTextEntry={secureTextEntry} />
    );
    const { email, password } = formData;
    return (
        <Layout style={indexStyles.LayoutContainer}>
            <Layout style={indexStyles.LayoutContent}>
                <Input
                    label="EMAIL"
                    style={indexStyles.Input}
                    value={email}
                    onChangeText={(value) =>
                        handleInputChange('email', value)
                    }
                    placeholder="Email"
                />
                <Input
                    label="MẬT KHẨU"
                    value={password}
                    placeholder="********"
                    style={indexStyles.Input}
                    icon={RenderIcon}
                    secureTextEntry={secureTextEntry}
                    onIconPress={onIconPress}
                    onChangeText={(value) =>
                        handleInputChange('password', value)
                    }
                />
                <CheckBox
                    text="Nhớ mật khẩu"
                    checked={checked}
                    onChange={onCheckedChange}
                    style={indexStyles.CheckBox}
                />
                <Button style={indexStyles.Button} onPress={navigateHome}>
                    ĐĂNG NHẬP
                    </Button>
                <Layout style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#1654B4', marginBottom: 15, marginTop: 10 }}>Quên mật khẩu?</Text>
                    <Text>Hoặc đăng nhập với</Text>
                </Layout>
                <Layout style={{ flexDirection: 'row',marginTop:10 }}>
                    <TouchableOpacity style={indexStyles.FacebookStyle} activeOpacity={0.5}>
                        <Image
                            source={{
                                uri:
                                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
                            }}
                            //You can also show the image from you project directory like below
                            //source={require('./Images/facebook.png')}
                            //Image Style
                            style={indexStyles.ImageIconStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={indexStyles.GooglePlusStyle} activeOpacity={0.5}>
                        <Image
                            source={{
                                uri:
                                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png',
                            }}
                            //You can also show the image from you project directory like below
                            //source={require('./Images/google-plus.png')}
                            //Image Style
                            style={indexStyles.ImageIconStyle}
                        />
                    </TouchableOpacity>
                </Layout>
            </Layout>
        </Layout>
    )
}
export default BodySignIn;