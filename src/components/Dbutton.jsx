import React,{useState} from 'react'




function Dbutton() {

const [dark,setDark] = useState(false);
const darkModeHandler =()=>{
    setDark(!dark);
    document.body.classList.toggle("dark");
}

  return (
    <div className="bg-yellow-50">
    <button onClick={()=> darkModeHandler()}>
  {
    dark && <IoSunny/>
  }{
    !dark && <IoMoon/>
  }</button>
  </div>
  )
}

export default Dbutton
