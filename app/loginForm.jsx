import React, { useState } from 'react';
import { Button,
        Image,
        SafeAreaView, 
        StyleSheet, 
        Text, 
        TextInput, 
        View,
        Switch, 
        Pressable,
    } from 'react-native'
import { CheckBox } from 'react-native-elements';

const logo = require("../assets/images/icons/placeholder_logo.png");
const facebook = require("../assets/images/icons/facebook_icon.png");
const instagram = require("../assets/images/icons/instagram_icon.png");
const twitter = require("../assets/images/icons/twitter_icon.png");


function LoginForm({ navigation }) {
    const [click, setClick] = useState(false);
    const {username,setUsername}= useState("");
    const {password, setPassword}= useState("");

    return (
        <View style={styles.container}>

            <SafeAreaView style={styles.loginContainer}>
                <Image source={logo} style={styles.image} resizeMode='contain' />
                <Text style={styles.title}>Login</Text>
                <View style={styles.inputView}>
                    <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' placeholderTextColor={"white"} value={username} onChangeText={setUsername} autoCorrect={false} autoCapitalize='none' />
                    <TextInput style={styles.input} placeholder='PASSWORD' placeholderTextColor={"white"} value={password} onChangeText={setPassword} autoCorrect={false} autoCapitalize='none'/>
                </View>
                <View style={styles.rememberView}>
                    <View style={styles.switch}>
                        <Switch  value={click} onValueChange={setClick} trackColor={{true : "green" , false : "gray"}} />
                        <Text style={styles.rememberText}>Remember Me</Text>
                    </View>
                    <View>
                        <Pressable onPress={() => Alert.alert("Forget Password!")}>
                            <Text style={styles.forgetText}>Forgot Password?</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Index')}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </Pressable>
                    <Text style={styles.optionsText}>OR LOGIN WITH</Text>
                </View>
                <View style={styles.mediaIcons}>
                    <Image source = {facebook} style={styles.icons}/>
                    <Image source = {instagram} style={styles.icons}/>
                    <Image source = {twitter} style={styles.icons}/>
                </View>
                <Text style={styles.footerText}>Don't Have Account?<Text style={styles.signup}>  Sign Up</Text></Text>

            </SafeAreaView>
        </View>
    )
}

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#435577",
        justifyContent: "center",
        alignItems: "center"
    },
    loginContainer: {
        alignItems: 'center',
        width: "90%",
        borderColor: '#4A608B',
        borderWidth: 1,
        borderRadius: 7
    },
    image: {
        height: 160,
        width: 170
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        paddingVertical: 40,
        color: 'white'
    },
    inputView: {
        gap: 15,
        width: '100%',
        paddingHorizontal: 40,
        marginBottom: 5
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: '#4A608B',
        borderWidth: 1,
        borderRadius: 7,
        color: "white",
    },
    rememberView: {
        width: '100%',
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 8
    },
    checkBoxContainer: {
        flexDirection: 'row',
    },
    switch: {
        flexDirection : "row",
        gap : 1,
        justifyContent : "center",
        alignItems : "center"
    }, 
    rememberText: {
        fontSize: 13,
        // paddingHorizontal: 10,
    },
    forgetText: {
        fontSize: 11,
        color: "red"
    },
    button: {
        // backgroundColor: "red",
        height: 45,
        borderColor: "#4A608B",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonView: {
        width: "100%",
        paddingHorizontal: 50
    },
    optionsText: {
        textAlign: 'center',
        paddingVertical: 10,
        color: "gray",
        fontSize: 13,
        marginBottom: 6
    },
    mediaIcons: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 23
    },
    icons: {
        width: 40,
        height: 40,

    },
    footerText: {
        textAlign: "center",
        color: "gray"
    },
    signup: {
        color: "red",
        fontSize: 13
    }
})