import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";

export default function Layout({children}) {
    return (
        <div className="bg-[#314151]">
            <Navbar />
                <div className="text-white h-[80vh] flex justify-center">
                    <div className="w-4/5">
                        {children}
                    </div>
                </div>
            <Footer />
        </div>
    );
}