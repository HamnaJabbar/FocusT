import React from 'react';
import {View,StyleSheet} from 'react-native';

import {TextInput} from 'react-native-paper';
import {useState} from 'react';
import {RoundedButton} from '../features/Components/RoundButton';

export const Focus = () =>{
    const[ subject ,setSubject] = useState(null)
    console.log(subject);
    return(
    <View style={styles.container}>
       <View> style={styles.inputContainer}
        <TextInput
         style={styles.textinput} 
         onChangeText={setSubject}
         label="What would you like to Focus on?"/>
         <View style={styles.button}>
        < RoundedButton title = "+" />
        </View>
     </View>
     </View>
          );
    };

const styles= StyleSheet.create({
    container:{
        flex :1,
        
    },
    button:{
        justifyContent: "center"
    },
    textinput:{
     flex:1,
     marginRight:10,
    },
    inputContainer :{
        flex:0.5,
        padding :50,
        justifyContent : 'center',
        flexDirection : 'row',
    },
   
     
})
