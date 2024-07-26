
import Navbar from '../components/Home/Navbar';
import Footer from '../components/common/Footer';


const Layout = ({ children, menuData, setSidebarOpen, isSidebarOpen }) => {

    return (
        <>
            <Navbar
                className="sticky-bar"
                menuData={menuData}
                setSidebarOpen={setSidebarOpen}
                isSidebarOpen={isSidebarOpen}
            />
            {/* <Navbar className="sticky-bar" menuData={menuData} setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} /> */}
            {children}
            <Footer />

        </>
    );
};

export default Layout;






















