import React, {Fragment} from "react";
import { Text } from "react-native";
import estilo from "../estilo";
import produtos from "./Produtos";

export default () => {
    function getList() {
        return produtos.map((p) => {
            return <Text key={p.id}>{p.id}) {p.nome} tem R$ {p.preco}</Text>   
        })
    }

    return (
        <>
            <Text style={estilo.txtG}>
                Lista de Produtos
            </Text>
            {getList()}
        </>
    )
}