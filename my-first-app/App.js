import React from "react";
import { Text, View, Image, TextInput, Button } from "react-native";


export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
      <Text style={{fontSize:30}}>my first react native app </Text>
      <Image source={{uri:"https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_1280.jpg"}} style={{width:"300px",height:200}} />
      <TextInput placeholder="Enter your name" style={{borderWidth:1, padding:"20px"}} />
      <Button title="click me" onPress={()=> alert("Button is clicked")} />

    </View>
  );
}


