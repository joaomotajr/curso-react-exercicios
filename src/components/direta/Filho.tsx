import React from "react"
import { Text } from 'react-native'
import estilo from "../estilo"

type props = {
    x: number,
    y: number
}

export default ({x,y}:props) => {
    
    return (
        <>
            <Text style={estilo.txtG}>{x}</Text>
            <Text style={estilo.txtG}>{y}</Text>
        </>
    )
}
