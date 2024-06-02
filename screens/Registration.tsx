import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, Linking, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import supabase from "../config/supabaseClient.js";
import { v4 as uuidv4 } from "uuid";

const height = Dimensions.get('window').height;


const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: 100,
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'DM Sans-Regular',
        fontWeight: 'bold'
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'DM Sans-Regular',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    button: {
        top: 145,
        backgroundColor: 'orange',
        paddingVertical: 7,
        width: 350,
        alignSelf: 'center',
        borderRadius: 2
    },
    input: {
        top: 120,
        margin: 14,
        borderWidth: 1,
        padding: 12,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        width: 350,
        fontSize: 20,
        fontFamily: 'DM Sans-Regular',
        fontWeight: '700',
        textAlign: 'left',
        alignSelf: 'center',
        borderBottomColor: 'orange',
    },
    sign: {
        width: 250,
        height: 50,
        top: 220,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 16,
        gap: 16,
        alignSelf: 'center'
    },
    line: {
        position: 'absolute',
        width: 73,
        height: 1,
        left: 124,
        top: 200,
        color: "#F28627",
        borderBottomColor: '#F28627',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    text2: {
        color: '#980606',
        left: 188,
        top: 13,
    },
    text3: {
        color: '#7A7373',
        alignSelf: 'center',
        top: 210,
    },
    text4: {
        color: '#7A7373',
        fontSize: 12,
        alignSelf: 'center',
        fontFamily: 'DMSans-Regular',
        top: -height * 0.225,
    },
    text5: {
        color: '#EA4335',
        position: 'absolute',
        left: 116,
        top: 250,
        fontSize: 14,
        fontFamily: 'DMSans-Regular',
    },
    text6: {
        top: 50,
        fontSize: 14,
        alignSelf: 'center',
    },
    text7: {
        top: 70,
        fontSize: 14,
        alignSelf: 'center',
    }
})

export default function Registration() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [confirm, setConfirm] = useState("");
    const [userID, setUserID] = useState<string | null>(null);
    const [formError, setFormError] = useState(null);
    const [passError, setPassError] = useState(false);
    const id = uuidv4();
    const showPassError = () => {
        setPassError(true);
    };
    // const SignUp = async () => {
    //     console.log("?")
    //     let { data, error } = await supabase.auth.signUp({
    //         email: email,
    //         password: password,
    //     })
    // }
    const checkText = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (!email || !password || !confirm || password !== confirm) {
            showPassError();
            return
        }
        navigation.navigate("Name")
        const { data, error, } = await supabase
            .from('User')
            .insert([{ id, email, password }])
            .select()

        if (error) {
            console.log(error)
        }
        if (data) {
            console.log(data)
            setFormError(null)
        }


    }

    return (
        <View style={{ backgroundColor: "white", width: '100%', height: '100%' }}>
            <Image
                source={{ uri: 'https://i.imgur.com/ANgQgEJ.png' }}
                style={{ width: 300, height: 155, top: 50, alignSelf: 'center' }} />
            <TextInput
                style={styles.input}
                value={email}
                placeholder="Enter Email"
                placeholderTextColor="#7A7373"
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={password}
                placeholderTextColor="#7A7373"
                onChangeText={setPass}
                placeholder={"Enter Password "} />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={confirm}
                placeholderTextColor="#7A7373"
                onChangeText={setConfirm}
                placeholder={"Confirm Password"} />
            <TouchableOpacity
                style={styles.button}
                onPress={checkText}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.sign}
                onPress={() => console.log("google log in")}>
                <Image
                    source={{ uri: 'https://i.imgur.com/lErdBSo.png' }}
                    style={{ width: 250, height: 50, margin: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.sign}
                onPress={() => console.log("facebook log in")}>
                <Image
                    source={{ uri: 'https://i.imgur.com/Td3oewK.png' }}
                    style={{ width: 250, height: 50, }} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.sign}
                onPress={() => console.log("apple log in")}>
                <Image
                    source={{ uri: 'https://i.imgur.com/QQPTpll.png' }}
                    style={{ width: 250, height: 50, margin: -10 }} />
            </TouchableOpacity>
            <View
                style={{
                    borderBottomColor: '#F28627',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: 73,
                    height: 0,
                    left: 94,
                    top: 25,
                }}
            />
            <View
                style={{
                    borderBottomColor: '#F28627',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: 73,
                    height: 0,
                    left: 221,
                    top: 25,
                }}
            />
            <Text style={styles.text2}>or</Text>
            <Text style={styles.text3}>Already Have an Account? <Text style={{
                textDecorationLine: 'underline',
                color: '#7A7373',

            }}
                onPress={() => navigation.navigate("Name")}
            >Log In</Text></Text>
            <Text style={styles.text4}>*Password has to contain between 8-12 characters, a special {"\n"}character, uppercase letter and a number *</Text>
            {passError && <Text style={styles.text5}>Passwords Comfirmation Failed. Try Again</Text>}
        </View>
    );



}