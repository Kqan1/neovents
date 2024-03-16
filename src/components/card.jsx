import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Card(item) {
    return (
        <View style={styles.container}>
            <Image
                src={item.data.image}
                alt=""
                style={{ aspectRatio: 1, width: "100%" }}
            />
            <Text numberOfLines={2} style={styles.title}>{item.data.title}</Text>
            <Text numberOfLines={3} style={styles.desc}>{item.data.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#e2e8f0",
        borderRadius: 10,
        padding: 10,
        gap: 6
    },
    title: {
        fontWeight: "500",
        fontSize: 18,
        fontFamily: "Poppins_500Medium",
        fontWeight: "700"
    },
    desc: {
        opacity: .8
    }
});
