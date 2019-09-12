import React from "react";

const theme = {
    "light": {
        "common": {
            "black": "#0C1330",
            "white": "#fff"
        },
        "background": {
            "paper": "#ffffff",
            "default": "#fafafa"
        },
        "primary": {
            "light": "rgba(255, 255, 255, 0)",
            "main": "#c11d1d",
            "dark": "#303f9f",
            "contrastText": "rgba(255, 255, 255, 1)",
        },
        "secondary": {
            "light": "#ff4081",
            "main": "rgba(254, 173, 0, 1)",
            "dark": "#c51162",
            "contrastText": "#ffffff"
        },
        "error": {
            "light": "#e57373",
            "main": "#f44336",
            "dark": "#d32f2f",
            "contrastText": "#ffffff"
        },
        "text": {
            "primary": "rgba(12, 19, 48, 1)",
            "secondary": "rgba(193, 29, 29, 1)",
            "disabled": "rgba(12, 19, 48, 1)",
            "hint": "rgba(12, 19, 48, 1)"
        }
    },
    "dark": {
        "common": {
            "black": "#fff",
            "white": "#0C1330"
        },
        "background": {
            "paper": "#000000",
            "default": "#ffffff"
        },
        "primary": {
            "light": "rgba(255, 255, 255, 0)",
            "main": "#c11d1d",
            "dark": "#303f9f",
            "contrastText": "rgba(255, 255, 255, 1)",
        },
        "secondary": {
            "light": "#ff4081",
            "main": "rgba(254, 173, 0, 1)",
            "dark": "#c51162",
            "contrastText": "#ffffff"
        },
        "error": {
            "light": "#e57373",
            "main": "#f44336",
            "dark": "#d32f2f",
            "contrastText": "#ffffff"
        },
        "text": {
            "primary": "rgba(12, 19, 48, 1)",
            "secondary": "rgba(193, 29, 29, 1)",
            "disabled": "rgba(12, 19, 48, 1)",
            "hint": "rgba(12, 19, 48, 1)"
        }
    }
};

const common = {
    
}

export const ThemeContext = React.createContext(theme);