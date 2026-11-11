import { createContext, useState } from "react";

const Context = createContext()

const Provider = ({ children }) => {
    const [theme, setTheme] = useState("light")
    const [language, setLanguage] = useState("en")


    return (
        <Context.Provider value={{theme, setTheme, language, setLanguage}}>
            {children}
        </Context.Provider>

    )

}

export { Context, Provider }