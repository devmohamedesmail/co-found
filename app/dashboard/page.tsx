'use client'
import React from 'react'

import Banner from '@/components/banner'
import RequestsSection from '@/components/sections/requests-section'
import AddRequest from '@/components/sections/add-request'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useOrganization } from '@clerk/nextjs'
import { useMutation, useQueryClient } from '@tanstack/react-query'

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
    const { organization } = useOrganization()
    const queryClient = useQueryClient()

    console.log("organization", organization?.id)

    // Create request mutation
    const createRequestMutation = useMutation({
        mutationFn: async (data: FormData & { organizationId?: string }) => {
            const response = await axios.post('/api/requests', data)
            return response.data
        },
        onSuccess: () => {
            // Invalidate and refetch requests
            queryClient.invalidateQueries({ queryKey: ['requests', organization?.id] })
            toast.success('Request created successfully!')

            // Reset form and close dialog
            formik.resetForm()
            setStep('business')
            setOpen(false)
        },
        onError: (error) => {
            console.error('Error creating request:', error)
            toast.error('Failed to create request. Please try again.')
        }
    })

    const formik = useFormik<FormData>({
        initialValues: {
            category: '',
            title: '',
            description: '',
            files: [],
            duration: '',
            deadline: '',
        },
        validationSchema: Yup.object({
            category: Yup.string().required('Category is required'),
            title: Yup.string().required('Title is required'),
            description: Yup.string().required('Description is required'),
            files: Yup.array(),
            deadline: Yup.date().required('Deadline is required'),
        }),
        onSubmit: async (values) => {
            const payload = {
                ...values,
                organizationId: organization?.id
            }

            console.log('Submitting request:', payload)
            createRequestMutation.mutate(payload)
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
