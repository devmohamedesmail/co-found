import React from 'react'
import { formatDistanceToNow,format } from 'date-fns'
import { FileText, Calendar, Clock } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Request = {
    id: string
    title: string
    category: string
    description: string
    status: string
    duration?: string
    deadline?: string
    createdAt: string
}

export default function RequestCard({ request }: { request: Request }) {
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'pending':
            case 'submitted':
                return 'bg-yellow-100 text-yellow-800'
            case 'in-progress':
                return 'bg-blue-100 text-blue-800'
            case 'reviewing':
                return 'bg-purple-100 text-purple-800'
            case 'completed':
                return 'bg-green-100 text-green-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">

            <div className='flex justify-evenly items-center gap-1 '>
                <div className='h-1 rounded-4xl flex-1  bg-green-900'></div>
                <div className='h-1 rounded-4xl flex-1 bg-gray-300'></div>
                <div className='h-1 rounded-4xl flex-1 bg-gray-300'></div>
                <div className='h-1 rounded-4xl flex-1  bg-gray-300'></div>
            </div>

            <div className='flex justify-between items-center mt-3'>
                <div className="">
                    {format(new Date(request.createdAt), 'd MMMM, yyyy, HH:mm')}
                </div>

                <div>
                    <Avatar>
                        <AvatarImage className='w-10 h-10' src="https://github.com/shadcn.png" />
                        <AvatarFallback className='w-10 h-10'>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>




            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">{request.title}</h3>
                </div>
            </div>

            <div className="mb-3">
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium mb-2">
                    {request.category}
                </span>
                <p className="text-sm text-gray-600 line-clamp-2">{request.description}</p>
            </div>

            {/* <div className="flex items-center gap-4 text-xs text-gray-500">
                {request.duration && (
                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{request.duration}</span>
                    </div>
                )}
                {request.deadline && (
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(request.deadline).toLocaleDateString()}</span>
                    </div>
                )}
                <div className="ml-auto">
                    {formatDistanceToNow(new Date(request.createdAt), { addSuffix: true })}
                </div>
            </div> */}

            <div className='flex items-center gap-2'>
                <span className='bg-gray-100 px-2 py-1 text-xs rounded-md'>New</span>
                <button className='bg-green-50 px-2 py-1 flex items-center rounded-md'>
                    <img src="/icons/meet.svg" alt="" className='w-5 h-5' />
                  <span className='text-green-600 mx-3 text-xs'>Scheduled Call</span>
                </button>
            </div>
        </div>
    )
}
