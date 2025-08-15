import { Text, View, Image, TextInput, Button } from "react-native";
import Greet from "./components/Greet";
import UserInput from "./components/UserInput";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import About from "./pages/About";
import LazyLoad from "./pages/LazyLoad";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
         <Stack.Screen name="LazyLoad" component={LazyLoad} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //    {/* input type */}
    //   <UserInput />
    //   {/* text, image, button */}
    //   <Text style={{fontSize:30}}>my first react native app</Text>
    //   <Image source={{uri:"https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_1280.jpg"}} style={{width:"300px",height:200}} />
    //   <TextInput placeholder="Enter your name" style={{borderWidth:1, padding:"20px"}}/>
    //   <Button title="click me" onPress={()=> alert("Button is clicked")}/>

    //     {/* props */}
    //   <Greet name="Abebe" />
    //   <Greet name="Kebede" />
      
    // </View>
  );
}


