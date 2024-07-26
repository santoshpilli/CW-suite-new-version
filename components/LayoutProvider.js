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


export async function getStaticProps(context) {
    const { params } = context;





    const pathSegments = params.index || [];
    const path = `/${pathSegments.join("/")}`;

    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getmenuData`);
    const menuData = JSON.parse(response.data.documents[0].content);


    let matchedMenuItem = null;
    for (const menuItem of menuData) {
        if (menuItem.slug === path) {
            matchedMenuItem = menuItem;
            break;
        }
        if (menuItem.children) {
            for (const childItem of menuItem.children) {
                if (childItem.slug === path) {
                    matchedMenuItem = childItem;
                    break;
                }
                if (childItem.subchildren) {
                    for (const subChildItem of childItem.subchildren) {
                        if (subChildItem.slug === path) {
                            matchedMenuItem = subChildItem;
                            break;
                        }
                    }
                    if (matchedMenuItem) {
                        break;
                    }
                }
            }
            if (matchedMenuItem) {
                break;
            }
        }
    }

    const { type, menuId, slug } = matchedMenuItem || {};

    if (!matchedMenuItem) {
        return {
            notFound: true,
        };
    }

    if (type === "custom") {
        return {
            props: {
                type,
                data: null,
                slug,
                menuData,
            },
            revalidate: 400, // Revalidate every 24 hours
        };
    } else {
        try {
            let tempSlug = path.substring(1);
            const finalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/pageData?slug=${tempSlug}`;
            const headers = {
                "Content-Type": "application/json",
            };

            const response = await axios.get(finalUrl, headers);
            const data = response.data?.documents[0];

            if (!data) {
                return {
                    notFound: true,
                };
            }

            return {
                props: {
                    type,
                    data,
                    slug,
                    menuData,
                },
                revalidate: 400, // Revalidate every 24 hours
            };
        } catch (error) {
            console.error("Error fetching data:", error);
            return {
                notFound: true,
                revalidate: 400, // Revalidate every 24 hours
            };
        }
    }
}

export const useLayoutContext = () => useContext(LayoutContext);
