import React, { useState } from 'react'

export default function Subject({ subject, onClose }) {
    const subjectOpts = ['Theory', 'Lab', 'Notes', 'PYQs', 'Practicals', 'Books']
    const [select, setSelect] = useState(subjectOpts[0])

    const units = subject?.units || [
        { name: 'Unit 1', syllbus: 'Syllabus content for unit 1 goes here...' },
        { name: 'Unit 2', syllbus: 'Syllabus content for unit 2 goes here...' },
        { name: 'Unit 3', syllbus: 'Syllabus content for unit 3 goes here...' },
        { name: 'Unit 4', syllbus: 'Syllabus content for unit 4 goes here...' },
    ]

    return (
        <div onClick={onClose} className='w-full h-full fixed top-0 left-0 bg-black/20 backdrop-blur z-[999999999999] p-70 py-20 flex items-center justify-center overflow-hidden'>
            <div onClick={(e) => e.stopPropagation()} className='w-full h-full flex justify-center border border-black/30 backdrop-blur-3xl bg-[#ECF1Ff] rounded-4xl p-8 overflow-hidden z-[9999] relative'>

                <div className='w-7xl'>
                    <i onClick={onClose} className="ph ph-x text-2xl absolute top-6 right-6 cursor-pointer text-black/50 hover:text-black/70"></i>
                    <div>
                        <div className='flex items-center gap-1.5 mb-2 text-sm'>
                            <p className='tracking-tighter text-muted-text leading-4 transition-all ease-in-out duration-300 relative z-2'>Sem 1 </p>
                            <div className='w-1 h-1 rounded-full bg-black/20'></div>
                            <p className='tracking-tighter text-muted-text leading-4 transition-all ease-in-out duration-300 relative z-2'>BCA102T </p>
                        </div>
                        <h1 className='font-bold text-7xl w-5xl tracking-tighter relative z-2'>{subject?.name}</h1>
                    </div>
                    <div className='flex items-center mt-10 gap-40'>
                        <div className='flex gap-2 flex-wrap shrink-0'>
                            {subjectOpts.map((item, i) => (
                                <div key={i} onClick={() => setSelect(item)}
                                    className={`border w-fit group p-1 px-2 md:p-1.5 rounded-xl backdrop-blur-xs overflow-hidden md:px-3 cursor-pointer relative z-999999 transition-all ease-in-out duration-200 hover:scale-106
                                    ${select === item ? 'bg-accent/86 text-[#Ecf1ff] border-black/10' : 'bg-black/3 border-black/20'}`}>
                                    <h1 className='text-xs md:text-sm font-dot uppercase tracking-wide whitespace-nowrap relative backdrop-blur-0 z-9'>{item}</h1>
                                    <div className="w-full aspect-square bg-accent fixed top-16 rounded-full left-0 z-1 blur-[1vh] group-hover:top-4 transition-all duration-200 ease-in-out"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='mt-6'>
                        <div className='flex-col gap-3 grid grid-cols-1 mt-6 relative z-[999]'>
                            {units.map((item, i) => (
                                <div key={i} className='border border-black/20 rounded-2xl p-4 bg-[#E5E9F7]/80 backdrop-blur-3xl flex flex-col gap-2'>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='cursor-pointer text-xl font-dot uppercase font-bold'>{item.name}</h1>
                                        <i className="ph ph-caret-down text-xl cursor-pointer text-black/50 hover:text-black/70"></i>
                                    </div>
                                    <h1 className='cursor-pointer text-md leading-6 text-black/70'>{item.syllbus}</h1>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}