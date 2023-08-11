import React, {Fragment} from "react";
import { View, Text } from "react-native";
import estilo from "./estilo";


type props = {
    principal: string,
    secundario: string
}

export default ({principal, secundario}: props)  => {
    return (
        <Fragment>
            <Text style={estilo.txtG}>{principal}</Text>
            <Text>{secundario}</Text>    
        </Fragment>
    )
};


