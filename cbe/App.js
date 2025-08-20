import {View,Button,Animated,StyleSheet } from 'react-native';
// import {Camera,CameraView} from 'expo-camera';
import {useRef} from 'react';

export default function App(){
  const moveX = useRef(new Animated.Value(0)).current;

  const moveBox = ()=> {
    Animated.spring(moveX,{
      toValue:200,
      useNativeDriver: true,
    }).start();
  }
const backBox = ()=> {
    Animated.spring(moveX,{
      toValue:-200,
      friction:3,
      useNativeDriver: true,
    }).start();
  }
  return(
    <View style={styles.container}>
      <Animated.View style={[styles.box,{transform:[{translateX:moveX}] }]} />
      <Button title="move Box" onPress={moveBox} />
      <Button title="back Box" onPress={backBox} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:"center",alignItems:"center"},
  box:{width:100,height:100,backgroundColor:"green",marginBottom:20},
});
        








  
//   const fadeAnim = useRef(new Animated.Value (0)).current;
  
//     const Animate = Animated.timing(fadeAnim,{
//       toValue: 1,
//       duration:2000,
//       useNativeDriver:false,
//     });
  

//   return(
//     <View style={styles.container}>
//     <Animated.View style={[styles.box,{opacity:fadeAnim}]} />
//     <Button title='Animate' onPress={Animate.start} />
//     <Button title='reset' onPress={()=> Animate.reset()} />
//     </View>
//   );
// }
// const styles= StyleSheet.create({
//   container:{flex:1, justifyContent:"center",alignItems:"center"},
//   box:{width:100,height:100,backgroundColor:"blue"}
// });





  

