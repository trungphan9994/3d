import React, { useMemo } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StatusBar } from 'react-native';
import { Dimensions } from 'react-native';
import { Text } from '@ui-kitten/components';
const { height } = Dimensions.get('window');

const HeaderSignIn = () => {
    return useMemo(
        () => (
            <>
                {/* <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                /> */}
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#061636', '#12407D']}
                    style={{ justifyContent: 'center', height: height / 3 }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            marginLeft: 30
                        }}
                        category="h3"
                    >
                        Đăng nhập
                    </Text>
                </LinearGradient>
            </>
        ),
        [height]
    );
};
export default HeaderSignIn;
