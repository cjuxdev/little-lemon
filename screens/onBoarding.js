import React, { useState } from 'react';
import { View,Text, TextInput, Image,Pressable, StyleSheet  } from 'react-native';

export  function OnBoarding(){
     const [value, setValue] = useState('');

    const handlePress = () => console.log('Button pressed!');


    return (
        <>
        <View style={{flex:0.1, backgroundColor:'#dee3e9',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Image 
            source={require('../assets/Logo.png')} 
            style={styles.logo} 
            />
        </View>
        <View style={{flex:0.75, backgroundColor:'#cbd2d9',color:'black'}}>
            <Text style={{fontSize:25,marginTop:50,fontWeight:600,textAlign:'center'}}> Let us get to know you</Text>

            <View style={styles.formContainor}>
                <Text style={styles.label}>First Name:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setValue}
                    value={value}
                />
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setValue}
                    value={value}
                />
            </View>
        </View>
        <View style={{flex:0.15,backgroundColor:'#f1f4f7',padding:50,display:'flex',alignItems:'end',}}>
            <LlBtn title="Next" onPress={handlePress} style={styles.button} />
        </View>
        
        </>
    )
}


const LlBtn = ({ title, onPress }) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center'
  },
  input: {
    height: 40,
    marginBottom:10,
    borderColor: 'gray',
    backgroundColor:'#fff',
    color:'#000',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  formContainor:{
    marginTop: '20%',
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    width:'90%'
  },
  button:{
    color:'#000',
    backgroundColor:'#cbd2d9',
    width:100,
    height:40,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    fontSize:16,
    fontWeight:600,
  },
  logo:{
    width:250,
    height:60,
  }
});


