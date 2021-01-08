import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
