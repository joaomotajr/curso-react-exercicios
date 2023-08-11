import React, { useState } from "react"; 
import { Text, Button, TextBase } from "react-native";
import estilo from "./estilo";


type props = {
    inicial: number
}

export default ({inicial = 0, passo = 1})  => {
   const [numero, setNumero] = useState(inicial)

    const inc = () => {
        setNumero(numero + passo)
        console.warn(numero)
    }
     const dec = () => setNumero(numero - passo)
     
    return (
        <>
        <Text style={estilo.txtG}>{numero}</Text>          
        <Button title="+" onPress={inc} /> 
        <Button title="-" onPress={dec} /> 
        </>
    )
}