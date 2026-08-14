import bgImg from "../assets/mv_bg.png"
import Header from "./Header";

const Login = () => {
    return (
        <div className="relative min-h-screen">
            <div className="m-4 p-2 absolute w-62 z-20">
                <Header />
            </div>
                        <div className="absolute inset-0">
                <img className="w-full h-full object-cover" src={bgImg} alt="bg" />
                <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/95 pointer-events-none"></div>
            </div>
             <div className="absolute inset-0 z-10 flex items-center justify-center">
                <form className="m-4 py-4 w-3/12 h-120 text-white flex flex-col items-center bg-black/80 rounded-2xl">
                    <h1 className="m-4 text-4xl">Sign In</h1>
                    <input className="w-8/12 mt-4 my-2 mx-4 p-2 bg-gray-800 rounded-lg" type="textbox" placeholder="Email"></input>
                    <input className="w-8/12 my-2 mx-4 p-2 bg-gray-800 rounded-lg" type="textbox" type="password" placeholder="password"></input>
                    <button className="w-8/12 my-6 p-2 bg-linear-to-br from-teal-300 via-indigo-600 to-pink-400 rounded-lg cursor-pointer">Sign In</button>
                    <p className="my-15 mx-22 self-start text-gray-400">New to Moviq?  <a className="text-white cursor-pointer">Sign up now</a></p>
                    
                </form>
            </div>

           
        </div>
    )
}

export default Login;