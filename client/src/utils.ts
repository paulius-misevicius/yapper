import { useContext } from "react"
import { GlobalContext } from "./App"

export function useGlobalContext() {
  const context = useContext(GlobalContext)
  if (context === null) {
    throw new Error("useGlobalContext must be used within GlobalContext.Provider")
  }
  return context
}