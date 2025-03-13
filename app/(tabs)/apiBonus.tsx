// HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { getDB } from '../../lib/supabase_crud'; 

interface DataItem {
  created_at: string;
  id: number;
}


export default function bonusPage() {

  

  const [data, setData] = useState<DataItem[]>([]); // Initialize with an empty array


  
  async function fetchData() {
    const result = await getDB();
    setData(result);
  };

  fetchData();

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>API Fetch Data Page</Text>


      <ScrollView>
        {data.map(({created_at, id}) => {
          return (
            <View key={id.toString()} style={styles.whiteBox}>
              <Text style={styles.textSubHeader}>ID:</Text>
              <Text style={styles.textButtonsLeft}>{id}</Text>
              <Text style={styles.textSubHeader}>Time Created:</Text>
              <Text style={styles.textButtonsLeft}>{created_at}</Text>
            </View>
          )
        })}
      </ScrollView>

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
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 100,
  },
  textSubHeader: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  textButtons: {
    fontWeight: 'regular',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  textButtonsLeft: {
    fontWeight: 'regular',
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    marginLeft: 30,
  },
});

