import About from "Components/About/About";
import Dashboard from "Pages/Auth/Dashboard";
import SignIn from "Pages/Auth/SignIn";
import SignUp from "Pages/Auth/SignUp";
import Home from "Pages/Home";
import NotFound from "Pages/NotFound";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/dashboard" element={<Dashboard />}> </Route>
            <Route path="/about" element={<About />}> </Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    );
}