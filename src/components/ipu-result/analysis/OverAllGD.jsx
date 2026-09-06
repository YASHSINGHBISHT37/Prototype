import React from 'react'

export default function OverAllGD() {
    const GD = [
        { name: 'Subjects counted', is: '38' },
        { name: 'Pass Rate', is: '77.7' },
        { name: 'Top grades (O/A+)', is: '100%' },
        { name: 'Most Common', is: 'A+ (4)' },
    ]

    const grade = [
        { name: 'A+', sub: '9', perc: '38' },
        { name: 'B', sub: '7', perc: '80' },
        { name: 'C', sub: '22', perc: '80' },
        { name: 'D', sub: '7', perc: '47' },
    ]
    return (
        <div className='border border-border-20 w-1/2 rounded-3xl h-90 bg-muted-bg p-5 px-6'>
            <div className='mb-6'>
                <h1 className='font-bold font-dot tracking-tighter text-3xl capitalize'>Grade Distribution</h1>
            </div>

            <div className='grid grid-cols-2 gap-3'>
                {GD.map((item, i) => (
                    <div key={i} className='px-4 text-sm border border-border-20 p-3 rounded-2xl bg-bg gap-1 flex flex-col'>
                        <h1 className='text-muted-text text-xs capitalize'>{item.name}</h1>
                        <p className='font-bold font-dot'>{item.is}</p>
                    </div>
                ))}
            </div>

            <div className='grid grid-rows-4 mt-3 px-4'>
                {grade.map((item, i) => (
                    <div key={i} className='flex px-2 items-center justify-between text-sm gap-4'>
                        <h1 className='capitalize font-bold w-6'>{item.name}</h1>

                        <div className='h-2.5 border border-border-10 w-full bg-bg rounded-full overflow-hidden'>
                            {/* <div className='h-full rounded-full bg-linear-to-r w-1/2 from-accent/50 via-muted-bg to-accent'></div> */}
                            <div className='h-full rounded-full bg-linear-to-r w-1/2 bg-accent'></div>
                        </div>

                        <div className='font-dot w-20 text-muted-text text-right flex text-xs items-center justify-end gap-1'>
                            <p>{item.sub}</p>
                            <div className='w-1 h-1 bg-accent/90 rounded-full'></div>
                            <p>{item.perc}%</p>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}
