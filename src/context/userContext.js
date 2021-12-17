import { createContext, useState } from "react";

const userStateContext = createContext(null);

export const UserState = (props) =>{
    const [user, setuser] = useState(null);
    return(
        <userStateContext.Provider value={{user, setuser}}>
            {props.children}
        </userStateContext.Provider>
    )
}

export default userStateContext;