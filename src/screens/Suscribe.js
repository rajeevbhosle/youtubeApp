import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header'


const Suscribe = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header />

            <View style={{
                marginTop: 80,
                backgroundColor: "red",
            }}>
                <Text>subs videos</Text>


            </View>

        </View>
    )
}

export default Suscribe