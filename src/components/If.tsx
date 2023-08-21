import { ReactElement } from "react"
import {usr} from "../Util/types"

export default (props: usr): ReactElement | null => {
    if(props.nome) {
        return <>{props.children}</>
    } else {
        return null
    }
}