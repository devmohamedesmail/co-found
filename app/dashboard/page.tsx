'use client'
import React from 'react'

import Banner from '@/components/banner'
import RequestsSection from '@/components/sections/requests-section'
import AddRequest from '@/components/sections/add-request'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


export type Step = 'business' | 'details' | 'time'




type FormData = {
    category: string
    title: string
    description: string
    files: File[],
    duration: string,
    deadline: string
}

export default function Home() {

    const [open, setOpen] = React.useState(false)
    const onOpenChange = (open: boolean) => setOpen(open)
    const [step, setStep] = React.useState<Step>('business')
    


    const formik = useFormik<FormData>({
        initialValues: {
            category: '',
            title: '',
            description: '',
            files: [],
            duration: '',
            deadline: '',
        },
        // validationSchema: Yup.object({
        //     category: Yup.string().required('Category is required'),
        //     title: Yup.string().required('Title is required'),
        //     description: Yup.string().required('Description is required'),
        //     files: Yup.array(),
        //     deadline: Yup.date().required('Deadline is required'),
        // }),
        onSubmit: async (values) => {
            console.log(values)
            axios.post('/api/requests', values)
            
        },
    })
    return (
        <div className=''>
            <Banner />
            <AddRequest open={open} setOpen={setOpen} onOpenChange={onOpenChange} formik={formik} step={step} setStep={setStep} />
            <RequestsSection />
        </div>
    )
}
