import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "Redux/Slices/AuthSlice";

export default function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state.auth);

    const [signInDetails, setSignInDetails] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    async function onFormSubmit(e) {
        e.preventDefault();
        const response = await dispatch(signin(signInDetails));
        if(response?.payload?.token) {
            navigate("/dashboard");
        } else {
            setError("Invalid credentials");
        }
        resetForm();
    }

    function handleFormChange(e) {
        const { name, value } = e.target;
        setSignInDetails({
            ...signInDetails,
            [name]: value
        });
    }

    function resetForm() {
        setSignInDetails({
            email: '',
            password: ''
        });
    }

    useEffect(() => {
        if(state.isLoggedIn) {
            navigate("/dashboard");
        }
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 via-gray-600 to-gray-900 px-4 py-10">
            <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center text-white mb-6">Welcome Back</h1>

                <form onSubmit={onFormSubmit} autoComplete="off" className="space-y-5">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={signInDetails.email}
                        onChange={handleFormChange}
                        className="w-full px-5 py-3 rounded-md bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-700"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={signInDetails.password}
                        onChange={handleFormChange}
                        className="w-full px-5 py-3 rounded-md bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-700"
                    />

                    {error && <p className="text-red-300 text-sm text-center">{error}</p>}

                    <button
                        type="submit"
                        className="w-full py-3 text-white text-lg font-semibold bg-green-500 hover:bg-green-600 rounded-md transition duration-200"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center text-white font-medium">
                    Don't have an account?
                    <Link to="/signup">
                        <button className="ml-2 text-green-300 hover:text-green-100 underline">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
