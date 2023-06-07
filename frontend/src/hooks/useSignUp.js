import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignUp = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (formData) => {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        else {
            //Set the state
            setError(null)
            setIsLoading(false)

            //Save to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //Update the auth context
            dispatch({ type: 'LOGIN', payload: json })
        }
    }

    return { signup, isLoading, error }
}
