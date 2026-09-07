import React from 'react'

export default function ResultDetails() {
    const semMarks = [
        { label: "marks", value: 8972, outOf: '/9000', subHead: "Total Marks Obtained in Sem - 3" },
        { label: "sgpa", value: "8.75", subHead: "Semester Grade Point Average" },
        { label: "percentage", value: "87.20", outOf: '%', subHead: "Percentage of Marks Obtained" },
        { label: "total credits", value: 24, subHead: "Total Credits for the Semester" },
    ]

    return (
        <div className='md:flex grid grid-cols-2 md:gap-3 gap-2 relative bg-muted-bg border border-border-20 p-6 py-8 rounded-4xl overflow-hidden'>
            {/* details */}
            {/* <div className='md:flex grid grid-cols-2 md:gap-3 gap-2 relative'>
                    {semMarks.map((item) => (
                        <div
                            key={item.label}
                            className=" nth-[1]:rounded-br-none nth-[2]:rounded-bl-none nth-[3]:rounded-tr-none nth-[4]:rounded-tl-none nth-[4]:rounded-br-none nth-[3]:rounded-bl-none nth-[2]:rounded-tr-none nth-[1]:rounded-tl-none w-full group flex flex-col p-4 justify-center gap-1 items-center border border-black/20 rounded-3xl backdrop-blur-xs py-4 bg-black/3 overflow-hidden">
                            <div className='w-full h-full bg-[#F3F3F3]/40 z-1 absolute backdrop-blur-sm'></div>

                            <p className="text-xs md:text-sm uppercase pb-2 relative z-9 font-bold tracking-tighter">{item.label}</p>
                            <h1 className="text-5xl md:text-7xl font-bold relative z-9 tracking-tight uppercase font-dot text-[#fe330a]/90">
                                {item.value}
                                {item.outOf && (
                                    <span className='text-sm md:text-xl font-normal tracking-normal text-black'>{item.outOf}</span>
                                )}
                            </h1>
                            <p className="text-xs md:text-sm pt-2 relative z-9 leading-3">{item.subHead}</p>

                            <div className="w-full aspect-square bg-[#fe330a]/80 fixed top-60 rounded-full left-0 -z-1 blur-[3vh] group-hover:top-16 transition-all duration-350 ease-in-out"></div>
                        </div>
                    ))}
                </div> */}

            {semMarks.map((item) => (
                <div key={item.label} className="w-full group flex flex-col borde justify-center gap-1 items-center py-2">
                    <p className="uppercase pb-2 relative z-9 font-bold tracking-tighter">{item.label}</p>
                    <h1 className="text-5xl md:text-7xl font-bold relative z-9 tracking-tight uppercase font-dot text-[#fe330a]/90">
                        {item.value}
                        {item.outOf && (
                            <span className='text-c md:text-xl font-normal tracking-normal text-muted-text/50'>{item.outOf}</span>
                        )}
                    </h1>
                    <p className="text-xs text-muted-text md:text-xs pt-3 relative z-9 leading-3">{item.subHead}</p>

                    <div className="w-full aspect-square bg-[#fe330a]/80 fixed top-60 rounded-full left-0 -z-1 blur-[3vh] group-hover:top-16 transition-all duration-350 ease-in-out"></div>
                </div>
            ))}
        </div>
    )
}
