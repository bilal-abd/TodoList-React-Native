import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView, Pressable, Modal } from 'react-native';

export default function App() {
  const sampleGoals = [
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ];
  const [modalVisible, showModal] = useState(false);
  const [objectifs, setObjectifs] = useState(sampleGoals);
  const [newObjectif, setNewObjectif] = useState('');
  const AddObjectif = () => {
    if (newObjectif === '') {
      showModal(!modalVisible)
      return;
    }
    setObjectifs(currentObjectif => [...currentObjectif, newObjectif]);
    setNewObjectif('');
  };

  const deleteObjectif = goalIdx => {
    setObjectifs(currentGoals => {
      return currentGoals.filter((goal, index) => index !== goalIdx);
    });
  };

  return (

    <ScrollView style={styles.space}>
      <View style={styles.space}></View>
      <View style={styles.container}>
        <Text style={styles.styleTitle}>Mes Taches Journalieres</Text>
        <TextInput
          placeholder="Ajouter une tâche"
          value={newObjectif}
          onChangeText={setNewObjectif}
          style={styles.input}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            showModal(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => showModal(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => AddObjectif()}>
                <Text style={styles.textStyle}>AJOUTER</Text>
              </Pressable>

            </View>
          </View>
        </Modal>
        <Pressable style={styles.button2} onPress={() => showModal(true)}>
          <Text style={styles.text}>Ajouter une Tache</Text>
        </Pressable>
        <StatusBar style="auto" />
        {objectifs.map((goal, index) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
            <Button style={styles.crossX} title="X" onPress={deleteObjectif.bind(this, index)} />
          </View>
        ))}
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'black',
  },
  crossX: {
    color: '#FF0000'
  },

  container: {
    flex: 1,
    backgroundColor: '#grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  space: {
    height: 100,

  },

  styleTitle: {
    fontSize: 20,
    fontWeight: "bold"
  },



  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});