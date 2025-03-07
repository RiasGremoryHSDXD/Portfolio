import { useContext } from "react"
import { UserContent } from "./ComponentA.tsx"

import ComponentC from "./ComponentC.tsx"

function ComponentB(){

    const name = useContext(UserContent)
    return(
        <div className="box">

            Component B
            <h2>{`Component B ${name}`}</h2>
            <ComponentC/>
        </div>
    )
}

export default ComponentB