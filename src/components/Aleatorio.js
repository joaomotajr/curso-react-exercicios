import React from "react"
import { Text } from 'react-native'

export default ({min, max}) => {
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min
    return (<Text>
        O Valor aleatorio {aleatorio}
    </Text>
    )
}
