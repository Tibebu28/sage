import { Text, View,TextInput,StyleSheet,Button,FlatList } from 'react-native';
import {useState} from 'react'

export default function App() {
  const [task,setTask] = useState("")
  const [tasks,setTasks] = useState([])

  const addTask = ()=>{
    if(task.trim === "") return;
    setTasks([...tasks,{id: Date.now().toString, text:task}])
    setTask("")

  }
  return (
    <View style={styles.main}>
    <Text style={styles.head}> To-Do List</Text>
    <TextInput
    style={styles.input}
    value={task}
    onChangeText={setTask}
    placeholder="Enter Task"
    placeholderTextColor="#3193de"
     />
     <Button style={styles.button} title="Add Task" onPress={addTask}  />
    <FlatList
    data={tasks}
    keyExtractor={item => item.id}
    renderItem={({item}) =>(
      <View style={styles.task}>
      <Text>{item.text}</Text>
      </View>
    )}
    />
      </View>
  )
}

const styles = StyleSheet.create({
  main:{marginTop:100},
  head:{fontSize:50, textAlign:"center",fontWeight:"bold",color:"#3193de",marginBottom:"25"},
  input:{flex:1,padding:20,borderWidth:5,borderRadius:12,height:100},
});
