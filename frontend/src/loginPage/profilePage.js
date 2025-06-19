import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Utility function to validate user object
    const isValidUser = (data) => {
        return (
            typeof data === "object" &&
            data !== null &&
            typeof data.name === "string" &&
            typeof data.email === "string"
        );
    };

    useEffect(() => {
        try {
            const userData = localStorage.getItem("user");
            if (!userData) {
                console.warn("No user data found in localStorage.");
                navigate("/loginPage");
                return;
            }

            const parsedUser = JSON.parse(userData);

            if (!isValidUser(parsedUser)) {
                console.warn("Invalid user data structure:", parsedUser);
                navigate("/loginPage");
                return;
            }

            setUser(parsedUser);
        } catch (error) {
            console.error("Error loading user data:", error);
            navigate("/loginPage");
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    if (loading) {
        return <div className="text-center mt-10">Loading profile...</div>;
    }

    if (!user) return null;

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center p-6">
                <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=FACC15&color=fff`}
                            alt="Profile"
                            className="w-32 h-32 rounded-full shadow-md mb-4 object-cover"
                        />
                        <h2 className="text-3xl font-bold text-yellow-700 mb-2">{user.name}</h2>
                        <p className="text-gray-600 mb-2">{user.email}</p>
                        <p className="text-sm text-gray-500 italic">Welcome to your profile page!</p>
                    </div>
                </div>
            </div>
        </>
    );
}
