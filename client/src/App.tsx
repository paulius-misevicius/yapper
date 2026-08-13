import { createBrowserRouter, RouterProvider } from "react-router"
import { createContext } from "react"
import Home from "./pages/Home"
import AppLayout from "./components/AppLayout"

interface GlobalContextValue {
  isLoggedIn: boolean
}

export const GlobalContext = createContext<GlobalContextValue | null>(null)

export default function App() {

  const isLoggedIn = true

  const router = createBrowserRouter([
    { path: "/", Component: AppLayout, children: [
        { index: true, Component: Home },
        { path: "b/:board", 
          children: [
            { path: ":postId" },
            { path: "create" }
          ] },
        { path: "u/:user" }
      ]
    }
  ])

  return (
    <GlobalContext.Provider value={{isLoggedIn}}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  )
}