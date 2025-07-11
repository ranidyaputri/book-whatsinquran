import React from 'react'

function Book() {
  return (
    <div className="book-section mt-[140px] mx-[60px]">
        <div className="book-preview mb-[140px]">
            {/* title */}
            <div className="flex justify-between items-center mb-[54px]">
                <div className="title w-[527px]">
                    <h4 className="font-bold text-[30px] text-[#33187A] mb-[18px]">
                        Explore the wisdom in every page
                    </h4>
                    <p className="">
                        Explore curated books that offer stories, thoughtful reflections, and meaningful lessons.
                    </p>
                </div>
                <div className="">
                    <a href="" className="px-[12px] py-[10px] rounded-[10px] font-semibold bg-[#BA84FE] text-white">
                        Browse All Books
                    </a>
                </div>
            </div>
            {/* card */}
            <div className="card-list flex justify-between gap-[20px]">
                {/* card */}
                <a href="" className="">
                    <div className="card min-h-[400px] max-h-[500px] p-[10px] bg-white hover:bg-[#FAF9F9] shadow-sm rounded-[20px]">
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
  )
}

export default Book
