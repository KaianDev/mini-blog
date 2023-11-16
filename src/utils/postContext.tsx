import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

interface IPostContext {
    showButton: boolean;
    showModal: boolean;
    openModal: () => void;
    closeModal: () => void;
}
const postContext = createContext<IPostContext | null>(null);

export const PostContextProvider = ({ children }: { children: ReactNode }) => {
    const [showButton, setShowButton] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowButton(false);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowButton(true);
        setShowModal(false);
    };

    return (
        <postContext.Provider
            value={{
                showButton,
                closeModal,
                showModal,
                openModal,
            }}
        >
            {children}
        </postContext.Provider>
    );
};

export const usePostContext = () => useContext(postContext);
