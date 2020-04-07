import React from 'react';
import { SafeAreaView } from 'react-native';
import {Divider} from '@ui-kitten/components';
import HeaderSignIn from './HeaderSignIn';
import BodySignIn from './BodySignIn';
import { indexStyles } from './styles';

const SignInScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={indexStyles.SafeAreaView}>
            <BodySignIn navigation={navigation}/>
        </SafeAreaView>
    );
};
export default SignInScreen;
