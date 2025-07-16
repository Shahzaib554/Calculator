import { NewAppScreen } from '@react-native/new-app-screen';
import { useState } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

function App() {

const [displayValue, setDisplayValue] = useState('2+5');

  return (
    <View style={styles.wrapper}>
      <TextInput style={styles.display} value={displayValue} placeholder="Type here..." />
      <View>
        <TouchableOpacity>
  
        </TouchableOpacity>
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee'
  },
  display: {
    width: '100%',
    backgroundColor: 'white',
    height: 100,
    borderRadius: 10,
    textAlign: 'right',
    padding: 10,
    fontSize: 28,
    color: 'black',
  },
  btn: {
    color: '#c2ffde'
      }
});

export default App;
