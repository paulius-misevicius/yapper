import { createPortal } from "react-dom"
import { FocusTrap } from "focus-trap-react"
import { Eye, EyeOff, X } from "lucide-react"
import { useState } from "react"
import { useGlobalContext } from "../utils"

export default function AuthModal() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const rootPortal = document.getElementById("portal")
    const { isLoggedIn, authType, setAuthType } = useGlobalContext()

    if (!rootPortal || !authType || isLoggedIn) return

    return createPortal (
        <>
            <div 
                onClick={() => setAuthType(null)}
                className="fixed inset-0 flex bg-black/60 z-50"
            />
            <FocusTrap
                focusTrapOptions={{
                    clickOutsideDeactivates: true,
                    escapeDeactivates: true
                }}
            >
                <div 
                    className="fixed bottom-0 w-full sm:bottom-[unset] sm:w-120 sm:-translate-1/2 sm:top-1/2 sm:left-1/2 z-100 bg-(--surface-1) py-8 px-8 sm:px-10 border border-(--border) rounded-t-2xl sm:rounded-2xl"
                >
                    <button
                        onClick={() => setAuthType(null)}
                        aria-label="Close authentication modal"
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
                    <div className="mt-5 flex flex-col gap-5">
                        {authType === "sign-up" &&
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
                                    className="text-sm placeholder:font-medium bg-(--surface-2)! px-4 py-2 focus:bg-(--surface-1)!"
                                    placeholder="Pick a unique username..."
                                />
                            </div>
                        }
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
                                className="text-sm placeholder:font-medium bg-(--surface-2)! px-4 py-2 focus:bg-(--surface-1)!"
                                placeholder="you@example.com"
                            />
                        </div>
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
                                    type={isPasswordVisible ? "text" : "password"}
                                    className="text-sm placeholder:font-medium bg-(--surface-2)! pl-4 pr-10 py-2 focus:bg-(--surface-1)!"
                                    placeholder="*********"
                                />
                                <button
                                    onClick={() => setIsPasswordVisible(prev => !prev)}
                                    aria-label={`${isPasswordVisible ? "Hide" : "Show"} password`}
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
                    <button
                        className="mt-6 w-full action-btn py-3! bg-(--primary-btn) text-(--primary-btn-text) lg:hover:bg-(--accent) active:bg-(--accent)"
                        >
                        {authType === "sign-up" ? "Create account" : "Log in"}
                    </button>
                    <p className="text-center mt-3">
                        {authType === "sign-up" ? "Already have an account?" : "Don't have an account?"}{" "}
                        <button
                            onClick={authType === "sign-up"
                                ? () => setAuthType("log-in")
                                : () => setAuthType("sign-up")
                            }
                            aria-label={authType === "sign-up" ? "Go to log in" : "Go to sign up"}
                            className="text-(--accent-text) active:font-medium lg:hover:font-medium"
                        >
                            {authType === "sign-up" ? "Log in" : "Sign up"}
                        </button>
                    </p>
                </div>
            </FocusTrap>
        </>,
        rootPortal
    )
}