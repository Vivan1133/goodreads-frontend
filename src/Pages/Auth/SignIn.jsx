import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "Redux/Slices/AuthSlice";

export default function SignIn() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signInDetails, setSignInDetails] = useState({
        email: '',
        password: ''
    });

    async function onFormSubmit(e) {
        e.preventDefault();
        const response = await dispatch(signin(signInDetails));
        if(response?.payload?.data) {
            navigate("/");
        }
        resetForm();
    }

    function handleFormChange(e) {
        const {name, value} = e.target;
        setSignInDetails({
            ...signInDetails,
            [name]: value
        });
    }

    function resetForm() {
        setSignInDetails({
            email: '',
            password: '',
        })
    }


    return (
        <div className="h-[100vh] flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#52525b] via-[#a1a1aa] to-[#e4e4e7]">
            <div>
                <h1 className="text-5xl font-bold">Login to your account</h1>
            </div>
            <div className="mt-4 font-serif font-semibold">
                <Link to="/signup">
                    <p>
                        Do not have an account?
                        <button className="px-4 py-1.5 mx-3 bg-gray-700 hover:bg-slate-600 rounded-md text-white">Sign Up</button>
                    </p>
                </Link>
            </div>
            <div className="w-full">
                <form onSubmit={onFormSubmit} className="flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="off">
                    <div className="my-5 w-1/3">
                        <input 
                            autoComplete="off"
                            type="email" 
                            name="email"
                            placeholder="Email..."
                            className="py-3 px-8 w-full rounded-md"
                            onChange={handleFormChange}
                            value={signInDetails.email}
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <input 
                            type="password" 
                            placeholder="Password..."
                            name="password"
                            className="py-3 px-8 w-full rounded-md"
                            onChange={handleFormChange}
                            value={signInDetails.password}
                        />
                    </div>

                    <div className="w-1/3 my-5">
                        <button className="text-xl w-full px-8 py-2 bg-green-500 hover:bg-green-400 rounded-md text-white" type="submit">Submit</button>
                    </div>

                </form>

            </div>
        </div>
    );
}