import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
    const [menuData, setMenuData] = useState([]);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.get("/api/getmenuData");
                const apiData = JSON.parse(response.data.documents[0].content);
                setMenuData(apiData);
            } catch (error) {
                console.error("Error fetching menu data:", error);
            }
        };

        fetchMenuData();
    }, []);

    return (
        <LayoutContext.Provider value={{ menuData, isSidebarOpen, setSidebarOpen }}>
            {children}
        </LayoutContext.Provider>
    );
};

export const useLayoutContext = () => useContext(LayoutContext);
