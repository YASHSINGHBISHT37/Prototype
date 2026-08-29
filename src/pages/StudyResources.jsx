import React, { useState } from 'react'
import { p } from '../components/study-resources/p';
import Program from '../components/study-resources/Program';

export default function StudyResources() {
    document.title = "myResult | Study Resources";

    const [programSearch, setProgramSearch] = useState('')
    const [selectedProgram, setSelectedProgram] = useState(null)
    const [choose, setChoose] = useState(false)

    const filteredPrograms = p
        .filter((item) =>
            item.name.toLowerCase().includes(programSearch.toLowerCase()) ||
            item.code.toLowerCase().includes(programSearch.toLowerCase())
        )
        .sort((a, b) => a.code.localeCompare(b.code))

    if (choose && selectedProgram) {
        return (
            <Program
                selectedProgram={selectedProgram}
                goToHome={() => { setChoose(false); setSelectedProgram(null) }}
                goToProgram={() => setChoose(true)}
                setChoose={setChoose}
            />
        )
    }

    return (
        <div className='min-h-screen flex justify-center py-30'>
            <div className='w-7xl'>

                <div className='mb-20'>
                    <h1 className='font-bold text-9xl tracking-tighter'>Study Resource</h1>
                    <p className='text-md tracking-tight relative mt-2 text-accent'>from Guru Gobind Singh Indraprastha University</p>
                </div>

                <div className='flex items-center justify-end mt-6 gap-4'>
                    <div className='border rounded-full border-border-20 h-10 flex items-center px-3 w-sm bg-black/3'>
                        <i className="ph ph-magnifying-glass mr-2 text-lg cursor-pointer text-black/70"></i>
                        <input className='outline-0 text-sm capitalize w-full ' type="text" placeholder='Search Subjects...' value={programSearch} onChange={(e) => setProgramSearch(e.target.value)} />
                        {programSearch && (
                            <i onClick={() => setProgramSearch('')} className="ph ph-x text-lg cursor-pointer text-muted-text hover:text-black/70"></i>
                        )}
                    </div>

                    <div className='border rounded-full border-border-20 h-10 flex items-center px-4 bg-black/3 gap-2'>
                        <h1 className='text-xs md:text-sm font-dot uppercase tracking-wide whitespace-nowrap'>Program</h1>
                        <h1 className='text-xs md:text-sm uppercase font-dot font-black whitespace-nowrap'>{filteredPrograms.length}</h1>
                    </div>
                </div>

                <div className='mt-6 grid grid-cols-5 gap-2'>
                    {filteredPrograms.map((item, j) => (
                        <div onClick={() => { setSelectedProgram(item); setChoose(true) }} key={j} className='overflow-hidden border border-black/20 h-30 flex flex-col justify-between rounded-xl p-4 pb-3 bg-accent-bg relative backdrop-blur-lg cursor-pointer group'>
                            <h1 className='text-4xl font-dot font-bold relative z-2'>{item.code}</h1>
                            <p className='text-sm tracking-tighter text-muted-text leading-4 transition-all ease-in-out duration-300 relative z-2'>{item.name}</p>
                            <div className="w-full aspect-square bg-accent fixed top-100 rounded-full left-0 z-1 blur-[3vh] group-hover:top-16 transition-all duration-350 ease-in-out"></div>
                        </div>
                    ))}

                    {filteredPrograms.length === 0 && (
                        <p className='col-span-5 text-muted-text text-sm'>No Program Found</p>
                    )}
                </div>

            </div>
        </div>
    )
}   