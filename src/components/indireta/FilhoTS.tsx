import React from "react"
import { Button } from 'react-native'

type props = {
    min: number,
    max: number,
    funcao: Function
}

export default ({min, max, funcao}:props) => {
    
    const gerarNumero = (pMin: number, pMax: number):number => {
        const fator: number = pMax - pMin + 1;
        return (Math.random() * fator) + pMin;
    };

    return (
        <>
            <Button 
                title="Executar Ind TS" 
                onPress={() => {
                        const n = gerarNumero(min, max)
                        funcao(n)
                    }
                }
            />            
        </>
    )
}