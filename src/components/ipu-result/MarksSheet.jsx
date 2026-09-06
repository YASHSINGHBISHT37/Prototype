import React from 'react'

export default function MarksSheet() {
    const grid = '[1fr_auto_0.8fr_0.8fr_0.8fr_0.8fr_0.8fr]'

    const subjects = [
        { paperCode: "BCA-202T", subjectName: "OPERATING SYSTEMS", credits: 4, internal: 37, external: 51, total: 88, grade: "A+" },
        { paperCode: "BCA-204T", subjectName: "SOFTWARE TESTING", credits: 4, internal: 40, external: 52, total: 92, grade: "O" },
        { paperCode: "BCA-212T", subjectName: "INTRODUCTION TO DATA SCIENCE", credits: 4, internal: 32, external: 51, total: 83, grade: "A+" },
        { paperCode: "BCA-222T", subjectName: "DIGITAL MARKETING", credits: 3, internal: 35, external: 57, total: 92, grade: "O" },
        { paperCode: "BCA-232", subjectName: "INTRODUCTION TO LOGIC AND CRITICAL THINKING", credits: 2, internal: 38, external: 43, total: 81, grade: "A+" },
        { paperCode: "BCA-234", subjectName: "HEALTH AND WELLNESS, YOGA EDUCATION AND SPORTS AND FITNESS", credits: 2, internal: null, external: 92, total: 92, grade: "O" },
        { paperCode: "BCA-202P", subjectName: "OPERATING SYSTEMS LAB", credits: 1, internal: 36, external: 44, total: 80, grade: "A+" },
        { paperCode: "BCA-204P", subjectName: "SOFTWARE TESTING LAB", credits: 1, internal: 37, external: 47, total: 84, grade: "A+" },
        { paperCode: "BCA-212P", subjectName: "DATA SCIENCE LAB", credits: 2, internal: 30, external: 46, total: 76, grade: "A+" }
    ]
    
    return (
        <div className='border border-border-20 rounded-3xl bg-muted-bg p-5'>
            <div className='mb-4 w-full flex items-center justify-between'>
                <h1 className='font-bold tracking-tighter text-3xl font-dot'>Semester 4 Result</h1>
                <p className='text-muted-text text-sm'>Showing 9 subjects</p>
            </div>
            <div className={`grid grid-cols-[0.5fr_3fr_0.4fr_0.4fr_0.4fr_0.4fr_0.4fr] gap-2 font-bold text-md uppercase text-text-muted pb-3 tracking-tighter`}>
                <h1>Paper Code</h1>
                <h1>Subject Name</h1>
                <h1 className="text-center">Credits</h1>
                <h1 className="text-center">Internal</h1>
                <h1 className="text-center">External</h1>
                <h1 className="text-center">Total</h1>
                <h1 className="text-center">Grade</h1>
            </div>  

            {subjects.map((item, index) => (
                <div key={index} className={`grid grid-cols-[0.5fr_3fr_0.4fr_0.4fr_0.4fr_0.4fr_0.4fr] gap-2 items-center py-3 border-t border-border-20 hover:bg-black/10`}>
                    <h1 className="text-sm pl-3">{item.paperCode}</h1>
                    <h1 className="text-sm font-semibold">{item.subjectName}</h1>
                    <h1 className="text-center text-sm text-text-muted">{item.credits}</h1>
                    <h1 className="text-center text-sm text-text-muted">{item.internal ?? '-'}</h1>
                    <h1 className="text-center text-sm text-text-muted">{item.external}</h1>
                    <h1 className="text-center text-sm font-bold">{item.total}</h1>
                    <div className="flex justify-center">
                        <span
                            className={`text-xs font-bold px-2 py-0.5 rounded ${item.grade === 'O'
                                ? 'bg-yellow-600/80 text-white'
                                : 'bg-green-600 text-white'
                                }`}
                        >
                            {item.grade}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}
