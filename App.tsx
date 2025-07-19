import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  const [displayValue, setDisplayValue] = useState<string>('');

  const handlePress = (val: string) => {
    if (displayValue === 'Error') {
      setDisplayValue(val);
    } else {
      setDisplayValue(displayValue + val);
    }
  };

  const calculateValue = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (e) {
      setDisplayValue('Error');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1f1f1f" />
      <Text style={styles.title}>Nexus Calc</Text>

      <TextInput
        style={styles.display}
        value={displayValue}
        placeholder="0"
        placeholderTextColor="#888"
        editable={false}
      />

      <View style={styles.buttonRow}>
        {['7', '8', '9', '+'].map((item) => (
          <CalcButton key={item} label={item} onPress={() => handlePress(item)} />
        ))}
      </View>

      <View style={styles.buttonRow}>
        {['4', '5', '6', '-'].map((item) => (
          <CalcButton key={item} label={item} onPress={() => handlePress(item)} />
        ))}
      </View>

      <View style={styles.buttonRow}>
        {['1', '2', '3', '*'].map((item) => (
          <CalcButton key={item} label={item === '*' ? '×' : item} onPress={() => handlePress(item)} />
        ))}
      </View>

      <View style={styles.buttonRow}>
        <CalcButton label="C" onPress={() => setDisplayValue('')} special />
        <CalcButton label="0" onPress={() => handlePress('0')} />
        <CalcButton label="." onPress={() => handlePress('.')} />
        <CalcButton label="÷" onPress={() => handlePress('/')} />
      </View>

      <TouchableOpacity style={styles.equalsBtn} onPress={calculateValue}>
        <Text style={styles.equalsText}>=</Text>
      </TouchableOpacity>
    </View>
  );
};

type CalcButtonProps = {
  label: string;
  onPress: () => void;
  special?: boolean;
};

const CalcButton = ({ label, onPress, special = false }: CalcButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, special && styles.specialButton]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, special && styles.specialButtonText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    padding: 20,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 26,
    color: '#f56b6b',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  display: {
    backgroundColor: '#2e2e2e',
    height: 100,
    borderRadius: 12,
    color: '#fff',
    fontSize: 36,
    textAlign: 'right',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
    elevation: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  button: {
    height: 75,
    width: 75,
    backgroundColor: '#3b3b3b',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  specialButton: {
    backgroundColor: '#ff4d4d',
  },
  specialButtonText: {
    color: '#fff',
  },
  equalsBtn: {
    backgroundColor: '#f56b6b',
    height: 80,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    elevation: 5,
  },
  equalsText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
