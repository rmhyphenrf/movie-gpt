import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { removeUser } from "../store/userSlice";

const User = () => {
    const disp = useDispatch();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            disp(removeUser());
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
            <div className="mx-3 bg-black/70 text-gray-300 outline-1 outline-gray-500 rounded-md flex flex-col">
                    <button className="m-1 px-3 py-2 hover:text-white hover:bg-white/10 cursor-pointer">Profile</button>
                    <button className="m-1 px-3 py-2 border-t border-t-gray-500 hover:text-white hover:bg-white/10 cursor-pointer" onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}

export default User;