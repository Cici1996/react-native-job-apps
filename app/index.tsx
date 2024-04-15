import { Stack, useRouter } from "expo-router";
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, icons, images } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                headerStyle: {
                    backgroundColor: COLORS.lightWhite
                },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={() => { }} />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="60%" handlePress={() => { }} />
                ),
                headerTitle: ""
            }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Welcome
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={() => {
                        if(searchTerm){
                            router.push(`/search/${searchTerm}`)
                        }
                    }} />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;