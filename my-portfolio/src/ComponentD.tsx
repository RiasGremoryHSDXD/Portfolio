import { useContext } from "react"
import {UserContent} from "./ComponentA.tsx"

function ComponentD(){
    return(
        <div className="box">
            Component D
            <h2>{`Hello ${useContext(UserContent)}`}</h2>
        </div>
    )
}

export default ComponentD

/*
    UseContext to share the data, 2 parts:
    1. Provider
    2. Consumer
*/