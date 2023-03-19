interface ModalProps {
    title: string,
    children?: any,
    isOpen: boolean,
    onClose: () => void,
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {

    //overlay div with a transparent bg
    const overlayClass = isOpen
        ? "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-out duration-300 z-50 w-full" : "hidden";

    const modalClass = isOpen
        ? "bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full mx-auto mt-10 ease-out duration-300 opacity-100 z-50"
        : "hidden";
    return (
        <div className={overlayClass} onClick={onClose}>
            <div className={modalClass} onClick={(e) => e.stopPropagation()}>
                <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                </div>
                <div className="p-6">{children}</div>
            </div>
        </div>
    )
}

export default Modal