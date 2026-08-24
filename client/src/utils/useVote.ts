import { useEffect, useState } from "react"

type Vote = 0 | 1 | -1
type VoteType = "post" | "comment"

export function useVote(targetId: number, type: VoteType, initialScore: number) {

    const [userVote, setUserVote] = useState<Vote>(0)
    const [finalScore, setFinalScore] = useState(initialScore)

    const API_URL = import.meta.env.VITE_API_URL

    useEffect(() => {
        async function checkForVote() {
            try {
                const response = await fetch(`${API_URL}/votes/${targetId}?type=${type}`, {
                    credentials: "include"
                })

                if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.error)
                }

                const data = await response.json()
                setUserVote(data.value ?? 0)
            } catch (error) {
                console.error(error)
            }
        }
        checkForVote()
    }, [type, targetId])

    async function vote(value: Vote) {
        if (value === userVote) {
            await removeVote()
            return
        }

        try {
            const response = await fetch(`${API_URL}/votes?type=${type}`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    targetId, value
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message)
            }

            setUserVote(value)
            setFinalScore(prev => prev - userVote + value)
        } catch (error) {
            console.error(error)
        }
    }

    async function removeVote() {
        try {
            const response = await fetch(`${API_URL}/votes?type=${type}`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    targetId
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message)
            }

            setUserVote(0)
            setFinalScore(prev => prev - userVote)
        } catch (error) {
            console.error(error)
        }
    }

    return { finalScore, userVote, vote }
}