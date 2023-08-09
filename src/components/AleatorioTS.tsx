import React from "react"
import { Text } from 'react-native'

type props = {
    min: number,
    max: number
}

export default ({min, max}: props) => {
    const delta:number = max - min + 1
    const aleatorio = (Math.random() * delta) + min
    return (<Text>
        O Valor aleatorio {aleatorio}
    </Text>
    )
}
