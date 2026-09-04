import React, { useState } from 'react'
// import { TextShimmer } from '@/components/motion-primitives/text-shimmer'


export default function Result() {
    const semMarks = [
        { label: "marks", value: 8972, outOf: '/9000', subHead: "Total Marks Obtained in Sem - 3" },
        { label: "sgpa", value: "8.75", subHead: "Semester Grade Point Average" },
        { label: "percentage", value: "87.20", outOf: '%', subHead: "Percentage of Marks Obtained" },
        { label: "total credits", value: 24, subHead: "Total Credits for the Semester" },
    ]
    const sem = ['Over all', 'Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'sem 5', 'sem 6', 'sem 7', 'sem 8', 'sem 9']
    const [select, setSelect] = useState('Sem 1')

    const details = [
        { label: "Enrollment No.", value: '03990302024' },
        { label: "Year of admission", value: 2024 ?? "—" },
        { label: "Institute", value: 'INSTITUTE OF INNOVATION IN TECHNOLOGY & MANAGEMENT' ?? "—", code: '903' },
        { label: "Program", value: 'BACHELOR OF COMPUTER APPLICATIONS' ?? "—", code: '020' },
    ]


    const subjects = [
        { paperCode: "BCA-202T", subjectName: "OPERATING SYSTEMS", credits: 4, internal: 37, external: 51, total: 88, grade: "A+" },
        { paperCode: "BCA-204T", subjectName: "SOFTWARE TESTING", credits: 4, internal: 40, external: 52, total: 92, grade: "O" },
        { paperCode: "BCA-212T", subjectName: "INTRODUCTION TO DATA SCIENCE", credits: 4, internal: 32, external: 51, total: 83, grade: "A+" },
        { paperCode: "BCA-222T", subjectName: "DIGITAL MARKETING", credits: 3, internal: 35, external: 57, total: 92, grade: "O" },
        { paperCode: "BCA-232", subjectName: "INTRODUCTION TO LOGIC AND CRITICAL THINKING", credits: 2, internal: 38, external: 43, total: 81, grade: "A+" },
        { paperCode: "BCA-234", subjectName: "HEALTH AND WELLNESS, YOGA EDUCATION AND SPORTS AND FITNESS", credits: 2, internal: null, external: 92, total: 92, grade: "O" },
        { paperCode: "BCA-202P", subjectName: "OPERATING SYSTEMS LAB", credits: 1, internal: 36, external: 44, total: 80, grade: "A+" },
        { paperCode: "BCA-204P", subjectName: "SOFTWARE TESTING LAB", credits: 1, internal: 37, external: 47, total: 84, grade: "A+" },
        { paperCode: "BCA-212P", subjectName: "DATA SCIENCE LAB", credits: 2, internal: 30, external: 46, total: 76, grade: "A+" }
    ];

    const grid = '[1fr_auto_0.8fr_0.8fr_0.8fr_0.8fr_0.8fr]'


    return (
        <div className='w-full px-4 min-h-full flex md:items-center md:justify-center bg-[#ECf1ff] text-[#121212] flex-col'>
            <div className="md:w-7xl py-28 flex flex-col gap-8 md:gap-10 w-full">

                {/* Mobile logout */}
                <div className='flex justify-between items-center w-full md:hidden'>
                    <div className='border justify-center rounded-xl cursor-pointer active:scale-96 hover:scale-105 transition-all ease-in-out duration-200 p-3 px-2 pr-3 py-1 border-black/20  bg-black/3 font-dot flex items-center gap-3'>
                        <i class="ph ph-arrow-left text-md"></i>
                        <h1 className='text-sm'>Logout</h1>
                    </div>

                    <div className='border justify-center rounded-xl cursor-pointer active:scale-96 hover:scale-105 transition-all ease-in-out duration-200 p-3 pl-4 py-1 border-black/20 bg-black/3 font-dot flex items-center gap-3'>
                        <h1 className='text-sm'>Export PDF</h1>
                        <i className="ph ph-caret-down text-md"></i>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex flex-col justify-between gap-6 md:gap-2 w-full'>
                        <div className='flex md:items-start md:justify-between'>
                            <h1 className='text-5xl md:text-6xl font-dot font-bold tracking-tight uppercase'>Yash Singh Bisht</h1>

                            <div className='md:flex items-center gap-2 hidden'>
                                <div className='border w-35 justify-center rounded-xl cursor-pointer active:scale-96 hover:scale-105 transition-all ease-in-out duration-200 p-3 px-2 pr-3 py-1 border-black/20  bg-black/3 font-dot flex items-center gap-3'>
                                    <i class="ph ph-arrow-left text-lg"></i>
                                    <h1>Logout</h1>
                                </div>

                                <div className='border w-40 justify-center rounded-xl cursor-pointer active:scale-96 hover:scale-105 transition-all ease-in-out duration-200 p-3 pl-4 py-1 border-black/20 bg-black/3 font-dot flex items-center gap-3'>
                                    <h1 className=''>Export PDF</h1>
                                    <i className="ph ph-caret-down text-lg"></i>
                                </div>
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
                                <h1 className="text-9xl font-bold font-dot" duration={2}>9.39</h1>
                                <h1 className='text-lg font-dot pb-3 text-black/50 tracking-tighter'>Out of 10.00</h1>
                            </div>
                        </div>
                    </div>


                    {/* Sem Select */}
                    <div className='flex gap-2 mt-10 md:mt-0 flex-wrap shrink-'>
                        {sem.map((item, i) => (
                            <div key={i} onClick={() => setSelect(item)}
                                className={`border w-fit group p-1 px-2 md:p-1 rounded-xl backdrop-blur-xs overflow-hidden md:px-2 cursor-pointer relative z-9999999 transition-all ease-in-out duration-300 hover:scale-106
                                        ${select === item ? 'bg-[#fe330a]/86 text-[#Ecf1ff] border-black/10' : 'bg-black/3 border-black/20'}`}>
                                <h1 className='text-xs md:text-sm font-dot uppercase tracking-wide whitespace-nowrap relative backdrop-blur-0 z-9'>{item}</h1>
                                <div className="w-full aspect-square bg-[#fe330a] fixed top-16 rounded-full left-0 z-1 blur-[1vh] group-hover:top-4 transition-all duration-350 ease-in-out"></div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Mobile CGPA/SGPA */}
                <div className='borde flex flex-col items-center w-full md:hidden '>
                    <h1 className='text-xl font-dot pb-3'>Cumulative GPA</h1>
                    {/* <TextShimmer className="text-9xl font-bold font-dot" duration={2}>9.39</TextShimmer> */}
                    <h1 className='text-md font-dot pb-3 text-black/50 tracking-tighter'>Out of 10.00</h1>
                </div>

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

                <div className='md:flex grid grid-cols-2 md:gap-3 gap-2 relative bg-black/3 border border-black/20 p-6 rounded-3xl overflow-hidden'>
                    {semMarks.map((item) => (
                        <div key={item.label}  className="w-full group flex flex-col p-4 justify-center gap-1 items-center py-4">
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
                </div>

                <div className='md:flex md:flex-row flex-col flex items-center justify-between w-full gap-3'>
                    <div className='border border-black/20 w-full rounded-2xl h-90 bg-black/3'></div>

                    <div className='border border-black/20 w-full rounded-2xl h-90 bg-black/3 p-5'>
                        <div>
                            <h1 className='font-bold font-dot tracking-tight text-2xl'>GRADE DISTRIBUTION</h1>
                            <p className='tracking-tight text-xs text-black/70'>Breakdown of grades for this semester</p>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>

                <div className='border border-border-20 rounded-2xl bg-muted-bg p-5'>
                    <div className={`grid grid-cols-[0.4fr_3fr_0.4fr_0.4fr_0.4fr_0.4fr_0.4fr] gap-2 font-bold text-sm uppercase text-text-muted pb-3`}>
                        <h1>Paper Code</h1>
                        <h1>Subject Name</h1>
                        <h1 className="text-center">Credits</h1>
                        <h1 className="text-center">Internal</h1>
                        <h1 className="text-center">External</h1>
                        <h1 className="text-center">Total</h1>
                        <h1 className="text-center">Grade</h1>
                    </div>

                    {subjects.map((item, index) => (
                        <div key={index} className={`grid grid-cols-[0.4fr_3fr_0.4fr_0.4fr_0.4fr_0.4fr_0.4fr] gap-2 items-center py-3 border-t border-border-20`}>
                            <h1 className="text-sm">{item.paperCode}</h1>
                            <h1 className="text-sm font-semibold">{item.subjectName}</h1>
                            <h1 className="text-center text-sm text-text-muted">{item.credits}</h1>
                            <h1 className="text-center text-sm text-text-muted">{item.internal ?? '-'}</h1>
                            <h1 className="text-center text-sm text-text-muted">{item.external}</h1>
                            <h1 className="text-center text-sm font-bold">{item.total}</h1>
                            <div className="flex justify-center">
                                <span
                                    className={`text-xs font-bold px-2 py-0.5 rounded ${item.grade === 'O'
                                        ? 'bg-yellow-600/80 text-white'
                                        : 'bg-green-600 text-white'
                                        }`}
                                >
                                    {item.grade}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}
