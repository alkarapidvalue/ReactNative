import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { Button, StyleSheet, Text, View } from 'react-native';

const MyData = (props) => {
  return(
    <View>
    <Text>{props.name}</Text>
    <Text>{props.status}</Text>
    </View>
    
  )
}

export default function App() {
  state = {
    name:'alka',
    status:'engineer'
  }

  const diap = ['eat','sleep','code']
  const listdc = diap.map((data=>{
    return <Text key={data}>{data}</Text>
  }))
 
  return (
    <View style={styles.container}>
      <Text>{Math.random()}</Text>
      
      {listdc}
      <MyData name='Alka' status='coder'/>
      <MyData name='Puja' status='Married'/>
      <MyData name='Apurva' status='Single'/>
      {/* <Button
        title="Press me"
        
        onPress={this.handlest.bind(this,'name')}
      />  */}
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
