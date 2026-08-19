import { createBrowserRouter, RouterProvider } from "react-router"
import { createContext, useState, useEffect } from "react"
import { savedPosts } from "../data/board"
import { currentUser } from "../data/user"
import Home from "./pages/Home"
import AppLayout from "./components/AppLayout"
import BoardLayout from "./components/BoardLayout"
import Board from "./pages/board/Board"
import Post from "./pages/post/Post"
import CreatePost from "./pages/CreatePost"
import Profile from "./pages/profile/Profile"
import NotFound from "./pages/NotFound"
import Settings from "./pages/settings/Settings"

type AuthType = "sign-up" | "log-in" | null
type Theme = "light" | "dark"

interface GlobalContextValue {
  isLoggedIn: boolean
  authType: AuthType
  setAuthType: React.Dispatch<React.SetStateAction<AuthType>>
  screenWidth: number
  savedPostIds: Set<number>
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export const GlobalContext = createContext<GlobalContextValue | null>(null)

export default function App() {

  const isLoggedIn = true
  const [authType, setAuthType] = useState<AuthType>(null)
  const [theme, setTheme] = useState<Theme>("dark")
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const savedPostIds = new Set(savedPosts.filter(item => item.userId === currentUser.id).map(item => item.postId))

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

  return (
    <GlobalContext.Provider value={{isLoggedIn, authType, setAuthType, screenWidth, savedPostIds, theme, setTheme}}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  )
}