import React, { Component, ReactElement } from "react";
import { Text, TextInput } from "react-native";
import estilo from "../estilo";

interface IProps {
    qtdeNumeros?: number
}

interface IState {
    qtdeNumeros?: number
}

export default class Mega extends Component<IProps, IState> {

    constructor(p: IProps) {
        super(p)

        this.state = {
            qtdeNumeros: p.qtdeNumeros  
        } 

        this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)
    }

    alterarQtdeNumero(qtde: number) {

        this.setState({qtdeNumeros: qtde})
    }

    render(): ReactElement {
        return (
            <>
                <Text style={estilo.txtG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput 
                    keyboardType={"numeric"}
                    placeholder="Qtde Números" 
                    style={{borderBottomWidth: 1, fontSize: 28}}
                    value={this.state.qtdeNumeros?.toString()}
                    onChangeText={text => this.alterarQtdeNumero(Number(text))}
                />
            </>
        )
    }

}   
