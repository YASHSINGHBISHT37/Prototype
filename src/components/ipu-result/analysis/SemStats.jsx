import React from 'react'

export default function SemStats() {
    const GD = [
        { name: 'Total Subjects', is: '0' },
        { name: 'Pass Rate', is: '100%' },
        { name: 'Average Marks', is: '77.7' },
        { name: 'Highest Marks', is: '94.0' },
        { name: 'Lowest Marks', is: '63.0' },
        { name: 'Failed Subjects', is: '0' },
        { name: 'Most Common Grade', is: 'A+ (4)' },
    ]
    return (
        <div className='border border-black/20 w-full rounded-3xl h-90 bg-black/3 p-5 px-6'>
            <div>
                <h1 className='font-bold font-dot tracking-tighter text-3xl capitalize'>Semseter Statistics</h1>
                <p className='tracking-tight text-sm text-black/70'>Subject-wise marks distribution</p>
            </div>

            <div>
                {GD.map((item, i) => (
                    <div key={i} className='flex items-center justify-between text-sm w-xs'>
                        <h1 className='text-muted-text capitalize'>{item.name}</h1>
                        <p className='font-bold font-dot'>{item.is}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
