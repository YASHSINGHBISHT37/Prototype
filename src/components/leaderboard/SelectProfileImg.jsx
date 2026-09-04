import { useState } from "react"

export default function SelectProfileImg() {
    const profileImg = {
        boy: [1, 2, 3, 4, 5, 6],
        girl: [1, 2, 3, 4, 5],
    }

    const [profile, setProfile] = useState(true)

    return (
        <div className='fixed bottom-0 right-0 z-99 w-full h-full bg-[#121212]/50 flex items-end justify-end p-4 pointer-events-none'>
            <div className='border border-black/20 rounded-3xl backdrop-blur-3xl p-4 px-6 flex flex-col gap-3 relative w-sm bg-[#E5E9F7] pointer-events-auto'>
                <i onClick={() => setProfile(false)} className="ph ph-x cursor-pointer text-2xl absolute z-1 top-4 right-4 active:scale-80 transition-all ease-in-out duration-200" />
                <div className='mb-3'>
                    <h1 className='font-dot font-bold text-3xl tracking-tight'>Change Profile</h1>
                    <p className='text-xs tracking-tight text-[#fe330a]'>You can Change it Twice.</p>
                </div>

                <div>
                    <h1 className='text-lg font-dot uppercase'>boy</h1>
                    <div className='grid grid-cols-6 gap-3'>
                        {profileImg.boy.map((item, i) => (
                            <div key={i} className='cursor-pointer hover:scale-110 w-12 h-12 active:scale-80 transition-all ease-in-out duration-200'>
                                <img className='w-full h-full' src={`/profile/boy-${item}.png`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className='text-lg font-dot uppercase'>girl</h1>
                    <div className='grid grid-cols-6 gap-3'>
                        {profileImg.girl.map((item, i) => (
                            <div key={i} className='cursor-pointer hover:scale-110 w-12 h-12 active:scale-80 transition-all ease-in-out duration-200'>
                                <img className='w-full h-full' src={`/profile/girl-${item}.png`} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
