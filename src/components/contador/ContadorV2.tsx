import React, { useState } from "react"; 
import { Text, Button, TextBase } from "react-native";
import estilo from "../estilo";
import ContadorDisplay from "./ContadorDisplay";
import ContadorBotoes from "./ContadorBotoes";

export default ()  => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num + 1)

    const teste = (vr: number) => {

    }

    return (
        <>
        <Text style={estilo.txtG}>
            ContadorV2
        </Text>
        <ContadorDisplay  num={num} />
        <ContadorBotoes inc={inc} dec={dec} />
        </>
    )

   
}