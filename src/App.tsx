import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Primeiro from './components/Primeiro'
import Comp, {Comp1, Comp2 } from './components/Multi'
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import AleatorioTS from './components/AleatorioTS';

//export default () => <View><Primeiro /></View>

export default () => (
  <View style = {style.App}>
    <AleatorioTS min={3} max={20}></AleatorioTS>
    <MinMax min={3} max={20} />
    <MinMax min={8} max={9} />
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

