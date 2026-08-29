import React, { useState } from 'react'

export default function Program({ selectedProgram, goToHome, goToProgram, setChoose }) {
    const semesters = selectedProgram?.semesters || Array.from({ length: 9 }, (_, i) => i + 1)
    const sem = ['All', ...semesters]

    const [select, setSelect] = useState('All')
    const [subjectSearch, setSubjectSearch] = useState('')
    const [selectedSubject, setSelectedSubject] = useState(null)
    const [open, setOpen] = useState(false)

    const subjects = selectedProgram?.subjects || []

    const filteredSubjects = subjects
        .filter((item) => select === 'All' ? true : item.sem === select)
        .filter((item) => item.name.toLowerCase().includes(subjectSearch.toLowerCase()))
        

    return (
        <div className='w-full h-full py-30 flex justify-center'>
            <div className='w-7xl'>

                <div className='flex items-center gap-6 pb-6'>
                    <i onClick={() => setChoose(false)} className="ph ph-arrow-left text-xl cursor-pointer text-black/70"></i>
                    <h1 className='text-md tracking-tight text-muted-text'>
                        <span onClick={goToHome} className='cursor-pointer hover:text-accent'>Study Resource</span> {' / '}
                        <span onClick={goToProgram} className='cursor-pointer hover:text-accent'>{selectedProgram.name}</span> {' / '}
                        <span>{select === 'All' ? 'All Semesters' : `Sem ${select}`}</span>
                    </h1>
                </div>

                <h1 className='font-bold text-8xl tracking-tighter leading-22'>{selectedProgram.name}</h1>

                <div className='flex items-center justify-between mt-18 '>
                    <div className='flex gap-2 flex-wrap shrink-0'>
                        {sem.map((item, i) => (
                            <div key={i} onClick={() => setSelect(item)}
                                className={`border w-fit group p-1 px-2 md:p-1.5 rounded-xl backdrop-blur-xs overflow-hidden md:px-3 cursor-pointer relative z-999999 transition-all ease-in-out duration-200 hover:scale-106
                        ${select === item ? 'bg-accent/80 text-[#Ecf1ff] border-black/10' : 'bg-black/3 border-black/20'}`}>
                                <h1 className='text-xs md:text-sm font-dot uppercase tracking-wide whitespace-nowrap relative backdrop-blur-0 z-9'>
                                    {item === 'All' ? 'All' : `Sem ${item}`}
                                </h1>
                                <div className="w-full aspect-square bg-accent fixed top-16 rounded-full left-0 z-1 blur-[1vh] group-hover:top-4 transition-all duration-350 ease-in-out"></div>
                            </div>
                        ))}
                    </div>

                    <div className='border rounded-full border-black/20 h-10 flex items-center px-3 w-sm bg-black/3'>
                        <i className="ph ph-magnifying-glass mr-2 text-lg cursor-pointer text-black/70"></i>
                        <input className='outline-0 text-sm capitalize w-full ' type="text" placeholder='Search Subjects...' value={subjectSearch} onChange={(e) => setSubjectSearch(e.target.value)}/>
                        {subjectSearch && (
                            <i onClick={() => setSubjectSearch('')} className="ph ph-x text-lg cursor-pointer text-black/50 hover:text-black/70"></i>
                        )}
                    </div>
                </div>

                <div className='mt-6 grid grid-cols-5 gap-2'>
                    {filteredSubjects.map((item, j) => (
                        <div onClick={() => { setSelectedSubject(item); setOpen(true) }} key={j}
                            className='overflow-hidden border border-black/20 flex flex-col rounded-xl p-4 pb-3 bg-black/3 relative backdrop-blur-lg cursor-pointer group'>

                            <div className='flex items-center gap-1.5 mb-2 text-xs'>
                                <p className='tracking-tighter text-muted-text leading-4 transition-all ease-in-out duration-300 relative z-2'>Sem {item.sem} </p>
                                <div className='w-1 h-1 rounded-full bg-black/20'></div>
                                <p className='tracking-tighter text-muted-text leading-4 transition-all ease-in-out duration-300 relative z-2'>BCA102T </p>
                            </div>

                            <h1 className='text-md font-dot leading-5 relative z-2'>{item.name}</h1>
                            <div className="w-full aspect-square bg-accent fixed top-100 rounded-full left-0 z-1 blur-[3vh] group-hover:top-16 transition-all duration-200 ease-in-out"></div>
                        </div>
                    ))}
                    {filteredSubjects.length === 0 && (
                        <p className='col-span-5 text-black/50 text-sm'>No Subject Found...</p>
                    )}
                </div>

            </div>
        </div>
    )
}