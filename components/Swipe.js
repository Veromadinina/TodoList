import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem,Icon,Button } from "@rneui/themed";

//({tache})= props déstructuré suppCallBack creer
const Swipe = ({tache,id,suppCallBack}) => {
  return (
    
    <ListItem.Swipeable
  rightContent={() => (
    <Button
      title="Delete"
      onPress={() => suppCallBack(id)} //on remplace supprimer par suppCallBack
      icon={{ name: 'delete', color: 'white' }}
      buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
    />
  )}
>
  <Icon name="star-half" />
  <ListItem.Content>
    <ListItem.Title>{tache}</ListItem.Title>
  </ListItem.Content>
  <ListItem.Chevron />
</ListItem.Swipeable>

        )

     }
  


export default Swipe

const styles = StyleSheet.create({})