import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Primeiro from './components/Primeiro'
import Comp, {Comp1, Comp2 } from './components/Multi'

//export default () => <View><Primeiro /></View>

export default () => (
  <View style = {style.App}>
    <Text> {1 + 1}</Text>
    <Comp1 />
    <Comp2 />
    <Comp />
    <Primeiro />
  </View>
)
const style = StyleSheet.create({
  App: {    
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

