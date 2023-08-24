import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import estilo from "../estilo";
import produtos from "./Produtos";

export default () => {
   
    const getList = ({item}: any) => {
            return (<View style={styles.listItem}>
                        <Text>{item.id}) {item.nome} tem R$ {item.preco}</Text>
                    </View>    )
    }

    return (
        <>
            <Text style={estilo.txtG}>
                Lista de Produtos
            </Text>
            <FlatList 
                data={produtos} 
                keyExtractor={ i => i.id.toString() }
                renderItem={getList}
            />
            
        </>
    )
    
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      padding: 16,
      paddingTop: 100,
    },
    listItem: {
      backgroundColor: "orange",
      borderWidth: 1,
      borderColor: "#333",
      padding: 25,
    },
  });