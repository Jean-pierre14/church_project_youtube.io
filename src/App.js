import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";
import Contacte from "./Contacte";
import Nopage from "./Nopage";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Grace",
            age: 25
        }
    }
    
    render(){
        return(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}/>
                        <Route Home element={<Home/>}/>
                        <Route path="contact" element={<Contacte/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="*" element={<Nopage/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}
export default App;