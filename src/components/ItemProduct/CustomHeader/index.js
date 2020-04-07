import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    headerImage: {
        resizeMode: 'center',
        height: height / 2 / 2
    },
    Layout: { justifyContent: 'flex-start', marginLeft: 8 }
});
const CustomHeader = ({ uri, name, category }) => (
    <React.Fragment>
        <Image style={styles.headerImage} source={{ uri }} />
        <Layout style={styles.Layout}>
            <Text category="h5">{name}</Text>
            <Text appearance="hint" category="s1">
                {category}
            </Text>
        </Layout>
    </React.Fragment>
);
export default CustomHeader;
