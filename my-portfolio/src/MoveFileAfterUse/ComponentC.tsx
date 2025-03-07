import { useContext } from "react"
import { UserContent } from "./ComponentA.tsx"
import ComponentD from "./ComponentD.tsx"


function ComponentC(){
    const user_name = useContext(UserContent)
    return(
        <div className="box">
            Component C
            <p>{`Hello ${user_name}`}</p>
            <ComponentD/>
        </div>
    )
}

export default ComponentC