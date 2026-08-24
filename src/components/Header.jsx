import logo from "../assets/mv_logo.png";
import userIcon from "../assets/user_icon.png";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";
import User from "./User";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GPT_SEARCH } from "../utils/constants";
import { localization } from "../utils/localization";
import { setLanguage } from "../store/gptSlice";

const Header = () => {
  const disp = useDispatch();
    const nav = useNavigate();
    const isGpt = useSelector((store) => store.gpt.showGptSearch);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userClicked, setUserClicked] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (auth.currentUser) {
                    setIsLoggedIn(true);
                    !isGpt ? nav("/browse") : nav("/gpt-search");
                }
            } else {
                setIsLoggedIn(false);
                nav("/");
            }
        });
    })

    const handleLangchange = (e) => {
      disp(setLanguage(localization[e.target.value]));
    }

    return (
        <div className="flex justify-between">
            <img className="m-2 p-2 w-48 h-20 shadow-white" src={logo} alt="logo"></img>
            <div className="flex">
              <div className="w-6/12">
                <select defaultValue="en" name="lang" id="lang" onChange={handleLangchange} className="m-6 px-1 w-22 h-8 bg-white/10 outline-1 outline-sky-400 text-white rounded-lg">
                  <option value="en" className="bg-gray-900">{GPT_SEARCH.lang.en}</option>
                  <option value="kn" className="bg-gray-900">{GPT_SEARCH.lang.kn}</option>
                  <option value="hi" className="bg-gray-900">{GPT_SEARCH.lang.hi}</option>
                </select>
              </div>
              <div className="w-6/12 m-3 flex flex-col items-end">
                  {isLoggedIn && <img className="mx-4 mt-3 mb-2 w-9 h-9 shadow-white cursor-pointer" src={userIcon} alt="user" onClick={() => setUserClicked(!userClicked)}></img>}
                  {userClicked && <User />}
              </div>
            </div>    
        </div>
    )
}

export default Header;