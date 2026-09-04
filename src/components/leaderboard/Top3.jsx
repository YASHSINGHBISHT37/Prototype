import React from 'react'

export default function Top3() {
    return (
        <div className='w-full flex items-end justify-center gap-4 h-100'>

            <div className='flex flex-col gap-3 '>
                <div className='flex items-center justify-between border p-3 rounded-3xl bg-black/3 border-black/20'>
                    <div className='flex items-center gap-2'>
                        <div className='w-13 h-13 flex items-center justify-center overflow-hidden relative'>
                            <img src="/profile/boy-2.png" alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl tracking-tighter uppercase font-dot font-bold relative z-2'>Yash Singh Bisht</h1>
                            <p className='text-sm tracking-tighter text-black/50 leading-4 transition-all ease-in-out duration-300 relative z-2'>IITM || BCA</p>
                        </div>
                    </div>
                    <h1 className='text-3xl font-dot font-bold relative z-2'>9.39</h1>
                </div>

                <div className='w-90 h-46 rounded-3xl cursor-pointer hover:h-56 transition-all duration-200 ease-in-out border border-black/20 bg-black/3 flex items-center justify-center overflow-hidden relative'>
                    <h1 className='text-9xl font-dot font-bold relative z-2'>2</h1>
                    <div className="w-full h-full bg-[#fe330a] absolute top-40 rounded-full right-0 z-1 blur-[4vh]"></div>
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-between border p-3 rounded-3xl bg-black/3 border-black/20'>
                    <div className='flex items-center gap-2'>
                        <div className='w-13 h-13 flex items-center justify-center overflow-hidden relative'>
                            <img src="/profile/boy-1.png" alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl tracking-tighter uppercase font-dot font-bold relative z-2'>Yash Singh Bisht</h1>
                            <p className='text-sm tracking-tighter text-black/50 leading-4 transition-all ease-in-out duration-300 relative z-2'>IITM || BCA</p>
                        </div>
                    </div>
                    <h1 className='text-3xl font-dot font-bold relative z-2'>9.39</h1>
                </div>

                <div className='w-90 h-60 rounded-3xl cursor-pointer hover:h-70 transition-all duration-200 ease-in-out border border-black/20 bg-black/3 items-center overflow-hidden relative flex flex-col justify-center'>
                    <h1 className='text-9xl font-dot font-bold relative z-2'>1</h1>
                    <div className="w-full h-full bg-[#fe330a] absolute top-40 rounded-full right-0 z-1 blur-[8vh]"></div>
                </div>
            </div>

            <div className='flex flex-col gap-3 '>
                <div className='flex items-center justify-between border p-3 rounded-3xl bg-black/3 border-black/20'>
                    <div className='flex items-center gap-2'>
                        <div className='w-13 h-13 flex items-center justify-center overflow-hidden relative'>
                            <img src="/profile/boy-3.png" alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl tracking-tighter uppercase font-dot font-bold relative z-2'>Yash Singh Bisht</h1>
                            <p className='text-sm tracking-tighter text-black/50 leading-4 transition-all ease-in-out duration-300 relative z-2'>IITM || BCA</p>
                        </div>
                    </div>
                    <h1 className='text-3xl font-dot font-bold relative z-2'>9.39</h1>
                </div>

                <div className='w-90 h-36 rounded-3xl cursor-pointer border hover:h-46 transition-all duration-200 ease-in-out border-black/20 bg-black/3 flex items-center justify-center overflow-hidden relative'>
                    <h1 className='text-9xl font-dot font-bold relative z-2'>3</h1>
                    <div className="w-full h-full bg-[#fe330a] absolute top-30 rounded-full right-0 z-1 blur-[4vh]"></div>
                </div>
            </div>
        </div>
    )
}

