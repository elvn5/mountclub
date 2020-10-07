
import React, {useRef} from "react";
import "./Header.css";

export default function Header() {

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
// General scroll to element function


   const myRef = useRef(null)
   const executeScroll = () => scrollToRef(myRef)


  return (
    <div className="header">
      <div className="content">
        <h1 className="header__title beta uppercase montserrat regular line-after-heading">
          Горы зовут тех чья душа им по росту!
        </h1>
        {/* <div className='header__btn'>
          <button onClick={()=> executeScroll} className="pulse-button">
            <FontAwesomeIcon color="black" icon={faHiking} />
          </button>
        </div> */}
      </div>
      {/* <img src='./svg/backpack.svg'></img> */}
    </div>
  );
}
