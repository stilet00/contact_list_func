import {createContext, useState} from 'react'

export const THEMES = {
    white: {
        background: 'white',
    },
    black: {
        background: '#e5e5e5',
    },

}
export let themeContext = createContext(null)
export function useThemeContext() {
    const [theme, setTheme] = useState(THEMES.white)
    const [state, setState] = useState({
        themeSwitcher: true,
    });

    function setWhiteTheme() {
        setTheme(THEMES.white)
    }
    function setBlackTheme() {
        setTheme(THEMES.black)
    }

    const handleChange = (event) => {
        if (state.themeSwitcher) {
            setState({ ...state, [event.target.name]: event.target.checked })
            setBlackTheme()
        }
        else {
            setState({ ...state, [event.target.name]: event.target.checked })
            setWhiteTheme()
        }
        ;
    };

    const contextValue = {
        theme,
        state,
        handleChange
    }
    return {
        contextValue
    }

}