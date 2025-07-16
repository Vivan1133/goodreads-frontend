import { Link } from "react-router-dom";

export default function SignIn() {
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center bg-slate-500">
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
                <form className="flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="off">
                    <div className="my-5 w-1/3">
                        <input 
                            type="email" 
                            placeholder="Email..."
                            className="py-3 px-8 w-full rounded-md"
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <input 
                            type="password" 
                            placeholder="Password..."
                            className="py-3 px-8 w-full rounded-md"
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