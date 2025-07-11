import React from 'react'

function Hero() {
  return (
    <div className="hero-section mx-[20px] md:mx-[60px] mt-[128px] min-h-[380px] bg-[#33187A] rounded-[40px] px-[58px] py-[40px]">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
            <div className="hero-text text-white md:w-[448px]">
                <h1 className="font-bold text-[30px] lg:text-[50px] mt-[30px] md:mt-0">Flip Through Faith</h1>
                <p className="mt-[12px] md:mt-[24px] mb-[24px]">
                    From stories to reflections, discover the complete collection of What's in Quran books!
                </p>
                <a href="" className="px-[12px] py-[10px] rounded-[10px] font-semibold bg-[#BA84FE]">
                    Start Reading
                </a>
            </div>
            <div className="hero-img">
                <img src="./hero-image.svg" className=""/>
            </div>
        </div>
    </div>
  )
}

export default Hero
