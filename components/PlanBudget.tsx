import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const PlanBudget = () => {
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState(0);
  const calculateTotal = () => {
    
    const CalculatedTotal = parseInt(quantity) * parseInt(amount) - parseInt(discount);
     setTotal(CalculatedTotal);
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Plan Your Budget</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Quantity:</Text>
        <TextInput
          style={styles.input}
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
          placeholder="Enter quantity"
          placeholderTextColor="#FFFFFF"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Amount:</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="Enter amount"
          placeholderTextColor="#FFFFFF"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Discount:</Text>
        <TextInput
          style={styles.input}
          value={discount}
          onChangeText={setDiscount}
          keyboardType="numeric"
          placeholder="Enter discount"
          placeholderTextColor="#FFFFFF"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={calculateTotal}>
        <Text style={styles.buttonText}>Total: {total}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    color: '#F5A9B8',
    fontSize: 34,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center',
    paddingTop: 50,
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#F5A9B8',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#F5A9B8',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#F5A9B8',
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: '#F5A9B8',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PlanBudget;
