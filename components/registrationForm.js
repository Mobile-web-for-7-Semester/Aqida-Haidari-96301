import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  
    
} from 'react-native';
import Textarea from 'react-native-textarea';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default function registerForm() {
  return (
    <View style={styles.form}>
        <Text style={styles.header}>Registration Form</Text>
        <TextInput style={styles.input}   placeholder='Full Name'/>
        <TextInput style={styles.input}   placeholder='Email'/>
        <TextInput style={styles.input}   placeholder='phone' keyboardType='numeric'/>
        <DropDownPicker style={styles.drapdown} items={[ {label: 'Afghanistan', value: 'Afghanistan'},
        {label:'Iran',value:'Iran'},
        {label:'pakistan', value:'pakistan'}
    ]}/>
        <Textarea containerStyle={styles.textareaContainer}
          style={styles.textarea}
          maxLength={120}
           placeholder={'Description . . .'}
  />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTxt}>Send</Text>
  
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    form:{
        alignSelf:"stretch",
        paddingLeft:40,
        paddingRight:40,
        
    },
    header:{
        fontSize:20,
        borderBottomColor:'green',
        borderBottomWidth:1,
        paddingBottom:10,
        marginBottom:10,

    },
    input:{
        border:'1px solid  gray ',
        backfaceVisibility:'visiable',
        padding:20,
        display:'block',
        borderWidth:1,
        focus:'autoFocus',
        marginBottom:10

    },
    botton:{
        backgroundColor:'green',
        
        

    },
    buttonTxt:{
        backgroundColor:'green',
        padding:20,
        color:'white',
        fontWidth:'bold',
        textAlign:'center'
    },
      textareaContainer: {
        height: 180,
      },
     textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        padding:10,
        border:'1px solid  gray ',
    
      },
      drapdown:{
        border:'1px solid  gray ',
        padding:20,
        borderWidth:1,
        marginBottom:10,
        focus:'autoFocus',
      }
});
