import { useState, createContext} from "react"
import ComponentB from "./ComponentB.tsx"

export const UserContent = createContext<string | null>(null);

function ComponentA(){

    const [user, setUser] = useState("Tagupa")

    return(
        <div className="box">
            Component A
            <h2>{`Hello ${user}`}</h2>

            <UserContent.Provider value={user}>
                <ComponentB/>
            </UserContent.Provider>
        </div>
    )
}

export default ComponentA