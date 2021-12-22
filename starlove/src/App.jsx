import { Route, Routes } from "react-router-dom";
import './App.css';

import Detail from "./screens/Detail";
import Header from "./components/Header";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Footer from "./components/Footer";

function App() {
    return ( 
        <div>
        <Header />
        <Routes>
            <Route path="/"element = {<Home />}/> 
            <Route path="/search" element={<Search />}/> 
            <Route path="/detail/:id" element={<Detail />}/>
        </Routes> 
        <Footer />
        </div>
    );
}

export default App;