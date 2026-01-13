import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function DetailsStep({
  formik,
  onNext,
  onBack,
}: any) {
  return (
    <div className="space-y-4">
      <div>

        <Label className='mb-2'>Request title</Label>
        <Input
          placeholder="Enter a short title that describes this request..."
          value={formik.values.title}
          onChange={(e) =>
            formik.setFieldValue('title', e.target.value)
          }
        />
      </div>

      <div>
        <Label className='mb-2'>Request description</Label>
        <Textarea
          placeholder='Enter a details about request...'
          value={formik.values.description}
          onChange={(e) =>
            formik.setFieldValue('description', e.target.value)
          }
        />
      </div>

      <div>
        <Label className='mb-2'>Attach files</Label>

        <Label className='flex gap-2 border border-dashed p-2 rounded flex-col justify-between items-center ' htmlFor='files'>
          <input
            type="file"
            id='files'
            className='hidden'
            onChange={(e) =>
              formik.setFieldValue('files', Array.from(e.target.files || []))
            }

          />
          <p className='text-center font-bold'>Drag & drop files</p>
          <p className='text-center text-muted-foreground'>or, click to browse</p>
          <button className='text-center border rounded-md  py-1 px-2 text-xs'>Select Files</button>
        </Label>
      </div>

      <div className="flex justify-between pt-4">
        <Button onClick={onBack} variant="outline">
          Back
        </Button>

        <Button onClick={onNext} variant="default">
          Next
        </Button>
      </div>
    </div>
  )
}
