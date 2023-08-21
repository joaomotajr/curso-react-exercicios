import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button } from 'react-native';
// import Primeiro from './components/Primeiro'
// import Comp, {Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax';
// import AleatorioTS from './components/AleatorioTS';
// import Pai from './components/direta/Pai';
// import PaiInd from './components/indireta/Pai'
// import PaiIndTS from './components/indireta/PaiTS'
// import ContadorV2 from './components/contador/ContadorV2';
// import Diferenciar from './components/Diferenciar';
// import Parimpar from './components/Parimpar';
import Familia from './components/relacao/Familia';
import Membro from './components/relacao/Membro';
//export default () => <View><Primeiro /></View>
import UsuarioLogado from './components/UsuarioLogado';

export default () => (
  <SafeAreaView style = {style.App}>
    {/* <AleatorioTS min={3} max={20}></AleatorioTS> */}
    {/* <ContadorV2 /> */}
    {/* <Diferenciar /> */}
    {/* <MinMax min={3} max={20} /> */}
    {/* <MinMax min={8} max={9} /> */}
    {/* <Comp1 /> */}
    {/* <Comp2 /> */}
    {/* <Comp /> */}
    {/* <Primeiro /> */}
    {/* <Pai /> */}
    {/* <PaiInd /> */}
    {/* <PaiIndTS /> */}
    {/* <Parimpar num={1} /> */}
    {/* <Familia>
      <Membro nome="João" sobreNome="Mota" element={<Text> Elemento TEXT</Text>}/>
      <Membro nome="John" sobreNome="Moto" element={<Button title='BTN' />}/>   
    </Familia> */}
    {/* <Text>{"ererer"}</Text> */}
    <UsuarioLogado  nome={'Gui'} email={'gui@gui.com'} />
    <UsuarioLogado nome={'Ana'} />
    <UsuarioLogado nome={''} />
 
  </SafeAreaView>
)
const style = StyleSheet.create({
  App: {    
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})