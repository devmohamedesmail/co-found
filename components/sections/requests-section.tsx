import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import NoRequest from '../no-resquest'

export default function RequestsSection() {
    return (
        <div>
            <h2>All Requests</h2>
            <div>
                <Tabs defaultValue="all" className="w-[400px] ">

                    <TabsList className='bg-gray-200'>
                        <TabsTrigger 
                        
                            value="all"
                            className="text-gray-400 data-[state=active]:bg-white data-[state=active]:!text-black "
                        >All</TabsTrigger>
                        <TabsTrigger 
                            value="submitted"
                            className="text-gray-400 data-[state=active]:bg-white data-[state=active]:!text-black "
                        >Submitted</TabsTrigger>
                        <TabsTrigger 
                            value="in-progress"
                            className="text-gray-400 data-[state=active]:bg-white data-[state=active]:!text-black "
                        >In Progress</TabsTrigger>
                        <TabsTrigger 
                            value="reviewing"
                            className="text-gray-400 data-[state=active]:bg-white data-[state=active]:!text-black "
                        >Reviewing</TabsTrigger>
                        <TabsTrigger 
                            value="completed"
                            className="text-gray-400 data-[state=active]:bg-white data-[state=active]:!text-black "
                        >Completed</TabsTrigger>
                    </TabsList>


                    <TabsContent value="all">All</TabsContent>
                    <TabsContent value="submitted">Submitted</TabsContent>
                    <TabsContent value="in-progress">In Progress</TabsContent>
                    <TabsContent value="reviewing">Reviewing</TabsContent>
                    <TabsContent value="completed">Completed</TabsContent>
                </Tabs>
            </div>

            <NoRequest />
        </div>
    )
}
