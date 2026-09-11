import { ResponsiveBar } from '@nivo/bar'
import React from 'react'

const data = [
    { subject: 'BCA-101T', internal: 35, external: 28 },
    { subject: 'BCA-103T', internal: 31, external: 37 },
    { subject: 'BCA-105T', internal: 38, external: 45 },
    { subject: 'BCA-107T', internal: 37, external: 38 },
    { subject: 'BCA-141T', internal: 34, external: 32 },
    { subject: 'BCA-191T', internal: 0, external: 74 },
    { subject: 'BCA-101P', internal: 38, external: 56 },
    { subject: 'BCA-103P', internal: 32, external: 51 },
    { subject: 'BCA-105P', internal: 39, external: 51 },
]

export default function MyBar() {
    return (

        <div className='border border-border-20 w-1/2 rounded-3xl h-full bg-muted-bg p-5 px-6'>
            
            {/* Heading */}
            <div>
                <h1 className='font-bold font-dot tracking-tighter text-3xl capitalize'>Semseter Statistics</h1>
                <p className='tracking-tight text-sm text-muted-text'>Subject-wise marks distribution</p>
            </div>

            <ResponsiveBar
                data={data}
                keys={['internal', 'external']}
                indexBy="subject"
                margin={{ top: 40, right: 20, bottom: 110, left: 40 }}
                padding={0.20}
                colors={['rgb(254, 51, 10)', '#F18E80']}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 10,
                    tickRotation: -30,
                }}
                axisLeft={{
                    tickSize: 0,
                    tickValues: 5,
                }}
                enableGridY={true}
                enableGridX={true}
                gridYValues={5}
                gridXValues={5}
                enableLabel={false}
                theme={{
                    background: 'transparent',
                    text: { fill: '#aaa', fontSize: 12,fontFamily:'dot' },
                    axis: {
                        ticks: { text: { fill: '#888' } },
                    },
                    grid: {
                        line: { stroke: '#888', strokeDasharray: '3 3' },
                    },
                }}
                animate={true}
            />

        </div>
    )
}