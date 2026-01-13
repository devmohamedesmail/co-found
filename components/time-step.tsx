import React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'

export default function TimeStep({
    deadline,
    formik,
    onBack,

}: {
    onBack: () => void
    formik: any,
    deadline: string
    duration: string
}) {
    const [date, setDate] = React.useState<Date | undefined>()
    return (
        <div>
            <div className="grid grid-cols-2 gap-0">
                {/* LEFT PANEL */}
                <div className="border rounded-lg p-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h3>Alex Fisher</h3>
                    <h4 className="font-semibold mb-2">Design Workshop</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                        A longer chat to run through design.
                    </p>

                    <div className="space-y-3 text-sm">
                        <div>⏱ Duration</div>
                        <Tabs defaultValue="15m" className="w-[400px]">
                            <TabsList defaultValue={formik.values.duration}>
                                {["15m", "30m", "45m", "1h"].map((d) => (
                                    <TabsTrigger key={d} onClick={() => formik.setFieldValue('duration', d)} value={d}>{d}</TabsTrigger>
                                ))}
                            </TabsList>

                        </Tabs>

                        <div className="text-muted-foreground">
                            📍 Europe / Dublin
                        </div>

                        {formik.touched.duration && formik.errors.duration && (
                            <p className="text-red-500 text-xs">{formik.errors.duration}</p>
                        )}
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="border rounded-lg p-4">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(d) => {
                            setDate(d)
                            formik.setFieldValue('deadline', d)
                        }}
                        className="rounded-md"
                        disabled={(date) =>
                            date < new Date() // disable past days
                        }
                    />

                    {date && (
                        <p className="text-sm mt-3">
                            {/* Selected: {format(date, "PPP")} */}
                        </p>
                    )}
                    {formik.touched.deadline && formik.errors.deadline && (
                        <p className="text-red-500 text-xs">{formik.errors.deadline}</p>
                    )}

                </div>
            </div>

            <div className="flex justify-between mt-6">
                <Button onClick={onBack} variant="outline">
                    Back
                </Button>
                <Button
                    disabled={formik.isSubmitting}
                    type='submit'
                    className='bg-green-600 hover:bg-green-700 text-white'
                    variant="secondary">
                    Schedule request
                </Button>

            </div>
        </div>

    )
}
