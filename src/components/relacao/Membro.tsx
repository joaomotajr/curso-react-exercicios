import React, { ReactComponentElement, ReactElement } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

type props = {
    nome: string
    sobreNome: String
    element?: ReactElement
}

export default ({nome, sobreNome, element}:props) => {
    return (
        <>
        <Text style={Estilo.txtG}>
            {nome} {sobreNome}
             
        </Text>
        {element}
        </>
    )
}