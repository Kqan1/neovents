import { StyleSheet, View } from "react-native";
import React from "react";

export default function GridView(props) {
    const { data, col = 2, renderItem } = props;
    return (
        <View style={styles.container}>
            {data.map((item, index) => {
                return (
                    <View key={index} style={{ width: 100 / col + "%" }}>
                        <View style={{ paddingHorizontal: 2.5, paddingVertical: 5 }}>{renderItem(item)}</View>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {width: '100%', flexDirection: 'row', flexWrap: 'wrap'},
});
