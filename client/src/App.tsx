import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
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
    <RouterProvider router={router} />
  )
}