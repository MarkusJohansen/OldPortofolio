import Navbtn from '../components/buttons/navbtn.js';
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { useRef } from 'react';



export default Top

function Top(){

    const [ display, setDisplay ] = useState( 'none' )

    const about = useRef(null);
    const projects = useRef(null);
    const cv = useRef(null);


    return(
        <div className="w-full">
            {/*content*/}
            <div className="w-full h-16 sm:h-24 lg:h-14 flex bg-weakTransparent shadow-lg justify-between sm:justify-evenly text-center lg:justify-between px-5 py-3 sm:flex-col lg:flex-row">
                <h1 className="font-medium sm:text-xl">Markus Johansen</h1>
                <div className="justify-center hidden sm:flex lg:justify-evenly my-3 lg:my-0">
                    <Navbtn text="About" onClick="#page2"/>
                    <Navbtn text="Projects" onClick="#page3"/>
                    <Navbtn text="CV" onClick="#page4"/>
                </div> 

                {/*hamburger ?kan dette bli et komponent.*/}
                <div className='h-3/4 sm:hidden'>
                    <Hamburger size="20" onToggle={toggled => {
                        if (toggled && window.innerWidth < 640) {
                            setDisplay( 'block' )
                        } else {
                            setDisplay( 'none' )
                        }
                    }
                    }/>
                </div>
            </div>

            {/*dropdown menu inspo: https://upmostly.com/tutorials/how-to-react-dropdown-menu*/}
            <div style={{display:display}} className="transition-opacity sm:hidden mb-10 shadow-md" >
                <Navbtn text="About" onClick="#page2"/>
                <Navbtn text="Projects" onClick="#page3"/>
                <Navbtn text="CV" onClick="#page4"/>
            </div>
        </div>
    );
}