import React from 'react'

function Book() {
  return (
    <>
    <div className="book-section mt-[140px] mx-[20px] md:mx-[60px]">
        <div className="book-preview mb-[140px]">
            {/* title */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between md:items-center mb-[54px]">
                <div className="title md:w-[527px]">
                    <h4 className="font-bold text-[26px] md:text-[30px] text-[#33187A] mb-[18px]">
                        Explore the wisdom in every page
                    </h4>
                    <p className="">
                        Explore curated books that offer stories, thoughtful reflections, and meaningful lessons.
                    </p>
                </div>
                <div className="mt-[18px] md:mt-0">
                    <a href="" className="px-[12px] py-[10px] rounded-[10px] font-semibold bg-[#BA84FE] text-white">
                        Browse All Books
                    </a>
                </div>
            </div>
            {/* card */}
            <div className="card-list flex flex-wrap justify-between gap-[20px]">
                {/* card */}
                <a href="" className="">
                    <div className="card min-h-[320px] md:min-h-[400px] max-h-[500px] p-[10px] bg-white hover:bg-[#FAF9F9] shadow-sm rounded-[20px]">
                        <div className="card-img rounded-[22px] min-w-[246px] max-w-[300px] mb-[14px]">
                            <img src="./bear.jpg" className="h-full object-cover rounded-[22px]" />
                        </div>
                        <div className="card-text">
                            <h6 className="book-title font-semibold mb-[10px] line-clamp-1">Benny and the Strength Within</h6>
                            <p className="book-author text-xs font-light text-[#A6A6A6]">
                                Aliya, Fawziyah, Rajihah
                            </p>
                        </div>
                    </div>
                </a>
                {/* card */}
                <a href="" className="">
                    <div className="card min-h-[400px] p-[10px] bg-white hover:bg-[#FAF9F9] shadow-sm rounded-[20px]">
                        <div className="card-img rounded-[22px] min-w-[246px] max-w-[300px] mb-[14px]">
                            <img src="./bear.jpg" className="h-full object-cover rounded-[22px]" />
                        </div>
                        <div className="card-text">
                            <h6 className="book-title font-semibold mb-[10px] line-clamp-1">Benny and the Strength Within</h6>
                            <p className="book-author text-xs font-light text-[#A6A6A6]">
                                Aliya, Fawziyah, Rajihah
                            </p>
                        </div>
                    </div>
                </a>
                {/* card */}
                <a href="" className="">
                    <div className="card min-h-[400px] p-[10px] bg-white hover:bg-[#FAF9F9] shadow-sm rounded-[20px]">
                        <div className="card-img rounded-[22px] min-w-[246px] max-w-[300px] mb-[14px]">
                            <img src="./bear.jpg" className="h-full object-cover rounded-[22px]" />
                        </div>
                        <div className="card-text">
                            <h6 className="book-title font-semibold mb-[10px] line-clamp-1">Benny and the Strength Within</h6>
                            <p className="book-author text-xs font-light text-[#A6A6A6]">
                                Aliya, Fawziyah, Rajihah
                            </p>
                        </div>
                    </div>
                </a>
                {/* card */}
                <a href="" className="">
                    <div className="card min-h-[400px] p-[10px] bg-white hover:bg-[#FAF9F9] shadow-sm rounded-[20px]">
                        <div className="card-img rounded-[22px] min-w-[246px] max-w-[300px] mb-[14px]">
                            <img src="./bear.jpg" className="h-full object-cover rounded-[22px]" />
                        </div>
                        <div className="card-text">
                            <h6 className="book-title font-semibold mb-[10px] line-clamp-1">Benny and the Strength Within</h6>
                            <p className="book-author text-xs font-light text-[#A6A6A6]">
                                Aliya, Fawziyah, Rajihah
                            </p>
                        </div>
                    </div>
                </a>
                
            </div>
        </div>
    </div>

    <div className="book-language mb-[170px]">
        <div className="bg relative">
            <img src="./rectangle.svg" className="w-full"/>
            <div className="flex justify-between items-stretch w-full absolute bottom-0 px-[155px]">
                <div className="bookshelf-img">
                    <img src="./bookshelf-image.svg" className="w-30 sm:w-50 lg:w-60 xl:w-full" />
                </div>
                <div className="text-section w-[412px] text-center text-white">
                    <h1 className="font-bold text-[50px] mb-[24px]">One Collection, Many Languages</h1>
                    <p className="mb-[49px]">
                        Explore Our Books in Malay, English, Indonesian, Arabic, and Japanese
                    </p>
                    <div className="flag-img flex gap-[9px] justify-between rounded-[50px] bg-white px-[21px] py-[7px]">
                        <img src="./united-kingdom.png" className="w-[64px]" />
                        <img src="./malaysia.png" className="w-[64px]" />
                        <img src="./indonesia.png" className="w-[64px]" />
                        <img src="./japan.png" className="w-[64px]" />
                        <img src="./saudi-arabia.png" className="w-[64px]" />
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
    </>
  )
}

export default Book
