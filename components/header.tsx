'use client'
import React, { useState ,useEffect} from 'react'
import { LayoutDashboard, Users, Layers, HardDrive, GitPullRequest, MessageCircleMore, Bell } from 'lucide-react'
import Link from 'next/link'
import { OrganizationSwitcher, SignedIn, useAuth, UserButton, useUser } from '@clerk/nextjs'
// import { getAuth } from '@clerk/nextjs/server'

type Organization = {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  role: string;
  status: string;
};
export default function Header() {
  const { userId } = useAuth();
  const { user } = useUser();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);

  console.log('Current userId:', userId);
  console.log('Current user:', user);



 


  const items = [
    { name: 'Home', href: '/dashboard', icon: <LayoutDashboard color='white' className='w-5 h-5' /> },
    { name: 'Community', href: '#', icon: <Users color='white' className='w-5 h-5' /> },
    { name: 'Company', href: '#', icon: <Layers color='white' className='w-5 h-5' /> },
    { name: 'Resources', href: '#', icon: <HardDrive color='white' className='w-5 h-5' /> },
    { name: 'Requests', href: '#', icon: <GitPullRequest color='white' className='w-5 h-5' /> },
  ]
  return (
    <header className='flex justify-between items-center p-4 gap-4 h-16 bg-black'>

      <div className='flex items-center gap-4'>
        <OrganizationSwitcher />
        {items.map((item) => (
          <Link key={item.name} href={item.href} className='flex items-center gap-2'>
            {item.icon}
            <span className='text-white text-sm'>{item.name}</span>
          </Link>
        ))}
      </div>
      <div className='flex items-center gap-4'>
        <MessageCircleMore color='white' className='w-5 h-5' />
        <Bell color='white' className='w-5 h-5' />
        <SignedIn>
          <UserButton />
        </SignedIn>

      </div>
    </header>
  )
}
