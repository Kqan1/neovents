import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#e2e8f0",
    }
})