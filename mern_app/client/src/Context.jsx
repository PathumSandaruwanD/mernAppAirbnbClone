import { createContext, useState } from "react";

export const userContext = createContext({ });

export function userContextProvider({children}){

    const [user,setUser] = useState(null)

    return(
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider >
    );
}