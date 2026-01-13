import React from 'react'
import Link from 'next/link'

export default function Banner() {
    const items = [
        {name: 'Google Ads', href: '#' ,icon: '/icons/google-color-svgrepo-com.svg'},
        {name: 'Hubspot', href: '#' ,icon: '/icons/google-color-svgrepo-com.svg'},
        {name: 'Facebook Ads', href: '#' ,icon: '/icons/google-color-svgrepo-com.svg'},
        {name: 'Sales', href: '#' ,icon: '/icons/google-color-svgrepo-com.svg'},
        {name: 'Product', href: '#' ,icon: '/icons/google-color-svgrepo-com.svg'},
        {name: 'Finance', href: '#' ,icon: '/icons/google-color-svgrepo-com.svg'},
        {name: 'Legal', href: '#' ,icon: '/icons/google-color-svgrepo-com.svg'},
        {name: 'Design', href: '#' ,icon: '/icons/google-color-svgrepo-com.svg'},
        {name: 'Talent', href: '#' ,icon: '/icons/google-color-svgrepo-com.svg'},
        {name: 'Engineering', href: '#' ,icon: '/icons/google-color-svgrepo-com.svg'},
        {name: 'Webflow', href: '#' ,icon: '/icons/google-color-svgrepo-com.svg'},
        {name: 'Fulfillment',href: '#' ,icon: '/icons/google-color-svgrepo-com.svg'},
        {name: 'Management', href: '#' ,icon: '/icons/google-color-svgrepo-com.svg'},
        {name: 'Operations', href: '#' ,icon: '/icons/google-color-svgrepo-com.svg'},
    ]
    return (
       <div className='pt-12'>
         <div className='bg-black rounded-lg py-10 px-6 flex justify-between items-center'>
            <div className='flex flex-col gap-2 flex-1'>
                <h3 className='text-white text-4xl font-bold'>Get expert help, instantly</h3>
                <p className='text-gray-200 text-md'>Rapidly pinpoint bottlenecks, schedule a targeted advisory session with our subject matter experts, and drive decisive improvements in your business performance.</p>


            </div>
            <div className='grid grid-cols-5 gap-2'>
                {items.map((item) => (
                    <Link key={item.name} href={item.href} className='flex items-center gap-2'>
                        {item.icon ? <img src={item.icon} alt="" className='w-3 h-3' /> : null}
                        <span className='text-white text-xs'>{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
       </div>
    )
}
