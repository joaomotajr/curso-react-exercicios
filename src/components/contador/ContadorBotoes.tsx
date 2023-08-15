import React from "react";   
import { Button, StyleSheet, View } from "react-native";

type props = {
    inc: Function,
    dec: Function
}

export default ({inc, dec}: props )  => {
    return (
        <View style={style.Botoes}>
            <Button title="+" onPress={() => inc()} />          
            <Button title="-" onPress={() => dec()} /> 
        </View>
    )
};

const style = StyleSheet.create({
    Botoes: {
        flexDirection: "row"
    }
})