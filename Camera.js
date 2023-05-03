import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

export default function App() {

  const [permission, requestPermission] = Camera.useCameraPermissions();

  console.log(permission);

  return (
    <View style={styles.container}>
      <Text>Hello Didinha</Text>
      <Button title="Abrir Câmera" onPress={requestPermission}></Button>
      <Camera style={styles.camera} type={CameraType.back}></Camera>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: 300,
    height: 400
  }
});
