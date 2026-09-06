import React from 'react'

export default function GPATrend() {
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
        <div className='border border-border-20 rounded-3xl h-90 bg-muted-bg p-5 px-6 w-1/2'>
            <div>
                <h1 className='font-bold font-dot tracking-tighter text-3xl capitalize'>OverAll GPA Trend</h1>
                <p className='tracking-tight text-sm text-black/70'>Breakdown of grades for this semester</p>
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
