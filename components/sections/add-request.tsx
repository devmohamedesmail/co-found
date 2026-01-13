import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { File as FileIcon, Plus } from 'lucide-react'
import StepsHeader from './step-header';
import { Button } from '../ui/button';
import { Step } from '@/app/dashboard/page';
import { Dispatch, SetStateAction } from 'react'
import BusinessAreaStep from '../business-area-step';
import DetailsStep from '../details-step';
import TimeStep from '../time-step';


interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    setOpen: (open: boolean) => void;
    formik: any;
    step: Step;
    setStep: Dispatch<SetStateAction<Step>>;
}


export default function AddRequest({ open, onOpenChange, setOpen , formik , step , setStep }: Props) {
    return (
        <div>


            <h1 className='text-2xl font-bold my-5 text-black'>Create Request</h1>
            <button onClick={() => setOpen(true)} className='bg-white p-3 flex flex-col items-between justify-between  rounded-md w-46'>
                <div className='flex items-center justify-between'>
                    <span className='bg-black p-1 rounded-md'>
                        <FileIcon color="white" className='w-5 h-5' />
                    </span>
                    <Plus color="black" />
                </div>
                <p className='text-sm mt-5 text-black text-left'>New Request</p>
            </button>




            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className="max-w-4xl">
                    <DialogHeader className="border-b pb-3">
                        <DialogTitle>New Request</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={formik.handleSubmit}>

                        {/* STEPS HEADER */}
                        <StepsHeader step={step} />


                        {/* CONTENT */}
                        {step === 'business' && (
                            <BusinessAreaStep
                                onSelect={(category) => {
                                    formik.setFieldValue('category', category)
                                    setStep('details')
                                }}
                            />
                        )}
                        

                        {step === 'details' && (
                            <DetailsStep
                                formik={formik}
                                onNext={() => setStep('time')}
                                onBack={() => setStep('business')}
                            />
                        )}


                        {step === 'time' && (
                            <TimeStep
                                duration={formik.values.duration}
                                deadline={formik.values.deadline}
                                formik={formik}
                                onBack={() => setStep('details')}
                            
                            />
                        )}
                        
                      
                    </form>

                </DialogContent>
            </Dialog>
        </div>
    )
}
