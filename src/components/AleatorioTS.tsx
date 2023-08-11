import React from "react"
import { Text } from 'react-native'
import estilo from "./estilo"

type props = {
    min: number,
    max: number
}

export default ({min, max}: props) => {
    const delta:number = max - min + 1
    const aleatorio:number = (Math.random() * delta) + min
    return (<Text style={estilo.txtG}>
        O Valor aleatorio {aleatorio}
    </Text>
    )
}
