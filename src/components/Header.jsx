import logo from "../assets/moviq_logo.png";
import userIcon from "../assets/user_icon.png";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";
import User from "./User";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const nav = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userClicked, setUserClicked] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (auth.currentUser) {
                    setIsLoggedIn(true);
                    nav("/browse");
                }
            } else {
                setIsLoggedIn(false);
                nav("/");
            }
        });
    })

    return (
        <div className="flex justify-between">
            <img className="m-2 p-2 w-48 h-20 shadow-white" src={logo} alt="logo"></img>
            <div className="flex flex-col items-end">
                {isLoggedIn && <img className="mx-4 mt-3 mb-2 w-9 h-9 shadow-white cursor-pointer" src={userIcon} alt="user" onClick={() => setUserClicked(!userClicked)}></img>}
                {userClicked && <User />}
            </div>            
        </div>
    )
}

export default Header;