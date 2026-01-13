import React from 'react'
import { ChevronRight } from 'lucide-react'

export default function BusinessAreaStep({ onSelect }: { onSelect: (category: string) => void }) {
  const businessAreas = [
    {
      name: 'PPC',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      name: 'Google Ads',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      name: 'Meta (Facebook/Instagram Ads)',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      name: 'Ad Creative & Copy',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      name: 'Ad Targeting Strategies',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      name: 'Organic Marketing',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      name: 'YouTube Marketing',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      name: 'SEO & Content Optimization',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      name: 'Newsletter & Email Marketing',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ];

  return (
    <div className="space-y-3">
      {businessAreas.map((area) => (
        <button
          key={area.name}
          onClick={() => onSelect(area.name)}
          className="w-full flex justify-between items-center p-2 rounded hover:bg-gray-50"
        >
          <div className="text-left">
            <p className="">{area.name}</p>
            <p className="text-xs text-gray-500">
              {area.description}
            </p>
          </div>
          <ChevronRight size={16} />
        </button>
      ))}
    </div>
  )
}
