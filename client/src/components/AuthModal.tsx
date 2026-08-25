import { createPortal } from "react-dom"
import { FocusTrap } from "focus-trap-react"
import { Eye, EyeOff, X } from "lucide-react"
import { useState } from "react"
import { useGlobalContext } from "../utils/utils"

export default function AuthModal() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const rootPortal = document.getElementById("portal")
    const { isLoggedIn, authType, setAuthType, setCurrentUser, setTheme } = useGlobalContext()

    async function registerUser(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username, email, password
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message)
            }
            
            const userResponse = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
                credentials: "include"
            })
            const data = await userResponse.json()

            setCurrentUser(data.user)
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            }
        }
    }

    async function logInUser(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username, email, password
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message)
            }

            const userResponse = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
                credentials: "include"
            })
            const data = await userResponse.json()

            setCurrentUser(data.user)
            setTheme(data.user.theme)
            setAuthType(null)
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            }
        }
    }

    function resetForm() {
        setUsername("")
        setEmail("")
        setPassword("")
        setIsPasswordVisible(false)
        setError(null)
    }

    if (!rootPortal || !authType || isLoggedIn) return

    return createPortal (
        <>
            <div 
                onClick={() => setAuthType(null)}
                className="fixed inset-0 flex bg-black/60 z-100"
            />
            <FocusTrap
                focusTrapOptions={{
                    clickOutsideDeactivates: true,
                    escapeDeactivates: true
                }}
            >
                <form 
                    onSubmit={authType === "sign-up" 
                        ?   registerUser
                        :   logInUser
                    }
                    className="fixed bottom-0 w-full sm:bottom-[unset] sm:w-120 sm:-translate-1/2 sm:top-1/2 sm:left-1/2 z-100 bg-(--surface-1) py-8 px-8 sm:px-10 border border-(--border) rounded-t-2xl sm:rounded-2xl"
                >
                    <button
                        onClick={() => setAuthType(null)}
                        aria-label="Close authentication modal"
                        type="button"
                        className="text-(--text-muted) absolute right-5 top-5 active:text-(--text-secondary)! lg:hover:text-(--text-secondary)!"
                    >
                        <X className="size-5"/>
                    </button>
                    <div className="flex flex-col">
                        <h2 className="text-[28px]">
                            {authType === "sign-up" ? "Join Yapper" : "Welcome back"}
                        </h2>
                        <p className="mt-2">
                            {authType === "sign-up" 
                                ? "Sign up to create posts, join boards, vote, and do other cool stuff in our communities." 
                                : "Enter your email and password to log into your account."
                            }
                        </p>
                    </div>
                    <div className="mt-5 mb-3 flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-medium text-(--text-secondary)"
                                    htmlFor="username"
                                >
                                    Username
                                </label>
                                <input
                                    value={username}
                                    onChange={event => setUsername(event.target.value)}
                                    id="username"
                                    required
                                    className="text-sm placeholder:font-medium bg-(--surface-2)! px-4 py-2 focus:bg-(--surface-1)!"
                                    placeholder={authType === "sign-up"
                                        ?   "Pick a unique username..."
                                        :   "Enter your username..."
                                    }
                                />
                            </div>
                        {authType === "sign-up" &&
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-medium text-(--text-secondary)"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    id="email"
                                    type="email"
                                    required
                                    className="text-sm placeholder:font-medium bg-(--surface-2)! px-4 py-2 focus:bg-(--surface-1)!"
                                    placeholder="you@example.com"
                                />
                            </div>
                        }
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-sm font-medium text-(--text-secondary)"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <div className="flex flex-col w-full relative">
                                <input
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                    id="password"
                                    required
                                    type={isPasswordVisible ? "text" : "password"}
                                    className="text-sm placeholder:font-medium bg-(--surface-2)! pl-4 pr-10 py-2 focus:bg-(--surface-1)!"
                                    placeholder="*********"
                                />
                                <button
                                    onClick={() => setIsPasswordVisible(prev => !prev)}
                                    aria-label={`${isPasswordVisible ? "Hide" : "Show"} password`}
                                    type="button"
                                    className="absolute -translate-1/2 top-1/2 right-1 text-(--text-muted)"
                                >
                                    {isPasswordVisible 
                                        ? <EyeOff className="size-4" /> 
                                        : <Eye className="size-4" />
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    {error && 
                        <p 
                            role="alert"
                            className="error text-center mt-3"
                        >
                            {error}
                        </p>
                    }
                    <button 
                        aria-label="Submit form"
                        className="mt-3 w-full action-btn py-3! bg-(--primary-btn) text-(--primary-btn-text) lg:hover:bg-(--accent) active:bg-(--accent)"
                    >
                        {authType === "sign-up" ? "Create account" : "Log in"}
                    </button>
                    <p className="text-center mt-3">
                        {authType === "sign-up" ? "Already have an account?" : "Don't have an account?"}{" "}
                        <button
                            onClick={authType === "sign-up"
                                ? () => {
                                    setAuthType("log-in")
                                    resetForm()
                                }
                                : () => {
                                    setAuthType("sign-up")
                                    resetForm()
                                }
                            }
                            type="button"
                            aria-label={authType === "sign-up" ? "Go to log in" : "Go to sign up"}
                            className="text-(--accent-text) active:font-medium lg:hover:font-medium"
                        >
                            {authType === "sign-up" ? "Log in" : "Sign up"}
                        </button>
                    </p>
                </form>
            </FocusTrap>
        </>,
        rootPortal
    )
}