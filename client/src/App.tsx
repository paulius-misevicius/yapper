import { createBrowserRouter, RouterProvider } from "react-router"
import { createContext, useState, useEffect } from "react"
import Home from "./pages/home/Home"
import AppLayout from "./components/AppLayout"
import BoardLayout from "./components/BoardLayout"
import Board from "./pages/board/Board"
import Post from "./pages/post/Post"
import CreatePost from "./pages/CreatePost"
import Profile from "./pages/profile/Profile"
import NotFound from "./pages/NotFound"
import Settings from "./pages/settings/Settings"
import type { UserProps } from "./utils/types"
import { TailSpin } from "react-loader-spinner"

type AuthType = "sign-up" | "log-in" | null
type Theme = "light" | "dark"

interface GlobalContextValue {
  isLoggedIn: boolean
  authType: AuthType
  setAuthType: React.Dispatch<React.SetStateAction<AuthType>>
  screenWidth: number
  savedPostIds?: Set<number>
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
  currentUser: UserProps | null
  setCurrentUser: React.Dispatch<React.SetStateAction<UserProps | null>>
}

export const GlobalContext = createContext<GlobalContextValue | null>(null)

export default function App() {

  const [currentUser, setCurrentUser] = useState<UserProps | null>(null)
  const [authType, setAuthType] = useState<AuthType>(null)
  const [theme, setTheme] = useState<Theme>("light")
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [isLoadingAuth, setIsLoadingAuth] = useState(false)
  const isLoggedIn = currentUser !== null

  useEffect(() => {
    async function checkForSession() {
      try {
        setIsLoadingAuth(true)

        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
            credentials: "include"
        })

        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.error)
        }

        const data = await response.json()

        setCurrentUser(data.user)
        setAuthType(null)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoadingAuth(false)
      }
    }
    checkForSession()
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  useEffect(() => {
    function handleResize() {
        setScreenWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const router = createBrowserRouter([
    { path: "/", Component: AppLayout, children: [
        { index: true, Component: Home },
        { path: "b/:board", Component: BoardLayout, children: [
          { index: true, Component: Board },
          { path: ":postId", Component: Post },
          { path: "create", Component: CreatePost }
        ] },
        { path: "u/:username", Component: Profile },
        { path: "settings", Component: Settings },
        { path: "*", Component: NotFound}
      ]
    }
  ])

  if (isLoadingAuth) {
    return <TailSpin wrapperClass="loader" color="var(--accent)"/>
  }

  return (
    <GlobalContext.Provider value={{currentUser, setCurrentUser, authType, isLoggedIn, setAuthType, screenWidth, theme, setTheme}}>
      <RouterProvider key={currentUser?.id ?? "logged-out"} router={router} />
    </GlobalContext.Provider>
  )
}