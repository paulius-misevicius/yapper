import { useContext } from "react"
import { GlobalContext } from "./App"

export type Filter = "today" | "this week" | "this month" | "this year" | "all time"
export type Sort = "new" | "top"

export function useGlobalContext() {
  const context = useContext(GlobalContext)
  if (context === null) {
    throw new Error("useGlobalContext must be used within GlobalContext.Provider")
  }
  return context
}

export function getTimeAgo(date: string | undefined) {
  if (!date) return

  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);

  if (seconds < 60) return `${seconds}s ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;

  const years = Math.floor(months / 12);
  return `${years}y ago`;
}

export function getMonthYear(timestamp: string) {
  const date = new Date(timestamp)

  const monthYear = new Intl.DateTimeFormat("en-US", {month: "long", year: "numeric"}).format(date)

  return monthYear
}