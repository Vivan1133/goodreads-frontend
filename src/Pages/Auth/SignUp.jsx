import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "Redux/Slices/AuthSlice";
import { Eye, EyeOff } from "lucide-react";

export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state.auth);

    const [signUpDetails, setSignUpDetails] = useState({
        email: '',
        password: '',
        username: ''
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    function handleFormChange(e) {
        const { name, value } = e.target;
        setSignUpDetails({
            ...signUpDetails,
            [name]: value
        });
        setErrors((prev) => ({ ...prev, [name]: '' }));
    }

    function validateForm() {
        const newErrors = {};
        if (!signUpDetails.username.trim()) newErrors.username = "Username is required";
        if (!signUpDetails.email.trim()) newErrors.email = "Email is required";
        if (!signUpDetails.password) newErrors.password = "Password is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!validateForm()) return;

        const response = await dispatch(signup(signUpDetails));
        if (response?.payload?.data) {
            navigate("/signin");
            resetForm();
        }
    }

    function resetForm() {
        setSignUpDetails({ email: '', password: '', username: '' });
        setErrors({});
        setShowPassword(false);
    }

    useEffect(() => {
        if(state.isLoggedIn) {
            navigate("/dashboard");
        }
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 via-gray-600 to-gray-900 px-4 py-10">
            <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center text-white mb-6">Create a new Account</h1>

                <form onSubmit={onFormSubmit} autoComplete="off" className="space-y-5">
                    <div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={signUpDetails.username}
                            onChange={handleFormChange}
                            className={`w-full px-5 py-3 rounded-md bg-white/80 focus:outline-none focus:ring-2 ${errors.username ? 'ring-red-500' : 'focus:ring-green-400'} placeholder-gray-700`}
                        />
                        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={signUpDetails.email}
                            onChange={handleFormChange}
                            className={`w-full px-5 py-3 rounded-md bg-white/80 focus:outline-none focus:ring-2 ${errors.email ? 'ring-red-500' : 'focus:ring-green-400'} placeholder-gray-700`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={signUpDetails.password}
                            onChange={handleFormChange}
                            className={`w-full px-5 py-3 pr-12 rounded-md bg-white/80 focus:outline-none focus:ring-2 ${errors.password ? 'ring-red-500' : 'focus:ring-green-400'} placeholder-gray-700`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-700"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 text-white text-lg font-semibold bg-green-500 hover:bg-green-600 rounded-md transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="mt-6 text-center text-white font-medium">
                    Already have an account?
                    <Link to="/signin">
                        <button className="ml-2 text-green-300 hover:text-green-100 underline">
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
