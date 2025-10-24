import {create} from "zustand/react";
import {immer} from "zustand/middleware/immer";

interface IModal {
    image: string
    isModal: boolean
    setIsModal: (value: boolean) => void
    setImage: (path: string) => void
}

const useThemeStore = create<IModal>()(
    immer((set) => ({
        image: '',
        isModal: false,
        setIsModal: (value) => {
            set({
                isModal: value
            })
        },
        setImage: (path) => {
            set({
                image: path
            })
        },
    }))
)

export const useIsModal = () => useThemeStore((s) => s.isModal);
export const useImage = () => useThemeStore((s) => s.image);
export const setIsModal = (value: boolean) => useThemeStore.getState().setIsModal(value);
export const setImage = (path: string) => useThemeStore.getState().setImage(path);
