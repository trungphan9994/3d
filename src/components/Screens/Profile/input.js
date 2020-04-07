import React, { useCallback, useMemo } from 'react';
import { TouchableOpacity, Dimensions, View } from 'react-native';
import { Divider, Layout, Text, Select, Icon, Datepicker } from '@ui-kitten/components';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
const Input = ({
    name,
    value,
    setCurrentField,
    setTmpValues,
    lable,
    handleChangeData
}) => {
    const { width } = Dimensions.get('window');
    const gender = useMemo(
        () => [
            { value: 1, text: 'Nam' },
            { value: 0, text: 'Nữ' }
        ],
        []
    );
    const showTextFiled = useCallback((value, name) => {
        if (name === 'birthday') {
            var mm = value.getMonth() + 1;
            var dd = value.getDate();
            var yy = value.getFullYear();
            value = `${dd}/${mm}/${yy}`
        }
        return `${value} ${
            ['birthday'].includes(name)
                ? ""
                : ''
            }`;
    }, []);
    return (
        <>
            <TouchableOpacity
                onPress={() => {
                    if (name !== 'gender') {
                        setCurrentField(name);
                        setTmpValues(value);
                        //show model neys !=gender
                    }
                }}
                activeOpacity={0.5}
            >
                <Layout style={styles.Layout1}>
                    <Text
                        style={styles.headerText}
                        appearance="hint"
                        category="s1"
                    >
                        {lable}
                    </Text>
                    {/* view gender */}
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        {name === 'gender' ? (
                            <Select
                                style={{
                                    width: width / 3.2
                                }}
                                data={gender}
                                selectedOption={gender.find(
                                    ({ value: genderValue }) =>
                                        genderValue === value
                                )}
                                onSelect={({ value }) =>
                                    handleChangeData('gender', value)//run o  day thi no chay o cai cha truyenf vo
                                }
                            />
                        ) : (
                                //view con lai
                                <Text style={styles.text} category="s1">
                                    {showTextFiled(value, name)}
                                </Text>
                            )}
                    </View>
                    <Icon name='arrow-ios-forward' style={{ width: 32 }} width={32} height={32} fill='#C5CEE0' />

                </Layout>
            </TouchableOpacity>
            <Divider />
            {name === 'height' && <Layout style={styles.LayoutBreak} />}
        </>
    );
};

export default Input;
