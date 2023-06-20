import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';

const GuestList = () => {
  const [guests, setGuests] = useState<{ id: string; name: string; invited: boolean }[]>([]);
  const [text, setText] = useState('');

  const addGuest = () => {
    if (text.trim()) {
      const newGuest = { id: Math.random().toString(), name: text.trim(), invited: false };
      setGuests([...guests, newGuest]);
      setText('');
    }
  };

  const toggleInvite = (guestId: string) => {
    setGuests(prevGuests =>
      prevGuests.map(guest => {
        if (guest.id === guestId) {
          return { ...guest, invited: !guest.invited };
        }
        return guest;
      })
    );
  };

  const deleteGuest = (guestId: string) => {
    setGuests(prevGuests => prevGuests.filter(guest => guest.id !== guestId));
  };

  const renderItem = ({ item }: { item: { id: string; name: string; invited: boolean } }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.inviteButton}
          onPress={() => toggleInvite(item.id)}
        >
          <Text style={styles.buttonText}>{item.invited ? "Invited" : "Invite"}</Text>
        </TouchableOpacity>
        <Text style={styles.name}>{item.name}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteGuest(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Guest List</Text>
      <FlatList
        data={guests}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Enter guest name"
        />
        <TouchableOpacity style={styles.addButton} onPress={addGuest}>
          <Text style={styles.addButtonText}>Add</Text>
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
    marginTop: 20,
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
  name: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  inviteButton: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 4,
  },
  deleteButton: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#F5A9B8',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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
    color: '#F5A9B8',
    fontWeight: 'bold'
  },
  addButton: {
    backgroundColor: '#F5A9B8',
    padding: 10,
    borderRadius: 4,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  addButtonText:{
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  heading: {
    color: '#F5A9B8',
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center',
    paddingTop: 50,
  },
});

export default GuestList;
