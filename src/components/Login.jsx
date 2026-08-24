import { useRef, useState } from "react";
import bgImg from "../assets/mv_bg.png"
import Header from "./Header";
import { checkValidation } from "../utils/validator";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const Login = () => {
    const disp = useDispatch();
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorString, setErrorString] = useState("");

    const handleSubmit = () => {
        const errMsg = checkValidation(email.current.value, password.current.value, fullName.current && fullName.current.value);
        setErrorString(errMsg);

        if (errMsg) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                const { uid } = user;
                disp(addUser({
                    userId: uid, email: email.current.value, password: password.current.value, displayName: fullName.current.value,
                }));
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorString(errorCode + ": " + errorMessage);
                // ..
            });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const { uid } = user;
                disp(addUser({
                    userId: uid, email: email.current.value, password: password.current.value,
                }));
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorString(errorCode + ": " + errorMessage);
            });
        }
    }

    const email = useRef();
    const password = useRef();
    const fullName = useRef();

    return (
        <div className="relative min-h-screen">
            <div className="absolute w-full z-20">
                <Header />
            </div>
                        <div className="absolute inset-0">
                <img className="w-full h-full object-cover" src={bgImg} alt="bg" />
                <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/95 pointer-events-none"></div>
            </div>
             <div className="absolute inset-0 z-10 flex items-center justify-center">
                <form className="m-4 py-4 w-3/12 h-120 text-white flex flex-col items-center bg-black/80 rounded-2xl"  onSubmit={(e) => e.preventDefault()}>
                    <h1 className="m-4 text-4xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                    {!isSignIn && <input className="w-8/12 mt-4 mx-4 p-2 bg-gray-800 rounded-lg" ref={fullName} type="textbox" placeholder="Full Name"></input>}
                    <input className="w-8/12 mt-4 my-2 mx-4 p-2 bg-gray-800 rounded-lg" ref={email} type="textbox" placeholder="Email"></input>
                    <input className="w-8/12 my-2 mx-4 p-2 bg-gray-800 rounded-lg" ref={password} type="password" placeholder="password"></input>
                    <div className="text-red-600 text-sm">{ errorString}</div>
                    <button className="w-8/12 my-6 p-2 bg-linear-to-br from-teal-300 via-indigo-600 to-pink-400 rounded-lg cursor-pointer" onClick={handleSubmit}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                    {isSignIn ? <p className="my-10 mx-22 self-start text-gray-400">New to Moviq?  <span className="text-white cursor-pointer hover:text-teal-200" onClick={() => setIsSignIn(!isSignIn)}>Sign up now</span></p> :
                        <p className="my-10 mx-22 self-start text-gray-400">Already a user ?  <span className="text-white cursor-pointer hover:text-teal-200" onClick={() => setIsSignIn(!isSignIn)}>Sign in</span></p>}
                    
                </form>
            </div>

           
        </div>
    )
}

export default Login;