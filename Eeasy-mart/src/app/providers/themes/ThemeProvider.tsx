import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeType } from "@/shared/config"
import { useEffect, useState, type ReactNode } from "react"

interface ThemeProviderProps{
    children: ReactNode;
}

const stored = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
const defaultTheme: ThemeType = stored === Theme.PINK || stored === Theme.BLUE
  ? stored
  : Theme.PINK;
export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeType>(defaultTheme)

    useEffect(()=>{
        document.body.className = `${theme}`
    }, [theme])
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
