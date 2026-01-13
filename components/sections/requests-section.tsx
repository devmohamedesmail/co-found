'use client'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useOrganization } from '@clerk/nextjs'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import RequestCard from '../request-card'
import NoRequest from '../no-resquest'

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

export default function RequestsSection() {
    const { organization } = useOrganization()

    const { data, isLoading, error } = useQuery({
        queryKey: ['requests', organization?.id],
        queryFn: async () => {
            const params = organization?.id ? `?organizationId=${organization.id}` : ''
            const response = await axios.get(`/api/requests${params}`)
            return response.data.data as Request[]
        },
        enabled: !!organization?.id, // Only fetch when we have an organization
    })

    const requests = data || []

    const filterByStatus = (status: string) => {
        if (status === 'all') return requests
        return requests.filter(req => req.status.toLowerCase() === status.toLowerCase())
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-gray-500">Loading requests...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-red-500">Error loading requests. Please try again.</div>
            </div>
        )
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">All Requests</h2>
            <div>
                <Tabs defaultValue="all" className="w-full">
                    <TabsList className='bg-gray-200'>
                        <TabsTrigger
                            value="all"
                            className="text-gray-400 data-[state=active]:bg-white data-[state=active]:!text-black"
                        >
                            All ({requests.length})
                        </TabsTrigger>
                        <TabsTrigger
                            value="pending"
                            className="text-gray-400 data-[state=active]:bg-white data-[state=active]:!text-black"
                        >
                            Pending ({filterByStatus('pending').length})
                        </TabsTrigger>
                        <TabsTrigger
                            value="in-progress"
                            className="text-gray-400 data-[state=active]:bg-white data-[state=active]:!text-black"
                        >
                            In Progress ({filterByStatus('in-progress').length})
                        </TabsTrigger>
                        <TabsTrigger
                            value="reviewing"
                            className="text-gray-400 data-[state=active]:bg-white data-[state=active]:!text-black"
                        >
                            Reviewing ({filterByStatus('reviewing').length})
                        </TabsTrigger>
                        <TabsTrigger
                            value="completed"
                            className="text-gray-400 data-[state=active]:bg-white data-[state=active]:!text-black"
                        >
                            Completed ({filterByStatus('completed').length})
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="mt-4">
                        {requests.length === 0 ? (
                            <NoRequest />
                        ) : (
                            <div className="grid grid-cols-4 gap-4">
                                {requests.map((request) => (
                                    <RequestCard key={request.id} request={request} />
                                ))}
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="pending" className="mt-4">
                        {filterByStatus('pending').length === 0 ? (
                            <NoRequest />
                        ) : (
                            <div className="grid grid-cols-4 gap-4">
                                {filterByStatus('pending').map((request) => (
                                    <RequestCard key={request.id} request={request} />
                                ))}
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="in-progress" className="mt-4">
                        {filterByStatus('in-progress').length === 0 ? (
                            <NoRequest />
                        ) : (
                            <div className="grid grid-cols-4 gap-4">
                                {filterByStatus('in-progress').map((request) => (
                                    <RequestCard key={request.id} request={request} />
                                ))}
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="reviewing" className="mt-4">
                        {filterByStatus('reviewing').length === 0 ? (
                            <NoRequest />
                        ) : (
                            <div className="grid grid-cols-4  gap-4">
                                {filterByStatus('reviewing').map((request) => (
                                    <RequestCard key={request.id} request={request} />
                                ))}
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="completed" className="mt-4">
                        {filterByStatus('completed').length === 0 ? (
                            <NoRequest />
                        ) : (
                            <div className="grid grid-cols-4 gap-4">
                                {filterByStatus('completed').map((request) => (
                                    <RequestCard key={request.id} request={request} />
                                ))}
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
