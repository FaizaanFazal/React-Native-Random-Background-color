import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [bgcolor,setBgcolor]=useState("#000000");

  const generatecolor=()=>{
    const hexc="0123456789ABCDEF";
    let clr="#";
    for (let i = 0; i <6 ; i++) {
      clr +=hexc[Math.floor(Math.random() * 16)];
    }
    setBgcolor(clr)
  }
 
  return(
    <>
    <StatusBar backgroundColor={bgcolor}/>
    <View style={[styles.container,{backgroundColor:bgcolor}]}>
        <TouchableOpacity onPress={generatecolor}>
          <View style={styles.btnouter}>
            <Text style={styles.btntext}>Magic Baby!</Text>
          </View>
        </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  btnouter:{
    backgroundColor:"#6A1B4D",
    borderRadius:20,
    paddingHorizontal:20,
    paddingVertical:8,
  },
  btntext:{
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase",
  }
});

export default App;
