import React from "react"
import Filho from "./Filho"

export default () => {
    let a = 10
    let b = 100
    return (
        <>
            <Filho x={a} y={b} />
            <Filho x={a + 100} y={b+ 200} />
        </>
    )
}
