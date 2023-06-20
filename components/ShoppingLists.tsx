import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';

const ShoppingLists = () => {
  const [items, setItems] = useState<{ id: string; text: string }[]>([]);

  const [text, setText] = useState('');

  const addItem = () => {
    if (text.trim()) {
      setItems([...items, { id: Math.random().toString(), text }]);
      setText('');
    }
  };

  const deleteItem = (itemId: string) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const renderItem = ({ item }: { item: { id: string; text: string } }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item.text}</Text>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>List Your Shopping Items!</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Add new item"
        />
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  list: {
    flex: 1,
    paddingTop: 70,
  },
  item: {
    backgroundColor: '#F5A9B8',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#ffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: '#ffffff',
    color: '#F5A9B8',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 5,
    borderRadius: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#F5A9B8',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#F5A9B8',
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading: {
    color:'#F5A9B8',
    fontSize: 34,
    fontWeight:'bold',
    textTransform: 'capitalize',
    textAlign: 'center',
    paddingTop: 50,
  },
});

export default ShoppingLists;