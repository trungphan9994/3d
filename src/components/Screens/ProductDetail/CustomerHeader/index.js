import React from 'react';
import { Image } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import styles from './styles';
import {format_number} from '../../../../utils/functions'
const CustomHeader = ({ uri, name, category, price }) => (
    <>
        <Image style={styles.headerImage} source={{ uri }} />
        <Layout style={styles.Layout}>
            <Layout style={styles.LayoutChild}>
                <Text style={styles.headerText} category="h5">
                    {name}
                </Text>
                <Text style={styles.headerText} appearance="hint" category="s1">
                    {category}
                </Text>
            </Layout>
            <Text category="h5" style={styles.priceText}>
            {format_number(price)} đ
            </Text>
        </Layout>
    </>
);

export default CustomHeader;
