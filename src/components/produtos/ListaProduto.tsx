import React, {Fragment} from "react";
import { Text } from "react-native";
import estilo from "../estilo";
import produtos from "./Produtos";

export default () => {
    return (
        <>
            <Text style={estilo.txtG}>
                Lista de Produtos
            </Text>
            {produtos.map((p) => {
                return <Text>{p.id}</Text>   
            })}
        </>
    )
}