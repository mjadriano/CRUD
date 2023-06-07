import { useState } from 'react'

const useOpenAI = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const openAI = async (topic) => {

        setIsLoading(true)
        const response = await fetch('/api/open-AI/thesis', {
            method: 'POST',
            body: JSON.stringify({topic: topic}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        else {
            setIsLoading(false)
            //Set the state
            setError(null)
            setIsLoading(false)
        }

        return json
    }

    return { openAI, isLoading, error }
}

const useOpenAIName = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const openAI = async (name) => {

        setIsLoading(true)
        const response = await fetch('/api/open-AI/name', {
            method: 'POST',
            body: JSON.stringify({name: name}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        else {
            setIsLoading(false)
            //Set the state
            setError(null)
            setIsLoading(false)
        }

        return json
    }

    return { openAI, isLoading, error }
}

export { useOpenAI, useOpenAIName }