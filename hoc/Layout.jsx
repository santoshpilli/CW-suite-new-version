import React, { useEffect } from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/Home/Navbar";
import Sidebar from "../components/Home/Sidebar";
import { useLayoutContext } from "../components/LayoutProvider";

const Layout = ({ children }) => {
    const { isSidebarOpen, setSidebarOpen, menuData } = useLayoutContext();



    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add("fixed-screen");
        } else {
            document.body.classList.remove("fixed-screen");
        }
    }, [isSidebarOpen]);

    return (
        <>
            <Navbar
                className="sticky-bar"
                menuData={menuData}
                setSidebarOpen={setSidebarOpen}
                isSidebarOpen={isSidebarOpen}
            />
            <Sidebar
                menuData={menuData}
                isSidebarOpen={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            {children}
            <Footer />
        </>
    );
};




export default Layout;



















// import React, { useEffect, useState } from "react";
// import Footer from "../components/common/Footer";
// import Navbar from "../components/Home/Navbar";
// import Sidebar from "../components/Home/Sidebar";
// import axios from "axios";

// const Layout = ({ children, isSidebarOpen, setSidebarOpen }) => {
//   const [menuData, setMenuData] = useState([]);

//   useEffect(() => {
//     // Fetch menu data from API
//     const fetchMenuData = async () => {
//       try {
//         const response = await axios.get("/api/getmenuData");
//         setMenuData(response.data);
//       } catch (error) {
//         console.error("Error fetching menu data:", error);
//       }
//     };

//     fetchMenuData();
//   }, []);

//   useEffect(() => {
//     if (isSidebarOpen) {
//       document.body.classList.add("fixed-screen");
//     } else {
//       document.body.classList.remove("fixed-screen");
//     }
//   }, [isSidebarOpen]);

//   return (
//     <>
//       <Navbar
//         menuData={menuData}
//         setSidebarOpen={setSidebarOpen}
//         isSidebarOpen={isSidebarOpen}
//       />
//       <Sidebar
//         menuData={menuData}
//         isSidebarOpen={isSidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//       />
//       {children}
//       <Footer />
//     </>
//   );
// };

// export default Layout;














// import React, { useEffect, useState } from "react";
// import Footer from "../components/common/Footer";
// import Navbar from "../components/Home/Navbar";
// import Sidebar from "../components/Home/Sidebar";

// const Layout = ({ children }) => {
//     const [isSidebarOpen, setSidebarOpen] = useState(false);

//     useEffect(() => {
//         if (isSidebarOpen) {
//             document.body.classList.add("fixed-screen");
//         } else {
//             document.body.classList.remove("fixed-screen");
//         }
//     }, [isSidebarOpen]);

//     return (
//         <>
//             <Navbar className="sticky-bar" setSidebarOpen={setSidebarOpen} />
//             <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
//             {children}
//             <Footer />
//         </>
//     );
// };

// export default Layout;





