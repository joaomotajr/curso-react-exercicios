import React from 'react'
import { View, StyleSheet } from 'react-native'

export default () => {
    return (
        <View style={style.FlexV4}>
            <View style={style.FlexV0} />
            <View style={style.FlexV1} />
            <View style={style.FlexV2} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    FlexV0: {
        backgroundColor: '#36c9a7',
        height:300
    }, 
    FlexV1: {
        flexGrow: 3,
        backgroundColor: '#ff801a'
    }, 
    FlexV2: {
        flexGrow: 1,
        backgroundColor: '#dd22c1'
    },
})

