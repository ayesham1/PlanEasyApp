import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Notepad = () => {
  const [note, setNote] = useState("");

  const handleSaveNote = () => {
    // Logic to save the note
    console.log("Note saved:", note);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Start Typing..!</Text>
      <View style={styles.noteContainer}>
        <TextInput
          style={styles.note}
          value={note}
          onChangeText={setNote}
          placeholder="Write your note here"
          multiline
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveNote}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
    color: '#F5A9B8',
  },
  noteContainer: {
    height: 300,
    width: 400,
    backgroundColor: '#F5A9B8',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  note: {
    color: '#ffffff',
    fontSize: 16,
    textAlignVertical: 'top',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  saveButton: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#F5A9B8',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Notepad;
