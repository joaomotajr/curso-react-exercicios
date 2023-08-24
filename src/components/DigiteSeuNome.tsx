import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import estilo from "./estilo";


export default () => {
    const [nome, setNome] = useState(String)

    return (
    <View>
        <Text>Nome: </Text>
        <TextInput style={estilo.txtG}
            placeholder="Digite seu nome: "
            value={nome}
            onChangeText={nome => setNome(nome)}
        />        
    </View>)
}