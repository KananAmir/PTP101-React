import { useEffect, useState } from "react"
import { ThemeContext } from "./ThemeContext"


const ThemeProvider = ({ children }) => {
    const storedTheme = localStorage.getItem('theme') || 'light'
    const [theme, setTheme] = useState(storedTheme)

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
    }


    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider