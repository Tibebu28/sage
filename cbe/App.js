import {Text, View,Image,Button } from 'react-native';
import {Camera,CameraView} from 'expo-camera';
import { useState,useRef,useEffect } from 'react';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);
  useEffect(async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  }, []);
  async function takephoto() {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync();
      setPhoto(data.uri);
    }
  }
  if(hasPermission === null) {
    return (<Text>Requesting Permission</Text>)
  }
  if(hasPermission === false) {
    return (<Text>No Permission Granted!</Text>)
  }

  return (
    <View style={{flex:0}} >
 <CameraView style={{height:500}} ref={cameraRef}/>
 <Button title='Take Photo' onPress={takephoto} />
 {photo && <Image source={{uri: photo}} style={{height:300}}/>}
    </View>
  );
}
