import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Primeiro from './components/Primeiro'
import Comp, {Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import AleatorioTS from './components/AleatorioTS';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador2';

//export default () => <View><Primeiro /></View>

export default () => (
  <View style = {style.App}>
    {/* <AleatorioTS min={3} max={20}></AleatorioTS> */}
    {/* <MinMax min={3} max={20} />
    <MinMax min={8} max={9} /> */}
    <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro de Produto" />
    <Contador inicial={100} passo={2}/>
    {/* <Botao /> */}
    {/* <Comp1 /> */}
    {/* <Comp2 /> */}
    {/* <Comp /> */}
    {/* <Primeiro /> */}
  </View>
)
const style = StyleSheet.create({
  App: {    
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

