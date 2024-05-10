import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'


function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Hello</Text>
            </View>
        </SafeAreaView>
    )
}

export default Index;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red"
    }
})