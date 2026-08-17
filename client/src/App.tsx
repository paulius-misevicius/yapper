import { createBrowserRouter, RouterProvider } from "react-router"
import { createContext, useState } from "react"
import Home from "./pages/Home"
import AppLayout from "./components/AppLayout"
import BoardLayout from "./components/BoardLayout"
import Board from "./pages/board/Board"
import Post from "./pages/post/Post"
import CreatePost from "./pages/CreatePost"

type AuthType = "sign-up" | "log-in" | null
interface GlobalContextValue {
  isLoggedIn: boolean
  authType: AuthType
  setAuthType: React.Dispatch<React.SetStateAction<AuthType>>
}

export const GlobalContext = createContext<GlobalContextValue | null>(null)

export default function App() {

  const isLoggedIn = true
  const [authType, setAuthType] = useState<AuthType>(null)

  const router = createBrowserRouter([
    { path: "/", Component: AppLayout, children: [
        { index: true, Component: Home },
        { path: "b/:board", Component: BoardLayout, children: [
          { index: true, Component: Board },
          { path: ":postId", Component: Post },
          { path: "create", Component: CreatePost }
        ] },
        { path: "u/:user" }
      ]
    }
  ])

  return (
    <GlobalContext.Provider value={{isLoggedIn, authType, setAuthType}}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  )
}