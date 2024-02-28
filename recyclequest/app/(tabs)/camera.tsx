import { StyleSheet, Button, SafeAreaView, Image} from 'react-native';
import { Text, View} from '@/components/Themed';
import {Link} from 'expo-router'
import { Camera } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import {shareAsync} from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';


export default function TabTwoScreen() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | undefined>();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState<boolean | undefined>();
  const [photo, setPhoto] = useState<boolean | undefined>();


  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
},[]); 

if (hasCameraPermission === undefined){
  return <Text>Requesting permissions...</Text>
} else if (!hasCameraPermission){
  return <Text>Permission for camera not granted. Please change this in settings.</Text>
}

let takePic = async () => {
  let options = {
    quality: 1,
    base64: true,
    exif: false
  };

  let newPhoto = await cameraRef.current.takePictureAsync(options);
  setPhoto(newPhoto);
};


if (photo) {
  let sharePic = () => {
    shareAsync(photo.uri).then(() => {
      setPhoto(undefined);
    });
  };

  let savePhoto = () => {
    MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
      setPhoto(undefined);
    });
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
      <Button title="Share" onPress={sharePic} />
      {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
      <Button title="Discard" onPress={() => setPhoto(undefined)} />
      <Link href="/results" asChild>
      <Button title="Results" />
      </Link>
    </SafeAreaView>
  );
  }
  

  return (
    <View style={styles.container}>
      <Camera style={styles.container} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Button title = "Take Pic" onPress={takePic} />
        </View>

      </Camera>
    </View>
  
  );
}



 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDFFCC',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    margin: 140,
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  }
 
});