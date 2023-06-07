import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async (formData) => {

        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        else {
            setIsLoading(false)
            //Set the state
            setError(null)
            setIsLoading(false)

            //Save to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //Update the auth context
            dispatch({ type: 'LOGIN', payload: json })
        }
    }

    return { login, isLoading, error }
}
