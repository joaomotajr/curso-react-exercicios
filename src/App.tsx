import React from 'react';
import { View, StyleSheet } from 'react-native';
// import Primeiro from './components/Primeiro'
// import Comp, {Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax';
// import AleatorioTS from './components/AleatorioTS';
// import Pai from './components/direta/Pai';
// import PaiInd from './components/indireta/Pai'
// import PaiIndTS from './components/indireta/PaiTS'
import ContadorV2 from './components/contador/ContadorV2';

//export default () => <View><Primeiro /></View>

export default () => (
  <View style = {style.App}>
    {/* <AleatorioTS min={3} max={20}></AleatorioTS> */}
    <ContadorV2 />
    {/* <MinMax min={3} max={20} /> */}
    {/* <MinMax min={8} max={9} /> */}
    {/* <Comp1 /> */}
    {/* <Comp2 /> */}
    {/* <Comp /> */}
    {/* <Primeiro /> */}
    {/* <Pai /> */}
    {/* <PaiInd /> */}
    {/* <PaiIndTS /> */}

  </View>
)
const style = StyleSheet.create({
  App: {    
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})