import logo from "Assets/Images/logo-color.png";
import { Link } from "react-router-dom";

export default function Home() {
    return (
            <div className="flex flex-col items-center justify-center gap-20 h-[100vh] bg-gradient-to-r from-[#d1d5db] via-[#6b7280] to-[#374151]">
                <div className="h-52 w-52">
                    <img 
                        className="w-full h-full" 
                        src={logo} 
                        alt="logo" 
                    />
                </div>
                <div className="flex justify-center items-center gap-6">
                    <div className="w-2/4 text-center font-semibold">
                        <h1 className="text-gray-600 text-5xl tracking-wider">
                            BOOK SHELF <br/>
                            <span className="text-[#562B4C]">
                                Your personal library and social network for bookworms
                            </span>
                        </h1>
                    </div>
                    <div>
                        <Link to="/signup">
                            <button className="rounded-md px-5 py-2 bg-gray-700 hover:bg-slate-600 font-mono font-bold text-white text-2xl">
                                Register
                            </button>
                        </Link>
                        <Link to="/signin">
                            <button className="rounded-md px-5 py-2 mx-4 bg-purple-950 hover:bg-purple-900 font-mono font-bold text-white text-2xl">
                                Login
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
    );
}
