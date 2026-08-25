import { Mail, AtSign, Lock, Trash2, Moon, Sun, ChevronRight, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import type { InputType } from "../Settings"
import MobileShelfModal from "../../../components/MobileShelfModal"
import { useGlobalContext } from "../../../utils/utils"
import { TailSpin } from "react-loader-spinner"

interface SettingInputProps {
    name: string
    id: string
    placeholder?: string
    text: string
    inputType: InputType
    setInputType: React.Dispatch<React.SetStateAction<InputType>>
    btnClick: React.MouseEventHandler<HTMLButtonElement>
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>
    ariaLabel: string
    isUpdating: boolean
    error: string | null
    info: string | null
    setError: React.Dispatch<React.SetStateAction<string | null>>
    setInfo: React.Dispatch<React.SetStateAction<string | null>>
    updateAuth: () => void
    deleteAccount: () => void
}

export default function SettingInput({
    ariaLabel, 
    inputType, 
    setInputType, 
    btnClick, 
    text, 
    name, 
    id, 
    placeholder, 
    inputValue, 
    setInputValue,
    isUpdating,
    error,
    setError,
    info,
    setInfo,
    updateAuth,
    deleteAccount
}: SettingInputProps) {

    const { screenWidth } = useGlobalContext()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    let icon = <></>

    if (id === "username") {
        icon = <AtSign className="p-3 size-11 shrink-0 bg-(--accent) text-(--accent-text) rounded-lg" />
    } else if (id === "email") {
        icon = <Mail className="p-3 size-11 shrink-0 bg-(--accent) text-(--accent-text) rounded-lg" />
    } else if (id === "password") {
        icon = <Lock className="p-3 size-11 shrink-0 bg-(--accent) text-(--accent-text) rounded-lg" />
    } else if (id === "delete") {
        icon = <Trash2 className="p-3 size-11 shrink-0 bg-(--failure) text-(--failure-text) rounded-lg" />
    } else if (id === "light") {
        icon = <Moon className="p-3 size-11 shrink-0 bg-(--accent) text-(--accent-text) rounded-lg" />
    } else if (id === "dark") {
        icon = <Sun className="p-3 size-11 shrink-0 bg-(--accent) text-(--accent-text) rounded-lg" />
    }

    return (
        <>
            {inputType === id && screenWidth < 768 &&
                <MobileShelfModal
                    onClose={() => {
                        setInputType(null)
                        setInputValue("")
                    }}
                    title={id === "delete" ? "Delete account" : `Change ${id}`}
                >
                    <div className="relative w-full">
                        <input
                            value={inputValue}
                            onChange={event => {
                                setInputValue(event.target.value)
                                setError(null)
                                setInfo(null)
                            }}
                            id={id}
                            className="text-sm placeholder:font-medium bg-(--surface-2)! px-4 py-2 focus:bg-(--surface-1)! w-full"
                            placeholder={placeholder}
                            type={id === "password" 
                                    ?   isPasswordVisible ? "text" : "password"
                                    :   "text"
                            }
                        />
                        {id === "password" &&
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
                        }
                    </div>
                    {error &&
                        <p
                            role="alert"
                            className="error text-center mt-2 mr-1"
                        >
                            {error}
                        </p>
                    }
                    {info &&
                        <p
                            role="status"
                            className="font-medium text-center mt-2 mr-1"
                        >
                            {info}
                        </p>
                    }
                    <button
                        onClick={id === "delete"
                            ?   () => deleteAccount()
                            :   () => updateAuth()
                        }
                        aria-label="Save changes"
                        className={`w-full mt-5 action-btn ${id === "delete" ? "bg-(--failure-text) lg:hover:bg-(--failure) active:bg-(--failure)" : "bg-(--primary-btn) lg:hover:bg-(--accent) active:bg-(--accent)"} text-(--primary-btn-text)`}
                    >
                        {isUpdating 
                            ?   <TailSpin wrapperClass="loader" color="var(--primary-btn-text)" height="22" width="22"/>
                            :   "Confirm"
                        }
                    </button>
                </MobileShelfModal>
            }
            {inputType === id && screenWidth >= 768
                ?

                            <div className={`flex justify-between p-5 last:border-b-0 border-b ${id === "delete" ? "border-(--failure)" : "border-(--border)"}`}>
                                <div className="flex gap-5 w-full">
                                    {icon}
                                    <div className="w-full">
                                        <h2 className={id === "delete" ? "text-(--failure-text)!" : ""}>
                                            {name}
                                        </h2>
                                        {error &&
                                            <p
                                                role="alert"
                                                className="error mt-2 text-nowrap"
                                            >
                                                {error}
                                            </p>
                                        }
                                        {info &&
                                            <p
                                                role="status"
                                                className="font-medium mt-2 text-nowrap"
                                            >
                                                {info}
                                            </p>
                                        }
                                        <div className="flex flex-col gap-2 w-full mt-2">
                                            <label
                                                className="text-sm sr-only font-medium text-(--text-secondary)"
                                                htmlFor={id}
                                            >
                                                {name}
                                            </label>
                                            <div className="max-w-80 relative">
                                                <input
                                                    value={inputValue}
                                                    onChange={event => {
                                                        setInputValue(event.target.value)
                                                        setError(null)
                                                        setInfo(null)
                                                    }}
                                                    id={id}
                                                    className="text-sm placeholder:font-medium bg-(--surface-2)! px-4 py-2 focus:bg-(--surface-1)! w-full"
                                                    placeholder={placeholder}
                                                    type={id === "password" 
                                                            ?   isPasswordVisible ? "text" : "password"
                                                            :   "text"
                                                    }
                                                />
                                                {id === "password" &&
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
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-end">
                                    <button
                                        onClick={() => {
                                            setInputType(null)
                                            setInputValue("")
                                        }}
                                        aria-label="Discard changes"
                                        className="text-(--text-muted) action-btn text-center border-(--border)! active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={id === "delete"
                                            ?   () => deleteAccount()
                                            :   () => updateAuth()
                                        }
                                        aria-label="Save changes"
                                        className={`w-fit action-btn ${id === "delete" ? "bg-(--failure-text) lg:hover:bg-(--failure) active:bg-(--failure)" : "bg-(--primary-btn) lg:hover:bg-(--accent) active:bg-(--accent)"} text-(--primary-btn-text)`}
                                    >
                                        {isUpdating 
                                            ?   <TailSpin wrapperClass="loader" color="var(--primary-btn-text)" height="20.5" width="20.5"/>
                                            :   "Confirm"
                                        }
                                    </button>
                                </div>
                            </div>
                :
                    <button 
                        aria-label={ariaLabel}
                        onClick={btnClick}
                        className="group flex p-5 border-b last:border-b-0 border-(--border) items-center justify-between w-full active:bg-(--accent-hover) lg:hover:bg-(--accent-hover)"
                    >
                        <div className="flex items-center gap-5">
                            {icon}
                            <div className="text-left">
                                <h2 className={id === "delete" ? "text-(--failure-text)!" : ""}>
                                    {name}
                                </h2>
                                <p className="text-(--text-muted)!">
                                    {text}
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="size-5 shrink-0 text-(--text-muted) group-active:text-(--text-secondary) lg:group-hover:text-(--text-secondary)"/>
                    </button>
            }
        </>
    )
}