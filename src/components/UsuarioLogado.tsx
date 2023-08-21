import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'
import { usr} from "../Util/types"
import If from './If'

export default (props: usr) => {
    const user = props.nome || ''
    return (
        <>
            <If nome={user}>
                <Text style={Estilo.txtG}>Usuário Logado:</Text>
                <Text style={Estilo.txtG}>
                    {props.nome} - {props.email}
                </Text>
            </If>
        </>
    )
}