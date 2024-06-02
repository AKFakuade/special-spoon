import React from 'react';
import { useEffect, useState } from 'react';
import supabase from "../config/supabaseClient.js";
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from "expo-router";


import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    TextInput,
    Linking,
} from 'react-native';

const styles = StyleSheet.create({
    input: {
        top: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        width: 330,
        fontWeight: '700',
        textAlign: 'left',
        borderBottomColor: 'orange',
        fontSize: 20,
        alignSelf: 'center',
    },
    text5: {
        color: '#EA4335',
        position: 'absolute',
        left: 236,
        top: 230,
        fontSize: 14,
        fontFamily: 'DMSans-Regular',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    button: {
        top: 185,
        backgroundColor: 'orange',
        paddingVertical: 7,
        width: 330,
        alignSelf: 'center',
        borderRadius: 2,
    },
    arrow: {
        width: 30,
        height: 20,
        top: 55,
        left: 340,
    }
});

function Name() {
    const navigation = useNavigation();
    const { id } = useLocalSearchParams();
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [formError, setFormError] = useState(null);
    const showNameError = () => {
        setNameError(true);
    };
    const addName = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (!name) {
            showNameError();
            return
        }
        else {
            console.log("success.")
        }
        const { data, error } = await supabase
            .from('User')
            .update([{ name }])
            .eq('id', id)
            .select()
        if (error) {
            console.log(id)
            console.log(error)
            console.log(name)
        }
        if (data) {
            console.log(data)
            setFormError(null)
        }

    }
    return (
        <View style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
            <Image
                source={{ uri: 'https://i.imgur.com/ANgQgEJ.png' }}
                style={{ width: 280, height: 150, top: 50, alignSelf: 'center' }}
            />
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder={'Enter Full Name'}
                placeholderTextColor="#7A7373"
            />
            <Image
                source={{ uri: 'https://i.imgur.com/Fn6owhe.png' }}
                style={styles.arrow}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={addName}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            {nameError && <Text style={styles.text5}>Enter your full name.</Text>}
        </View>
    );
}
export default Name;
