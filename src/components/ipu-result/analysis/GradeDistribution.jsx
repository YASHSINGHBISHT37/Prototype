import React from 'react'

export default function GradeDistribution() {
    const GD = [
        { name: 'Total Subjects', is: '0' },
        { name: 'Pass Rate', is: '100%' },
        { name: 'Average Marks', is: '77.7' },
        { name: 'Highest Marks', is: '94.0' },
        { name: 'Lowest Marks', is: '63.0' },
        { name: 'Failed Subjects', is: '0' },
        { name: 'Most Common Grade', is: 'A+ (4)' },
    ]

    const grade = [
        { name: 'O', is: '2' },
        { name: 'A+', is: '2' },
        { name: 'A', is: '2' },
        { name: 'B+', is: '2' },
    ]
    return (
        <div className='border border-border-20 rounded-3xl h-90 bg-muted-bg p-5 px-6 w-1/2'>
            <div className='mb-4'>
                <h1 className='font-bold font-dot tracking-tighter text-3xl capitalize'>Grade Distribution</h1>
                <p className='tracking-tight text-sm text-black/70'>Breakdown of grades for this semester</p>
            </div>

            <div className='flex gap-4 justify-between items-center'>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-60 h-60 border rounded-full'></div>
                </div>

                <div className='w-2xl flex flex-col justify-between'>
                    <div>
                        {GD.map((item, i) => (
                            <div key={i} className='flex items-center justify-between text-sm'>
                                <h1 className='text-muted-text capitalize'>{item.name}</h1>
                                <p className='font-bold font-dot'>{item.is}</p>
                            </div>
                        ))}
                    </div>

                    <div className='border-t border-border-20 pt-2 mt-3'>
                        <p className='font-bold font-dot text-sm pb-2'>Grade Breakdown</p>

                        <div className='grid grid-cols-2 gap-x-6 gap-'>
                            {grade.map((item, i) => (
                                <div key={i} className='flex items-center justify-between text-sm'>
                                    <h1 className='text-muted-text capitalize'>{item.name}</h1>
                                    <p className='font-bold font-dot text-xs'>{item.is} (10.00%)</p>
                                </div>
                            ))}

                        </div>


                    </div>
                </div>

            </div>



        </div>
    )
}
