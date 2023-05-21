import React, { useState, useContext } from 'react'
import sublinks from './data'

let AppContext = React.createContext();

export let useGlobalContext = () => {
    return useContext(AppContext);
}

export let AppProvider = ({children}) => {
    const [isSidebarOpen, setisSidebarOpen] = useState(false)
    const [isSubmenuOpen, setisSubmenuOpen] = useState(false)
    const [location, setlocation] = useState({})
    const [textData, settextData] = useState({page: '', links: []})
    

    let openSidebar = () => {
        setisSidebarOpen(true)
    }
    let openSubmenu = (text, coordinates) => {
        setlocation(coordinates)
        let page = sublinks.find((item) => item.page === text)
        settextData(page)
        console.log(page)
        setisSubmenuOpen(true)
    }
    let closeSidebar = () => {
        setisSidebarOpen(false);
    }
    let closeSubmenu = () => {
        setisSubmenuOpen(false);
    }

    return (
        <AppContext.Provider value={{
            isSidebarOpen, isSubmenuOpen, openSidebar, openSubmenu, closeSidebar, closeSubmenu, location, textData
        }}>
            {children}
        </AppContext.Provider>
    )
}

