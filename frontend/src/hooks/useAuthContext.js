import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context){
        throw Error('User authContext must be used inside the context provdider.')
    }

    return context;

}