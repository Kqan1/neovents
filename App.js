import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./src/components/header";
import GridView from "./src/components/gridView";
import mocks from "./src/mocks/events.json"
import Card from "./src/components/card";
import { useFonts } from "expo-font";
import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';

export default function App() {    

    let [fontsLoaded, fontError] = useFonts({
        Poppins_400Regular, Poppins_500Medium
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Header />
            <GridView
                data={mocks.events}
                col={2}
                renderItem={(item) => {
                    return (
                        <Card data={item} />
                    );
                }}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 28,
        paddingHorizontal: 8,
        paddingBottom: 8,
    },
});
