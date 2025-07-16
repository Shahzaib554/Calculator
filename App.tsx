import { NewAppScreen } from '@react-native/new-app-screen';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

function App() {
  const [displayValue, setDisplayValue] = useState('');

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.display}
        value={displayValue}
        placeholder="Type here..."
      />
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '7');
          }}
          style={styles.btn}
        >
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '8');
          }}
          style={styles.btn}
        >
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '9');
          }}
          style={styles.btn}
        >
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '+');
          }}
          style={styles.btn}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '4');
          }}
          style={styles.btn}
        >
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '5');
          }}
          style={styles.btn}
        >
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '6');
          }}
          style={styles.btn}
        >
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setDisplayValue(displayValue + '-');
          }}
          style={styles.btn}
        >
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
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
    height: 70,
    width: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default App;
