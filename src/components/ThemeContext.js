import React, { Children, createContext, useContext, useState } from 'react';


const ThemeContext = createContext()


function ThemeProvider() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.provider value = { { toggleTheme, theme}}>
            {Children}
        </ThemeContext.provider>
    )
}