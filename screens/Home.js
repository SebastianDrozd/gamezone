import React, {useState} from 'react'

import { StyleSheet,View ,Text, Button, FlatList, TouchableOpacity } from 'react-native'

export default function Home({navigation}){
    const [reviews,setReviews] = useState([
        {title: 'Zelda breath of fresh air', rating : 4, body: 'lorem epsum' , key: 1},
        {title: 'Doom', rating : 7, body: 'lorem epsum' , key: 2},
        {title: 'Pussycat dolls', rating : 1, body: 'lorem epsum' , key: 3},
    ])

    const pressHandler = () => {
      //  navigation.navigate('ReviewDetails')
      navigation.push('ReviewDetails')

    }


    return (
        <View style={styles.container}>
          <FlatList
          data = {reviews}
          renderItem= {({item}) => (
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ReviewDetails', item)
                }}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
          )}
          />
           
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 24
    }
})