import React, { useState } from 'react'
import GradeDistribution from './analysis/GradeDistribution'
import SemStats from './analysis/SemStats'
import MarksSheet from './MarksSheet'
import GPATrend from './analysis/GPATrend'
import OverAllGD from './analysis/OverAllGD'
import { div } from 'motion/react-client'
// import { TextShimmer } from '@/components/motion-primitives/text-shimmer'
import std from './../data/std.json'
import ResultDetails from './ResultDetails'

export default function Result() {
    const [select, setSelect] = useState('Over All')

    const isOverAll = select === 'Over All'

    const semOptions = ['Over All', ...std.semesters.map((item) => `Sem ${item.semester}`)]

    const details = [
        { label: "Enrollment No.", value: std.enrollmentNo ?? "—" },
        { label: "Year of admission", value: std.yearOfAdmission ?? "—" },
        { label: "Institute", value: std.institute ?? "—", code: '903' },
        { label: "Program", value: std.program ?? "—", code: '020' },
    ]


    return (
        <div className='w-full px-4 min-h-full flex md:items-center md:justify-center bg-bg text-text flex-col'>
            <div className="md:w-7xl py-28 flex flex-col gap-8 md:gap-6 w-full">

                <div className='flex flex-col'>
                    <div className='flex flex-col justify-between gap-6 md:gap-2 w-full'>

                        <div className='flex md:items-start md:justify-between'>
                            <h1 className='text-5xl md:text-6xl font-dot font-bold tracking-tight uppercase'>{std.name}</h1>

                            {/* BTN */}
                            <div className='flex items-center justify-center gap-2 tracking-tight text-sm relative'>
                                <div className='flex items-center gap-3 border backdrop-blur overflow-hidden border-border-20 group rounded-xl bg-muted-bg p-1.5 px-4 pr-6 cursor-pointer relative hover:scale-106 transition-all ease-in-out duration-250'>
                                    <i class="ph ph-arrow-left text-lg"></i>
                                    <h1 className=' relative z-1'>Logout</h1>
                                    <div className="w-full aspect-square bg-accent/90 fixed top-16 rounded-full left-0 blur-[1vh] group-hover:top-5 transition-all duration-350 ease-in-out"></div>
                                </div>

                                <div className='flex items-center gap-3 border backdrop-blur overflow-hidden border-border-20 group rounded-xl bg-muted-bg p-1.5 px-4 pl-5 cursor-pointer relative hover:scale-106 transition-all ease-in-out duration-250'>
                                    <i className="ph ph-download-simple text-lg"></i>
                                    <h1 className=' relative z-1'>Export PDF</h1>
                                    <i class="ph ph-caret-down text-lg"></i>
                                    <div className="w-full aspect-square bg-accent/90 fixed bottom-16 rounded-full left-0 blur-[1vh] group-hover:bottom-4 transition-all duration-350 ease-in-out"></div>
                                </div>

                                {/* <div className='flex flex-col border border-border-20 z-999999999 bg-muted-bg backdrop-blur-2xl absolute top-10 right-0 rounded-xl'>
                                    <h1 className='text-xs px-6 py-2 border-b border-border-20 text-muted-text text-left'>Select Export Option</h1>

                                    <div className='flex items-center justify-center gap-2 hover:bg-bg border pr-4 hover:border-black/20 border-border-10/0 px-3 p-1 rounded-lg my-1 cursor-pointer mx-1'>
                                        <div className='w-1.5 h-1.5 bg-accent/90 rounded-full'></div>
                                        <p>All Semester</p>
                                    </div>

                                    <div className='border-t py-1 border-border-20'>
                                        {sem.slice(0, 4).map((item, i) => (
                                            <div className='flex items-center justify-center pr-6 gap-2 hover:bg-bg px-3 p-1 rounded-lg cursor-pointer border-border-10/0  mx-1 border hover:border-black/20'>
                                                <div className='w-1.5 h-1.5 bg-accent/60 rounded-full'></div>
                                                <p>Semester {i + 1}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className='flex items-center justify-between gap-5 w-full'>

                            <div className='flex flex-col justify-between gap-6 md:gap-10 w-full'>
                                <div className='w-full grid grid-cols-2 gap-4 md:gap-3'>
                                    {details.map((item, i) => (
                                        <div key={item.label ?? i} className='flex flex-col gap-0.5'>
                                            <h1 className='text-xs md:text-sm font-dot text-black/50 uppercase'>{item.label}</h1>
                                            <div className='flex'>
                                                <span className='text-sm leading-4 md:text-lg tracking-tighter md:leading-5 uppercase'>{item.value}
                                                    {item.code && (
                                                        <span className='text-[1vh] backdrop-blur-xs md:text-xs ml-2 md:ml-3 rounded-full border-[#fe330a]/40 md:border-[#fe330a]/40 font-bold bg-black/3 text-[#fe330a] tracking-wider font-dot uppercase border p-1.5 py-0.5 md:p-2 md:py-1'>
                                                            {item.code}
                                                        </span>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='borde lg:flex flex-col items-center w-80 hidden'>
                                <h1 className='text-2xl font-dot pb-3'>Cumulative GPA</h1>
                                {/* <TextShimmer className="text-9xl font-bold font-dot" duration={2}>9.39</TextShimmer> */}
                                <h1 className="text-9xl font-bold font-dot" duration={2}>{std.cgpa}</h1>
                                <h1 className='text-lg font-dot pb-3 text-black/50 tracking-tighter'>Out of 10.00</h1>
                            </div>
                        </div>
                    </div>

                    {/* Sem Select */}
                    <div className='flex gap-2 mt-10 md:mt-0 flex-wrap shrink-'>
                        {semOptions.map((item, i) => (
                            <div key={i} onClick={() => setSelect(item)}
                                className={`border w-fit group p-1 px-2 md:p-1 rounded-xl backdrop-blur-xs overflow-hidden md:px-2 cursor-pointer relative z-9999999 transition-all ease-in-out duration-250 hover:scale-110
                                        ${select === item ? 'bg-[#fe330a]/86 text-[#Ecf1ff] border-black/10' : 'bg-muted-bg border-border-10'}`}>
                                <h1 className='text-xs md:text-sm font-dot uppercase tracking-wide whitespace-nowrap relative backdrop-blur-0 z-9'>{item}</h1>
                                <div className="w-full aspect-square bg-[#fe330a] fixed top-16 rounded-full left-0 z-1 blur-[1vh] group-hover:top-4 transition-all duration-350 ease-in-out"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <ResultDetails />

                {isOverAll && (
                    <div className='md:flex md:flex-row flex-col flex items-center justify-between w-full gap-3'>
                        <GPATrend />
                        <OverAllGD />
                    </div>
                )}

                {!isOverAll && (
                    <div className='md:flex md:flex-row flex-col flex items-center justify-between w-full gap-3'>
                        <SemStats />
                        <GradeDistribution />
                    </div>
                )}

                <MarksSheet />

                {/* Check Another Result / View Leaderboard Btns */}
                <div className='flex items-center justify-center gap-5 tracking-tight font-bold text-sm'>
                    <div className='border backdrop-blur overflow-hidden border-border-20 group rounded-2xl bg-muted-bg p-1.5 px-4 pr-5 cursor-pointer relative hover:scale-106 transition-all ease-in-out duration-250'>
                        <h1 className=' relative z-1'>Check Another Result</h1>
                        <div className="w-full aspect-square bg-accent fixed top-16 rounded-full left-0 blur-[1vh] group-hover:top-4 transition-all duration-350 ease-in-out"></div>
                    </div>

                    <div className='border backdrop-blur overflow-hidden border-accent/40 text-accent group rounded-2xl bg-muted-bg p-1.5 px-4 pr-5 cursor-pointer relative hover:scale-106 transition-all ease-in-out duration-250'>
                        <h1 className=' relative z-1'>View Leaderboard</h1>
                        <div className="w-full aspect-square bg-accent fixed bottom-16 rounded-full left-0 blur-[1vh] group-hover:bottom-4 transition-all duration-350 ease-in-out"></div>
                    </div>
                </div>

            </div>

        </div>
    )
}
