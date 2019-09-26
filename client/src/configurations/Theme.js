import React from "react";

export const theme = {
    "light": {
        "common": {
            "black": "#0C1330",
            "white": "#fff"
        },
        "background": {
            "primary": "#ffffff",
            "secondary": "#e4e5e6",
            "tertiary": "#f0f3f5"
        },
        "primary": {
            "light": "#e6f7ff",
            "main": "#1890ff",
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
        "textColor": {
            "primary": "rgba(0, 0, 0, 1)",
            "secondary": "rgba(193, 29, 29, 1)",
            "disabled": "rgba(12, 19, 48, 1)",
            "hint": "rgba(0, 0, 0, 0.65)"
        },
        "textWeight": {
            "bold": 600,
            "normal": 400,
            "lighter": 300,
        },
        "tag": {
            "colors": {
                "primary": "#3677fd",
                "secondary": "#26e5ab",
                "third": "#fdbd31",
                "fourth": "#fe4235",
            }
        },
        "card": {
            "borderRadius": 8
        },
        "border": "#c8ced3",
        "spacing": {
            "outer": 35,
            "inner": 14
        },
        "ratio": 2

    },
    "dark": {
        "common": {
            "black": "#fff",
            "white": "#0C1330"
        },
        "background": {
            "primary": "#3a4149",
            "secondary": "#2f353a",
            "tertiary": "#343b41"
        },
        "primary": {
            "light": "#0f61af",
            "main": "#1890ff",
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
        "textColor": {
            "primary": "rgba(255, 255, 255, 1)",
            "secondary": "rgba(193, 29, 29, 1)",
            "disabled": "rgba(12, 19, 48, 1)",
            "hint": "rgba(255, 255, 255, 0.65)"
        },
        "tag": {
            "colors": {
                "primary": "#3677fd",
                "secondary": "#26e5ab",
                "third": "#fdbd31",
                "fourth": "#fe4235",
            }
        },
        "card": {
            "borderRadius": 8
        },
        "border": "#23282c",
        "spacing": {
            "outer": 35,
            "inner": 14
        },
        "ratio": 2
    }
};

const common = {
    
}

export const ThemeContext = React.createContext(theme);
