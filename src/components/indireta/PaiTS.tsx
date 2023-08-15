import React, {useState} from "react"
import Filho from "./FilhoTS"
import { Text } from "react-native";
import estilo from "../estilo";

export default () => {

    const [num, setNum] = useState(0)

    const exibirValor = (numero: number) => {
        setNum(numero);
    }
    
    return (
        <>
            <Text style={estilo.txtG}>{num} </Text>
            <Filho 
                min={1} 
                max={60}
                funcao={exibirValor} 
            />
     
        </>
    )
}
