import {Route, Routes} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";
import ContactsPage from "./pages/ContactsPage";


function App() {
    return(
        <>
            <Navigation/>
            <Routes>
                <Route path={'/'} element={<ProductsPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/contacts'} element={<ContactsPage/>}/>
                <Route path={'/support'} element={<SupportPage/>}/>
            </Routes>
        </>


    )

}

export default App;
