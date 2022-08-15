import {Route, Routes} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";
import ContactsPage from "./pages/ContactsPage";

import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import BrokenPage from "./pages/BrokenPage";



function App() {
    return(
        <>
            <Navigation/>
            <Routes>
                <Route path={'/'} element={<ProductsPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/contacts'} element={<ContactsPage/>}/>
                <Route path={'/broken'} element={<BrokenPage/>}/>
                <Route path={'/error'} element={<ErrorPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
            </Routes>
        </>


    )

}

export default App;
