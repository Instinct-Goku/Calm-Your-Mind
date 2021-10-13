import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CustomRow from './CustomRow';
import Data from './Data';

const DATA = Object.keys(Data);
const wData = Data;

const CustomListview = () => (
    <View  style={styles.container}>
        <FlatList
                data={DATA}
                renderItem={({ item }) => <CustomRow
                    title={item}
                    url = {wData[item].url}
                    keyExtractor={item => wData[item].id}
                />}
            />
    </View >
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CustomListview;