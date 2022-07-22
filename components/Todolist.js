import { StyleSheet, Text, View, SafeAreaView,FlatList,ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Input,Icon,Button,SpeedDial,Dialog } from "@rneui/themed";
import DialogInput from 'react-native-dialog-input';


import Swipe from './Swipe';
const initTask =[



]


const Todolist = () => {
    //detection du contenu de mon input
  const[getText, setText]=useState();
    // initialisation des getteurs et setteurs pour les taches
  const[getTask, setTask]=useState(initTask);

  const [open, setOpen] = React.useState(false);

  const [openDialog, setOpenDialog] = React.useState(false);

  
  


  // Determine ce que contient l'input
  const textChange = (textValue) => {
    
    console.log("Textinput", textValue);// mise à jour de la valeur de mon input
    setText(textValue);
    
    }
    // fonction ajouter

    const ajouter = (textValue) => { 
        // verifie le getteur avec l'action ajouter
      
        // destructuration du tableau
        if(textValue !=""){
        setTask([

            {id: getTask.length+1,
            tache:textValue},
            ...getTask,

        ])
        // Remise à zéro de mon formulaire
       // setText("")
        }
     }
     
    
                    

    const supprimer = (id) => { 
    

        console.log("salut master gg",id)

        const filterTask= getTask.filter(item=>item.id!=id) //filtrer les taches à partir de l'id
        
        console.log(filterTask)
        

        setTask(filterTask)// mettre à jour le filterTask
     }

     
  return (
   
        <SafeAreaView style={styles.container}>

   

      <FlatList
        data={getTask}
        renderItem={({item})=><Swipe tache={item.tache} id={item.id} suppCallBack={supprimer} />} //permet l'affichage du composant Swipe
        keyExtractor={item => item.id}
        ListEmptyComponent={()=><Text style={styles.flattext}> Attention !Il n'y a pas de tache</Text>}
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
      
      <DialogInput isDialogVisible={openDialog}
            title={"TACHES"}
            message={"Mes taches"}
            hintInput ={"Entrez vos taches"}
            submitInput={ (inputText) => {ajouter(inputText)} }
            closeDialog={ () => setOpenDialog(!openDialog)}>
    </DialogInput>
      
      <SpeedDial 
      overlayColor='rgba(245, 40, 145, 0)'
    style={{height:755}}
    isOpen={open}
    icon={{ name: 'edit', color: '#fff' }}
    openIcon={{ name: 'close', color: '#fff' }}
    onOpen={() =>  setOpenDialog(!openDialog)}
    onClose={() => setOpen(!open)}
  >
 
  </SpeedDial>
      
        </SafeAreaView>
 
  )
}

export default Todolist

const styles = StyleSheet.create({

    container:{

        



    },



  flattext:{
  color:'red',
  textAlign:'center',
  fontSize:25
  }
})