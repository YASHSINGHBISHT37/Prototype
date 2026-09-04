import React, { useState } from 'react'
import Top3 from '../components/leaderboard/Top3'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/motion-primitives/accordion'
import SelectProfileImg from '../components/leaderboard/SelectProfileImg'
// import { BorderTrail } from './components/motion-primitives/border-trail'


export default function Leaderboard() {
    const leaderboard = [
        { enrollmentNo: "03990302024", name: "Yash Singh Bisht", marks: "8202 / 8600", gpa: 8.43, percentage: "95.37%", total: 8202, rank: 1, image: "/profile/boy-1.png" },
        { enrollmentNo: "02780302024", name: "Ananya Verma", marks: "8154 / 8600", gpa: 8.38, percentage: "94.81%", total: 8154, rank: 2, image: "/profile/girl-1.png" },
        { enrollmentNo: "04120302024", name: "Rohit Malhotra", marks: "8090 / 8600", gpa: 8.32, percentage: "94.07%", total: 8090, rank: 3, image: "/profile/boy-2.png" },
        { enrollmentNo: "01950302024", name: "Priya Nair", marks: "8021 / 8600", gpa: 8.25, percentage: "93.27%", total: 8021, rank: 4, image: "/profile/girl-2.png" },
        { enrollmentNo: "03340302024", name: "Aditya Kumar", marks: "7988 / 8600", gpa: 8.21, percentage: "92.88%", total: 7988, rank: 5, image: "/profile/boy-3.png" },
        { enrollmentNo: "02210302024", name: "Sneha Kapoor", marks: "7945 / 8600", gpa: 8.17, percentage: "92.38%", total: 7945, rank: 6, image: "/profile/girl-3.png" },
        { enrollmentNo: "04560302024", name: "Karan Mehta", marks: "7902 / 8600", gpa: 8.12, percentage: "91.88%", total: 7902, rank: 7, image: "/profile/boy-4.png" },
        { enrollmentNo: "01670302024", name: "Ishita Gupta", marks: "7864 / 8600", gpa: 8.08, percentage: "91.44%", total: 7864, rank: 8, image: "/profile/girl-4.png" },
        { enrollmentNo: "03810302024", name: "Vikram Singh", marks: "7820 / 8600", gpa: 8.03, percentage: "90.93%", total: 7820, rank: 9, image: "/profile/boy-5.png" },
        { enrollmentNo: "02490302024", name: "Riya Chauhan", marks: "7785 / 8600", gpa: 8.00, percentage: "90.52%", total: 7785, rank: 10, image: "/profile/girl-5.png" },
        { enrollmentNo: "04030302024", name: "Arjun Reddy", marks: "7742 / 8600", gpa: 7.95, percentage: "90.02%", total: 7742, rank: 11, image: "/profile/boy-6.png" },
        { enrollmentNo: "01280302024", name: "Meera Iyer", marks: "7698 / 8600", gpa: 7.90, percentage: "89.51%", total: 7698, rank: 12, image: "/profile/girl-1.png" },
        { enrollmentNo: "03650302024", name: "Devansh Joshi", marks: "7654 / 8600", gpa: 7.86, percentage: "89.00%", total: 7654, rank: 13, image: "/profile/boy-1.png" },
        { enrollmentNo: "02970302024", name: "Tanya Bhatia", marks: "7601 / 8600", gpa: 7.80, percentage: "88.38%", total: 7601, rank: 14, image: "/profile/girl-2.png" },
    ];

    const instituteList = [
        { id: 1, name: "Institute of Innovation and Technology and Management" },
        { id: 2, name: "Maharaja Agrasen Institute of Technology" },
        { id: 3, name: "Indira Gandhi Delhi Technical University for Women" },
        { id: 4, name: "Bhagwan Parshuram Institute of Technology" },
        { id: 5, name: "Guru Tegh Bahadur Institute of Technology" },
        { id: 6, name: "Maharaja Surajmal Institute of Technology" },
        { id: 7, name: "Vivekananda Institute of Professional Studies" },
        { id: 8, name: "Northern India Engineering College" },
    ];

    const programList = [
        { id: 1, name: "Bachelor of Computer Application" },
        { id: 2, name: "Bachelor of Technology (Computer Science)" },
        { id: 3, name: "Bachelor of Technology (Information Technology)" },
        { id: 4, name: "Bachelor of Business Administration" },
        { id: 5, name: "Master of Computer Application" },
        { id: 6, name: "Bachelor of Arts (Journalism & Mass Comm.)" },
        { id: 7, name: "Bachelor of Technology (Electronics & Comm.)" },
        { id: 8, name: "Master of Business Administration" },
    ];

    // ---- Institute / Program / Sem search state ----
    const [instituteOpen, setInstituteOpen] = useState(false);
    const [programOpen, setProgramOpen] = useState(false);
    const [instituteQuery, setInstituteQuery] = useState('');
    const [programQuery, setProgramQuery] = useState('');
    const [selectedInstitute, setSelectedInstitute] = useState('');
    const [selectedProgram, setSelectedProgram] = useState('');
    const [sem, setSem] = useState('Sem 1');

    const filteredInstitutes = instituteList.filter(item =>
        item.name.toLowerCase().includes(instituteQuery.toLowerCase())
    );
    const filteredPrograms = programList.filter(item =>
        item.name.toLowerCase().includes(programQuery.toLowerCase())
    );

    // ---- Student search state ----
    const [searchQuery, setSearchQuery] = useState('');

    const filteredStudents = leaderboard.filter(std =>
        std.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        std.enrollmentNo.includes(searchQuery)
    )

    // ---- Per-student detail generator ----
    const getStdDetail = (std) => [
        { name: 'Enrollment', sub: std.enrollmentNo },
        { name: 'College', sub: 'IITM' },
        { name: 'Branch', sub: 'BCA' },
        { name: 'Marks', sub: std.marks },
        { name: 'Percentage', sub: std.percentage },
        { name: 'Rank', sub: std.rank },
    ];

    return (
        <div className='w-full min-h-screen py-30 flex justify-center'>

            <div className='w-7xl'>

                {/* Heading */}
                <div className=''>
                    <h1 className='font-bold text-9xl tracking-tighter'>Rank Leaderboard</h1>
                    <p className='text-md tracking-tight text-black/50 leading-4 relative z-2'>
                        We only take your data when you allow us to take it and this leaderboard show only those student marks who allowed it to show on leaderboard.
                    </p>
                </div>

                <Top3 leaderboard={leaderboard} />

                <div className='text-right mt-10'>
                    <p className='text-sm tracking-tight text-black/50 hover:text-[#fe330a] transition-all ease-in-out duration-200 cursor-pointer'>Want to Add your Result?</p>
                    <p className='text-sm tracking-wide text-[#fe330a] transition-all ease-in-out duration-200 font-bold font-dot cursor-pointer'>Added</p>
                </div>

                {/* <SelectProfileImg /> */}

                <div className='flex flex-col items-center justify-center mt-30'>
                    <div>
                        {/* Search By Selecting Institute & Program */}
                        <div className='flex flex-col items-end text-right mb-10'>
                            <div className='mb-2'>
                                <h1 className='font-bold text-3xl tracking-tighter'>{selectedProgram || 'Bachelor of Computer Application'}</h1>
                                <div className='flex items-center gap-3'>
                                    <p className='text-md tracking-tight text-black/50'>{selectedInstitute || 'Institute of Innovation and Technology and Management'}</p>
                                    <div className='w-1 h-1 rounded-full bg-black/50'></div>
                                    <p className='text-md tracking-tight text-black/50'>{sem}</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-3'>

                                {/* Institute Dropdown */}
                                <div className='border rounded-full border-black/20 h-10 flex items-center px-4 w-sm bg-black/3 relative'>
                                    <input
                                        className='outline-0 text-sm capitalize w-full'
                                        type="text"
                                        placeholder='Search or Select Institute'
                                        value={selectedInstitute || instituteQuery}
                                        onChange={(e) => {
                                            setInstituteQuery(e.target.value);
                                            setSelectedInstitute('');
                                            setInstituteOpen(true);
                                        }}
                                        onFocus={() => setInstituteOpen(true)}
                                        onBlur={() => setTimeout(() => setInstituteOpen(false), 150)}
                                    />
                                    <i className="ph ph-caret-down text-lg cursor-pointer text-black/50 hover:text-black/70" onClick={() => setInstituteOpen(prev => !prev)}></i>

                                    {instituteOpen && filteredInstitutes.length > 0 && (
                                        <div className='w-full border rounded-2xl backdrop-blur-2xl border-black/20 absolute top-12 z-9999 left-0 text-left p-4 pb-3 bg-white/80'>
                                            {filteredInstitutes.slice(0, 5).map((item, i, arr) => (
                                                <p
                                                    key={item.id}
                                                    className={`leading-4 text-sm cursor-pointer border-black/20 ${i !== arr.length - 1 ? 'border-b pb-2' : 'pb-0'} ${i !== 0 ? 'pt-2' : 'pt-0'}`}
                                                    onMouseDown={() => {
                                                        setSelectedInstitute(item.name);
                                                        setInstituteQuery('');
                                                        setInstituteOpen(false);
                                                    }}
                                                >
                                                    {item.name}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Program Dropdown */}
                                <div className='border rounded-full border-black/20 h-10 flex items-center px-4 w-sm bg-black/3 relative'>
                                    <input
                                        className='outline-0 text-sm capitalize w-full'
                                        type="text"
                                        placeholder='Search or Select Program'
                                        value={selectedProgram || programQuery}
                                        onChange={(e) => {
                                            setProgramQuery(e.target.value);
                                            setSelectedProgram('');
                                            setProgramOpen(true);
                                        }}
                                        onFocus={() => setProgramOpen(true)}
                                        onBlur={() => setTimeout(() => setProgramOpen(false), 150)}
                                    />
                                    <i className="ph ph-caret-down text-lg cursor-pointer text-black/50 hover:text-black/70" onClick={() => setProgramOpen(prev => !prev)}></i>

                                    {programOpen && filteredPrograms.length > 0 && (
                                        <div className='w-full border rounded-2xl backdrop-blur-2xl border-black/20 absolute top-12 z-9999 left-0 text-left p-4 pb-3 bg-white/80'>
                                            {filteredPrograms.slice(0, 5).map((item, i, arr) => (
                                                <p
                                                    key={item.id}
                                                    className={`leading-4 text-sm cursor-pointer border-black/20 ${i !== arr.length - 1 ? 'border-b pb-2' : 'pb-0'} ${i !== 0 ? 'pt-2' : 'pt-0'}`}
                                                    onMouseDown={() => {
                                                        setSelectedProgram(item.name);
                                                        setProgramQuery('');
                                                        setProgramOpen(false);
                                                    }}
                                                >
                                                    {item.name}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Semester */}
                                <div className='border rounded-full border-black/20 h-10 flex items-center px-4 bg-black/3 relative'>
                                    <input
                                        className='outline-0 text-sm w-16 capitalize'
                                        type="text"
                                        value={sem}
                                        onChange={(e) => setSem(e.target.value)}
                                        placeholder='Sem 1'
                                    />
                                    <i className="ph ph-caret-down text-lg cursor-pointer text-black/50 hover:text-black/70"></i>
                                </div>

                                {/* Search Button */}
                                <div
                                    className='border rounded-full border-black/20 h-10 flex items-center px-4 bg-black/3 relative cursor-pointer'
                                    onClick={() => {
                                        console.log({ selectedInstitute, selectedProgram, sem });
                                    }}>
                                    <h1 className='font-bold'>Search</h1>
                                </div>
                            </div>
                        </div>

                        {/* Search Student */}
                        <div className='flex items-end justify-end mt-8 mb-2 gap-4 w-full'>
                            <div className='border rounded-full border-black/20 h-10 flex items-center px-3 w-sm bg-black/3'>
                                <i className="ph ph-magnifying-glass mr-2 text-lg cursor-pointer text-black/70"></i>
                                <input
                                    className='outline-0 text-sm capitalize w-full'
                                    type="text"
                                    placeholder='Search by Name / Enrollment Number'
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                {searchQuery && (
                                    <i className="ph ph-x text-lg cursor-pointer text-black/50 hover:text-black/70" onClick={() => setSearchQuery('')}></i>
                                )}
                            </div>

                            <div className='border rounded-full border-black/20 h-10 flex items-center px-4 bg-black/3 gap-2'>
                                <h1 className='text-xs md:text-sm font-dot uppercase tracking-wide whitespace-nowrap'>Students</h1>
                                <h1 className='text-xs md:text-sm uppercase font-dot font-black whitespace-nowrap'>{filteredStudents.length}</h1>
                            </div>
                        </div>
                    </div>

                    {/* Leaderboard */}
                    <Accordion className='flex flex-col items-center gap-2 w-5xl'>

                        {filteredStudents.map((std, i) => (
                            <AccordionItem
                                key={std.enrollmentNo}
                                value={std.enrollmentNo}
                                className='border border-black/20 rounded-3xl w-full hover:scale-104 data-[expanded]:scale-104 data-[expanded]:my-1 bg-black/3 pt-3 px-4 transition-all ease-in-out duration-300 cursor-pointer group backdrop-blur-lg relative'>

                                <AccordionTrigger className='flex justify-between w-full mb-3 cursor-pointer'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-10 h-10 rounded-full border border-black/20 bg-bg flex items-center justify-center overflow-hidden relative'>
                                            <h1 className='text-[4vh] font-dot font-bold relative z-2'>{std.rank}</h1>
                                        </div>

                                        <div className='w-12 h-12 flex items-center justify-center overflow-hidden relative'>
                                            <img src={std.image} alt={std.name} />
                                        </div>

                                        <div className='flex flex-col items-start ml-'>
                                            <h1 className='text-3xl font-dot font-bold relative z-2 uppercase tracking-tight'>{std.name}</h1>
                                            <p className='text-sm tracking-tighter text-black/50 leading-4 transition-all ease-in-out duration-300 relative z-2'>IITM || BCA</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className='text-4xl font-dot font-bold relative z-2'>{std.gpa}</h1>
                                        <p className='text-sm tracking-tighter text-right text-black/50 leading-4 transition-all ease-in-out duration-300 relative z-2'>SGPA</p>
                                    </div>

                                    <div className="w-full aspect-square -z-1 bg-[#fe330a] fixed top-100 rounded-full left-0 blur-[4vh] group-hover:top-10 group-data-[expanded]:top-10 transition-all duration-200 ease-in-out"></div>

                                </AccordionTrigger>

                                <AccordionContent>
                                    <div className='w-full border-t border-black/20 bg-[#E5E9F7] z-9999999999 relative grid grid-cols-4 gap-4 p-4 px-20 pl-30'>
                                        {getStdDetail(std).map((item, j) => (
                                            <div key={j} className='flex flex-col'>
                                                <p className='text-sm text-black/50 uppercase font-dot'>{item.name}</p>
                                                <p className='text-md uppercase tracking-tighter font'>
                                                    {item.name === 'Rank' ? `#${item.sub} of ${leaderboard.length}` : item.sub}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}

                        {filteredStudents.length === 0 && (
                            <p className='text-black/50 text-sm mt-6'>No students found matching your search.</p>
                        )}

                    </Accordion>

                </div>
            </div>

        </div>
    )
}