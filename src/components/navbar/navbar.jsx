import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
        <div className="w-full flex justify-between items-center bg-white px-[20px] md:px-[60px] py-[20px] fixed top-0 z-1000 drop-shadow-sm">
            <div className="nav-brand">
                <p className="font-light text-xl md:text-[30px]">whatsin<span className="font-bold text-[#483D89]">quran</span></p>
            </div>
            <div className="nav-list">
                <ul className="flex md:gap-[20px] lg:gap-[58px] text-xs md:text-base">
                    <li>Home</li>
                    <li>Collection</li>
                    <li>
                        <a href="" className="border-[#BA84FE] text-[#BA84FE] rounded-xl font-bold border-1 px-[12px] py-[8px] hover:bg-[#BA84FE] hover:text-white">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Navbar
