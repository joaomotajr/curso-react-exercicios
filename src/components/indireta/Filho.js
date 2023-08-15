import React from "react"
import { Button } from 'react-native'

export default props => {
    
    function gerarNumero(pMin, pMax) {
        const fator = pMax - pMin + 1
        return parseInt (Math.random() * fator) + pMin
    }

    return (
        <>
            <Button 
                title="Executar Ind" 
                onPress={function() {
                            const n = gerarNumero(props.min, props.max)
                            props.funcao(n)
                        }                    

                }
            />            
        </>
    )
}