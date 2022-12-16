import React, { createContext, useState } from 'react'

const SiteContext = createContext()

export function SiteProvider({children}) {
    const [modal, setModal] = useState(false)
    const [modalContent, setModalContent] = useState(false)
    const [theme, setTheme] = useState('developer')

    const setModalOpen = (isOpen) => {
        setModal(isOpen)
    }

    const handleModalContent = (content) => {
        setModalContent(content)
    }

    return (
        <SiteContext.Provider value={{modal, setModalOpen, modalContent, handleModalContent, theme, setTheme}}>
            {children}
        </SiteContext.Provider>
    )
}

export default SiteContext