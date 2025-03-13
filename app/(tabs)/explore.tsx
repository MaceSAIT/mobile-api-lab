import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';


export default async function dateEvent() {

const [month, setMonth] = useState('1');
const [date, setDate] = useState('1');

const API_URL = `https://numbersapi.p.rapidapi.com/${month}/${date}/date`;

const options = {
	method: 'GET',
    url: API_URL,
	headers: {
		'x-rapidapi-key': 'b63774abbamshb77913e6f19fcaep164156jsn1e2a91362651',
		'x-rapidapi-host': 'numbersapi.p.rapidapi.com'
	}
};

async function fetchData() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();

return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Text>Enter Month: </Text>
            <TextInput 
                style={styles.input}
                onChangeText={setMonth}
                value={month}
                placeholder='Month'>

            </TextInput>
        </View>

        <View style={styles.card}>
            <Text>Enter Date: </Text>
            <TextInput 
                style={styles.input}
                onChangeText={setDate}
                value={date}
                placeholder='Date'>

            </TextInput>
        </View>
    </View>
        )
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        card: {
            borderWidth: 2,
            padding: 15,
            paddingHorizontal: 100,
            borderRadius: 30,
        },
        input: {
            borderWidth: 1,
            justifyContent: 'center',
            
        },
        button: {
            backgroundColor: 'black',
        }
    })
    