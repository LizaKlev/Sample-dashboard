import {
  Sidebar,
  SidebarContent,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from './ui/sidebar'

import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'
import Image from 'next/image'

// Menu items.
const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible={'icon'} className='h-screen'>
      <SidebarContent className='pt-6 bg-background border-r-border'>
        <div className='flex pl-8 pb-4 items-center h-16 align-middle'>
          <Image src='/logo.svg' alt='Logo' width={45} height={45} />
        </div>
        <SidebarGroupContent className='flex-grow p-4 space-y-2'>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title} className=''>
                <SidebarMenuButton
                  asChild
                  className='text-muted-foreground hover:bg-accent hover:text-white rounded-md'
                >
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>
    </Sidebar>
  )
}
