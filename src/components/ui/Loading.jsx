import React from 'react'

export default function Loading() {
    return (
        <div className='w-full min-h-screen flex items-center justify-center'>

            <div className='flex flex-col gap-2 items-center justify-center'>
                <img className='w-14' src="/favicon/favicon.ico" />
                <h1 className='text-xs'>Loading...</h1>
            </div>

        </div>
    )
}
