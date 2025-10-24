import { setIsModal, useImage } from "../../../store/useModalStore"

export default function Modal() {
    const image = useImage()
    const handleClick = (() => {
        setIsModal(false)
    })
    return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-black/50 z-40" onClick={handleClick}>
        <img src={image} alt="123"  className="w-1/2 h-auto z-30"/>
    </div>
  )
}
