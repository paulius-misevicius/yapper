import { ChevronRight, Moon, Sun } from "lucide-react"
import { currentUser } from "../../../data/user"
import { useNavigate } from "react-router"
import { useGlobalContext } from "../../utils"
import SettingInput from "./components/SettingInput"
import { useState } from "react"

export type InputType = "username" | "email" | "password" | "delete" | null

export default function Settings() {
    
    const { isLoggedIn, setAuthType, theme, setTheme } = useGlobalContext()
    const [inputType, setInputType] = useState<InputType>(null)
    const [inputValue, setInputValue] = useState("")

    const navigate = useNavigate()

    if (!isLoggedIn) {
        navigate("/", { replace: true })
        setAuthType("sign-up")
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
                        }}
                        text={currentUser.username}
                        name="Username"
                        id="username"
                        placeholder="Enter your new username..."
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        ariaLabel="Change username"
                    />
                    <SettingInput 
                        inputType={inputType}
                        setInputType={setInputType}
                        btnClick={() => {
                            setInputType("email")
                            setInputValue("")
                        }}
                        text="email@address.com"
                        name="Email address"
                        id="email"
                        placeholder="Enter your new email address..."
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        ariaLabel="Change email address"
                    />
                    <SettingInput 
                        inputType={inputType}
                        setInputType={setInputType}
                        btnClick={() => {
                            setInputType("password")
                            setInputValue("")
                        }}
                        text="Change your password"
                        name="Password"
                        id="password"
                        placeholder="Enter your new password..."
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        ariaLabel="Change password"
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
                        }}
                        text="Click to change themes"
                        name="Theme"
                        id={theme === "light" ? "dark" : "light"}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        ariaLabel={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
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
                        }}
                        text="Permanently delete your account and all data"
                        name="Delete account"
                        id="delete"
                        placeholder="Enter your username to confirm..."
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        ariaLabel="Delete account"
                    />
                </div>
            </div>
        </div>
    )
}