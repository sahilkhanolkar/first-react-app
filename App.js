import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';


export default function App() {
  const [balance, onChangebalance] = React.useState(1000)
  const [amount, setAmount] = React.useState(0)

  const add = () => {
    onChangebalance( parseInt(balance) + parseInt(amount))
  }

  const subtract = () => {
    onChangebalance( parseInt(balance) - parseInt(amount))
  }

  return (
    <View style={styles.container}>
      <Text>XXXXXXXXXXXXXXXXX- ATM -XXXXXXXXXXXXXXXXXXXX</Text>

     
      <Text>Balance: {balance}</Text>
      
  
        <TextInput
        style={styles.input}
        onChangeText={(value)=>{
        setAmount(value)
        }}
        value= {amount}
        placeholder="Amount"
        keyboardType="numeric"
      />
      
        <TouchableOpacity
        onPress={() => add()}
        style={styles.button}>
        <Text style={styles.buttonText}>Deposit</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => subtract()}
        style={styles.button}>
        <Text style={styles.buttonText}>Withdraw</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "grey",
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
}
);
