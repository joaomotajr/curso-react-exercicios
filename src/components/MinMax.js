import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default props => <Text style={estilo.txtG}>
    Valor {props.max}  é maior que {props.min}
</Text>