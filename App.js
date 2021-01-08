import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MyData = () => {
  return(
    <Text>wah wah</Text>
  )
}
export default function App() {
  const diap = ['eat','sleep','code']
  const listdc = diap.map((data=>{
    return <Text>{data}</Text>
  }))
  return (
    <View style={styles.container}>
      <Text>{Math.random()}</Text>
      <Text>Alka</Text>
      {listdc}
      <MyData/>
      <MyData/>
      <MyData/>
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
});
