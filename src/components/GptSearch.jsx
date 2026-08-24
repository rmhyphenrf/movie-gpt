import Header from "./Header";
import gptBackground from "../assets/gpt_bg.png"
import { useSelector } from "react-redux";

const GptSearch = () => {
  const getLang = useSelector((store) => store.gpt.langObj);
  
  return (
    <div>
      <div className="relative">
        <Header />
      </div>
      <img src={gptBackground} className="absolute inset-0 -z-10 w-full h-auto"></img>
      <div className="absolute inset-0 flex flex-col items-center top-60">
        <h1 className="bg-linear-to-br from-teal-300 via-indigo-600 to-pink-400 bg-clip-text text-transparent text-4xl font-bold text-center">{getLang.heading1}</h1>
        <h2 className="my-3 text-center text-gray-400 text-sm">{getLang.heading2}</h2>
        <div className="w-1/3 min-h-15 bg-linear-to-br from-teal-300 via-indigo-600 to-pink-400 rounded-3xl p-px flex flex-col justify-center">
          <input className="w-full h-full px-3 rounded-3xl outline-none placeholder-gray-500 bg-gray-900 text-white" placeholder={getLang.placeHolder1}></input>
          </div>
      </div>
    </div>
  )
}

export default GptSearch;