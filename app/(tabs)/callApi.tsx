// HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CallAPI from '../../components/callAPI'; // Adjust the path as needed

const HomeScreen: React.FC = () => {
  const [showCallAPI, setShowCallAPI] = useState<boolean>(false);

  const toggleCallAPI = () => {
    setShowCallAPI(!showCallAPI);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textSubHeader}>API Call Page</Text>
      <TouchableOpacity onPress={toggleCallAPI}>
        <View style={styles.whiteBox}>
          <Text style={styles.textButtons}>Make API Call</Text>
        </View>
      </TouchableOpacity>
      {showCallAPI && <CallAPI />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F3F2F8',
    justifyContent: 'flex-start',
  },
  whiteBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    borderRadius: 20,
    width: 350,
    height: 'auto',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    marginLeft: 40,
    marginTop: 100,
  },
  textSubHeader: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginLeft: 40,
    marginTop: 60,
    marginBottom: 10,
  },
  textButtons: {
    fontWeight: 'regular',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default HomeScreen;