import React from 'react'
import { ChevronRight } from 'lucide-react'

export default function StepsHeader({ step }: { step: string }) {
    const steps = ['business', 'details', 'time']
  return (
     <div className="flex gap-2 text-sm my-4">
      {steps.map((s, index) => (
        <div
          key={s}
          className={`flex items-center gap-2 ${step === s ? 'font-bold' : 'text-gray-400'
            }`}
        >
          <span className="capitalize">{s}</span>
          {index !== steps.length - 1 && <ChevronRight size={14} />}
        </div>
      ))}
    </div>
  )
}
