import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react"

export type User={
    name: string
    email: string
}

export interface UserContextInterface{
    user: User,
    setUser: Dispatch<SetStateAction<User>>
}

const defaultState={
    user: {
        name: '',
        email: ''
    },
    setUser: (user: User) => { }
 } as  UserContextInterface;

// export const UserContext= createContext<Partial<UserContextInterface>>({})   ////OR
export const userContext = createContext(defaultState);


type UserPrividerProps ={
    children: ReactNode

}
export default function UserProvider({children}: UserPrividerProps){
    const [user, setUser]=useState<User>({
        name: '',
        email: ''
    });
    return(
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}