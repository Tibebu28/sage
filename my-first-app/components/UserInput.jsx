import { useState } from "react"

import { Text, TextInput,View } from "react-native"

export default function UserInput() {
     const [name,setName] = useState("")
     const [password,setPassword] = useState("")
    return (
       <View>
            <TextInput
                placeholdeer="Enter your name"
                value={name}
                onChangeText={setName}
                style={{borderWidth:1, padding:"20px"}} />
                <Text>your name is: {name}</Text>
                 <TextInput
                placeholdeer="Enter your password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={{borderWidth:1, padding:"20px"}} />
                
       </View>
    )
}