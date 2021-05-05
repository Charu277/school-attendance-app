import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native'

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.text}> SCHOOL ATTENDANCE</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
 container:{
   backgroundColor:'tomato'
 },
 text:{
   fontSize:20,
   fontWeight:'bold',
   textAlign:"center",
  color:'navy',
  padding:20
 }
});