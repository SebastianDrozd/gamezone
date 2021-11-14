import React from 'react'

import { StyleSheet,View ,Text, Button } from 'react-native'

export default function ReviewDetails({navigation}){


    const pressHandler = () => {
            navigation.goBack();
    }

    return (
        <View>
            <Text style={styles.container}>{navigation.getParam('title')}</Text>
            <Text style={styles.container}>{navigation.getParam('body')}</Text>
            <Text style={styles.container}>{navigation.getParam('rating')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 24
    }
})