import { useNavigate } from "react-router"
import { useGlobalContext } from "../../utils/utils"
import SettingInput from "./components/SettingInput"
import { useState, useEffect } from "react"

export type InputType = "username" | "email" | "password" | "delete" | null

export default function Settings() {
    
    const { isLoggedIn, setAuthType, theme, setTheme, currentUser, setCurrentUser } = useGlobalContext()
    const [inputType, setInputType] = useState<InputType>(null)
    const [inputValue, setInputValue] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [info, setInfo] = useState<string | null>(null)
    const [isUpdating, setIsUpdating] = useState(false)

    const navigate = useNavigate()

    const childProps = {
        isUpdating,
        error,
        info,
        setError,
        setInfo,
        updateAuth
    }

    useEffect(() => {
        if (!isLoggedIn || !currentUser) {
            navigate("/", { replace: true })
            setAuthType("sign-up")
        }
    }, [isLoggedIn, currentUser])

    async function updateAuth() {
        if (!inputValue || !inputType) {
            setError("Missing required fields.")
            return
        }

        try {
            if (!currentUser) return
            setIsUpdating(true)

            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/me?type=${inputType}`, {
                method: "PATCH",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    newValue: inputValue
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message)
            }

            const data = await response.json()

            if (inputType === "username" || inputType === "email") {
                setCurrentUser(prev => {
                    if (!prev) return prev

                    return ({
                    ...prev,
                    [inputType]: data[inputType]
                    })
                })
            }
            
            setInfo(data.message)
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            }
        } finally {
            setIsUpdating(false)
        }
    }
    
    if (!isLoggedIn || !currentUser) {
        return
    }

    return (
        <div className="py-5 w-full flex flex-col">
            <h1>Settings</h1>
            <div className="mt-5">
                <h3 className="text-(--text-muted)! text-xs font-bold tracking-wide mb-1">
                    ACCOUNT
                </h3>
                <div className="bg-(--surface-1) mt-3 overflow-hidden group border border-(--border) rounded-2xl w-full">
                    <SettingInput 
                        inputType={inputType}
                        setInputType={setInputType}
                        btnClick={() => {
                            setInputType("username")
                            setInputValue("")
                            setError(null)
                            setInfo(null)
                        }}
                        text={currentUser?.username ?? ""}
                        name="Username"
                        id="username"
                        placeholder="Enter your new username..."
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        ariaLabel="Change username"
                        {...childProps}
                    />
                    <SettingInput 
                        inputType={inputType}
                        setInputType={setInputType}
                        btnClick={() => {
                            setInputType("email")
                            setInputValue("")
                            setError(null)
                            setInfo(null)
                        }}
                        text={`${currentUser.email}`}
                        name="Email address"
                        id="email"
                        placeholder="Enter your new email address..."
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        ariaLabel="Change email address"
                        {...childProps}
                    />
                    <SettingInput 
                        inputType={inputType}
                        setInputType={setInputType}
                        btnClick={() => {
                            setInputType("password")
                            setInputValue("")
                            setError(null)
                            setInfo(null)
                        }}
                        text="Change your password"
                        name="Password"
                        id="password"
                        placeholder="Enter your new password..."
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        ariaLabel="Change password"
                        {...childProps}
                    />
                </div>
            </div>
            <div className="mt-5">
                <h3 className="text-(--text-muted)! text-xs font-bold tracking-wide mb-1">
                    APPEARANCE
                </h3>
                <div className="bg-(--surface-1) mt-3 overflow-hidden group border border-(--border) rounded-2xl w-full">
                    <SettingInput
                        inputType={inputType}
                        setInputType={setInputType}
                        btnClick={() => {
                            setInputType(null)
                            setInputValue("")
                            setTheme(theme === "light" ? "dark" : "light")
                            setError(null)
                            setInfo(null)
                        }}
                        text="Click to change themes"
                        name="Theme"
                        id={theme === "light" ? "dark" : "light"}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        ariaLabel={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                        {...childProps}
                    />
                </div>
            </div>
            <div className="mt-auto pt-5">
                <h3 className="text-(--text-muted)! text-xs font-bold tracking-wide mb-1">
                    DANGER
                </h3>
                <div className="bg-(--surface-1) mt-3 overflow-hidden group border border-(--failure) rounded-2xl w-full">
                    <SettingInput
                        inputType={inputType}
                        setInputType={setInputType}
                        btnClick={() => {
                            setInputType("delete")
                            setInputValue("")
                            setError(null)
                            setInfo(null)
                        }}
                        text="Permanently delete your account and all data"
                        name="Delete account"
                        id="delete"
                        placeholder="Enter your username to confirm..."
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        ariaLabel="Delete account"
                        {...childProps}
                    />
                </div>
            </div>
        </div>
    )
}