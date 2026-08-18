import { createBrowserRouter, RouterProvider } from "react-router"
import { createContext, useState, useEffect } from "react"
import Home from "./pages/Home"
import AppLayout from "./components/AppLayout"
import BoardLayout from "./components/BoardLayout"
import Board from "./pages/board/Board"
import Post from "./pages/post/Post"
import CreatePost from "./pages/CreatePost"
import Profile from "./pages/profile/Profile"
import NotFound from "./pages/NotFound"

type AuthType = "sign-up" | "log-in" | null

interface GlobalContextValue {
  isLoggedIn: boolean
  authType: AuthType
  setAuthType: React.Dispatch<React.SetStateAction<AuthType>>
  screenWidth: number
}

export const GlobalContext = createContext<GlobalContextValue | null>(null)

export default function App() {

  const isLoggedIn = true
  const [authType, setAuthType] = useState<AuthType>(null)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

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
        { path: "*", Component: NotFound}
      ]
    }
  ])

  return (
    <GlobalContext.Provider value={{isLoggedIn, authType, setAuthType, screenWidth}}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  )
}