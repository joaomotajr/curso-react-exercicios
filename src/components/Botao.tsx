import React from "react";   
import { Button } from "react-native";

export default ()  => {

    function Executar(): void {
        console.warn('Executando #1...');
      }

    return (
        <>
        <Button title="Executar #1" onPress={Executar} />          
        <Button title="Executar #2" onPress={(function Executar(): void { console.warn('Executando #2 ...') })} /> 
        <Button title="Executar #3" onPress={() => console.warn('Executando #3...')} /> 
        </>
    )
};
