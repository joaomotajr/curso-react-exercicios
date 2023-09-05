import React from "react";
import { View } from "react-native";

type props = {
    cor: string
    lado?: number | null
}

export default ({cor, lado}: props) => {
    const pLado = lado || 50
    return (
        <View style={{
            height: pLado,
            width: pLado,
            backgroundColor: cor || '#000'
        }} />
    )
}
