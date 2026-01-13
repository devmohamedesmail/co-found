import React from 'react'
import { FileChartColumn } from 'lucide-react'

export default function NoRequest() {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <span className='bg-white block p-2 rounded-md'>
                <FileChartColumn color='black' className='w-7 h-7' />
            </span>
            <h2 className='text-lg font-semibold text-black'>No requests found!</h2>
            <p className='text-gray-400 text-sm'>You can create a new request here.</p>
        </div>
    )
}
