import { StyleSheet, Text, View, SafeAreaView,FlatList } from 'react-native'
import React, { useState } from 'react'
import { Input,Icon } from "@rneui/themed";
import { ListItem } from "@rneui/themed";

const initTask =[

{
    id:1,
    tache:"Lire les mails"
},

{
    id:2,
    tache:"Planter des tomates"

}

]


const Todolist = () => {
    //detection du contenu de mon input
  const[getText, setText]=useState();
    // initialisation des getteurs et setteurs pour les taches
  const[getTask, setTask]=useState(initTask);
  


  // Determine ce que contient l'input
  const textChange = (textValue) => {
    
    console.log("Textinput", textValue);// mise à jour de la valeur de mon input
    setText(textValue);
    
    }
    // fonction ajouter

    const ajouter = () => { 
        // verifie le getteur avec l'action ajouter
        console.log(getText)
     }
     // composant header
    

     const Swipe = () => {

        return(
            <ListItem.Swipeable
  leftContent={(reset) => (
    <Button
      title="Info"
      onPress={() => reset()}
      icon={{ name: 'info', color: 'white' }}
      buttonStyle={{ minHeight: '100%' }}
    />
  )}
  rightContent={(reset) => (
    <Button
      title="Delete"
      onPress={() => reset()}
      icon={{ name: 'delete', color: 'white' }}
      buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
    />
  )}
>
  <Icon name="My Icon" />
  <ListItem.Content>
    <ListItem.Title>Hello Swiper</ListItem.Title>
  </ListItem.Content>
  <ListItem.Chevron />
</ListItem.Swipeable>

        )

     }
  return (
   
        <SafeAreaView style={styles.container}>
      <FlatList
        data={getTask}
        renderItem={({item})=><Text>{item.tache}</Text>}
        keyExtractor={item => item.id}
        ListHeaderComponent={ <Input
            placeholder='Saississez votre tache'
            onChangeText={textChange} // utilise la fonction textChange 
            value={getText}
      
            rightIcon={ <Icon
              name='chevron-right'
              size={30}
              color='blue'
              onPress={ajouter} //Action sur l'icone
            />}
          />
      
             }
      />
        </SafeAreaView>
 
  )
}

export default Todolist

const styles = StyleSheet.create({})