import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    const navigate = useNavigation();
    const isLoading = navigate.state === 'loading';
    return (
        <div className="px-3">
            <NavBar></NavBar>
            {
                isLoading ? <h1>Loading</h1> 
                : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;