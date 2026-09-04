import React, { useState } from 'react'
import Marquee from '../components/ui/Marquee'

export default function Test4({ showToggle = true, type = 'password' }) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='w-full max-h-screen py-0 bg-[#ECf1ff] text-[#121212] flex flex-col items-center justify-center -z-1 overflow-hidden'>
            <div className='w-full h-full flex items-center px-30 pr- gap-10'>

                {/* Marquee Ani */}
                <div className='flex items-center justify-center pr-0 gap-2'>
                    <Marquee speedd={3520} />
                    <Marquee direction='bottom' speedd={4800} />
                    <Marquee speedd={4000} />
                    <Marquee direction='bottom' speedd={3200} />
                    <Marquee speedd={4578} />
                </div>

                <div className='w-4xl h-full flex flex-col items-center justify-center'>

                    <div className='mb-8 flex items-center justify-center'>
                        <h1 className='font-bold text-7xl tracking-tighter font-dot'>One Click Alway <br /> From Your Result.</h1>
                    </div>

                    <div className='w-md flex flex-col gap-4'>

                        {/* Enrollment No. */}
                        <div >
                            <h1 className='text-sm font-dot px-2 mb-'>Enrollment Number</h1>
                            <div className='border border-black/20 rounded-2xl text-sm relative overflow-hidden backdrop-blur-2xl group bg-black/3'>
                                <input className='outline-0 h-full w-full p-3 px-4 z-9 relative' type="text" placeholder='Enter Enrollment Number' />
                                <div className="w-full aspect-square bg-[#fe330a] fixed top-30 rounded-full left-0 z-1 blur-[2vh] group-focus-within:top-8 transition-all duration-200 ease-in-out"></div>
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className='flex items-center relative'>
                                <h1 className='text-sm font-dot px-2'>Password</h1>

                                <div className='relative group/pass'>
                                    <i className="ph ph-info text-muted-text cursor-pointer"></i>

                                    <div className='text-xs overflow-hidden text-text absolute w-xl z-9999 bg-black/3 backdrop-blur-xl rounded-xl border py-3.5 px-10 border-black/10 bottom-4 left-4 opacity-0 group-hover/pass:opacity-100 transition-all ease-in-out duration-300 pointer-events-none'>
                                        <li>Default password is your <b>Father's Full Name</b> in <b>CAPITAL LETTERS</b> with <b>Spaces</b></li>
                                        <li>Ensure space between words as per registered father's name</li>
                                        <li>3 Wrong attempts will lead to temporary account lockout. If locked, contact your college examination cell.</li>
                                        
                                        <div className="w-full aspect-square bg-[#fe330a]/86 fixed top-17 rounded-full left-0 -z-1 blur-[2vh] group-focus-within:top-0 transition-all duration-200 ease-in-out"></div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-black/20 pr-4 rounded-2xl text-sm relative overflow-hidden backdrop-blur-2xl group bg-black/3 flex items-center'>
                                <input className='outline-0 h-full w-full p-3 px-4 z-9 relative'
                                    type={showToggle ? (showPassword ? 'text' : 'password') : type}
                                    placeholder='Enter Password' />
                                <div className="w-full aspect-square bg-[#fe330a] fixed top-30 rounded-full left-0 z-1 blur-[2vh] group-focus-within:top-8 transition-all duration-200 ease-in-out"></div>
                                {showToggle && (
                                    <i onClick={() => setShowPassword((prev) => !prev)}
                                        className={`ph ${showPassword ? 'ph-eye' : 'ph-eye-closed'} cursor-pointer hover:text-black/90 transition-all duration-250 ease-in-out`}>
                                    </i>
                                )}
                            </div>
                        </div>

                        {/* Captch */}
                        <div className='relative'>
                            <h1 className='text-sm font-dot px-2 mb-'>Captch</h1>
                            <div className='flex items-center gap-2'>
                                <div className='border border-black/20 rounded-2xl text-sm relative overflow-hidden backdrop-blur-2xl group bg-black/3'>
                                    <input className='outline-0 h-full w-full p-3 px-4 z-9 relative' type="text" placeholder='Enter CAPTCH' />
                                    <div className="w-full aspect-square bg-[#fe330a] fixed top-30 rounded-full left-0 z-1 blur-[2vh] group-focus-within:top-8 transition-all duration-200 ease-in-out"></div>

                                </div>

                                <div className='border border-black/20 rounded-2xl text-sm relative overflow-hidden backdrop-blur-2xl group bg-black/3'>
                                    <input className='outline-0 h-full w-full p-3 px-4 z-9 relative' type="text" placeholder='Enter CAPTCH' />
                                    <div className="w-full aspect-square bg-[#fe330a] fixed top-30 rounded-full left-0 z-1 blur-[2vh] group-focus-within:top-8 transition-all duration-200 ease-in-out"></div>
                                </div>

                                <div className='border border-black/20 rounded-2xl text-lg relative overflow-hidden backdrop-blur-2xl group bg-black/3 flex items-center justify-center w-14 aspect-square cursor-pointer'>
                                    <i className="ph ph-arrows-clockwise relative z-9"></i>
                                    <div className="w-6 aspect-square bg-[#fe330a] fixed top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 z-1 blur-[1vh] group-focus-within:top-0 transition-all duration-200 ease-in-out"></div>
                                </div>
                            </div>

                            <h1 className='text-center text-sm font-dot z-9 absolute mt-2 text-[#fe330a]'>For ERROR!</h1>
                        </div>

                        {/* Submit */}
                        <div className='mt-18'>
                            <div className='border border-black/16 text-white rounded-full p-1.5 cursor-pointer active:scale-95 bg-[#fe330a]/90 text-sm relative overflow-hidden backdrop-blur-2xl group bg-blac transition-all duration-200 ease-in-out'>
                                <h1 className='text-center text-lg font-dot z-9 relative'>Login</h1>
                            </div>
                            <p className='text-center text-xs text-black/50 mt-2'>Data is fetched directly from GGSIPU Exam Portal.</p>
                        </div>

                    </div>





                </div>

            </div>
        </div>
    )
}
