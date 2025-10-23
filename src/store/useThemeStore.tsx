import {create} from "zustand/react";
import {immer} from "zustand/middleware/immer";

interface ITheme {
    theme: "light" | "dark"
    switchTheme: () => void;
}

const useThemeStore = create<ITheme>()(
    immer((set, get) => ({
        theme: 'dark',
        switchTheme: () => {
            set({theme: `${get().theme === 'dark' ? 'light' : 'dark'}`})
        },
    }))
)

export const useTheme = () => useThemeStore((s) => s.theme);
export const switchTheme = () => useThemeStore.getState().switchTheme();
