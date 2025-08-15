import { Text, View,Button } from "react-native";
import About from "./About";
import { ImageBackground } from "react-native-web";

export default function Home({navigation}){
    return (
        
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Button title="LazyLoad" onPress={()=> navigation.navigate("LazyLoad")} />
        <Text>This is Home page</Text>
        <Button title="About"  onPress={()=> navigation.navigate("About")} />
        </View>
    )
}