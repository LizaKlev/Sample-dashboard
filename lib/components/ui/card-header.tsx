'use client'
import { IncomeData } from '@/lib/sampleData'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs'
import { useState } from 'react'

export function TableDemo({ data }: { data: IncomeData[] }) {
  // Add a state for switching to shares & active
  const [{ active, showShare }, setState] = useState<{
    active: boolean
    showShare: boolean
  }>({
    active: true,
    showShare: false,
  })

  const toggleShare = () => {
    setState((prev) => ({ ...prev, showShare: !prev.showShare }))
  }

  const cardHeader = () => {
    return (
      <div className='flex flex-row justify-between align-baseline items-center'>
        <h1 className='text-3xl font-bold'>Total earnings</h1>

        <Tabs defaultValue='Show share' className='w-full'>
          <TabsList className='w-full h-8'>
            <TabsTrigger onClick={toggleShare} value='Show share'>
              {' '}
              {showShare ? 'Share' : 'Income'}
            </TabsTrigger>
            <TabsTrigger onClick={toggleShare} value='Show price'>
              {' '}
              {showShare ? 'Income' : 'Share'}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    )
  }
}
