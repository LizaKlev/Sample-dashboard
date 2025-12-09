'use client'

import { useState } from 'react'
// import { TrendingUp } from 'lucide-react'
import { Bar, BarChart } from 'recharts'

import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from './ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from './ui/chart'

export const description = 'A bar chart'

const chartData = [
  { product: 'Figma', value: 2500, fill: 'var(--chart-1)' },
  { product: 'SaaS tool', value: 800, fill: 'var(--chart-5)' },
  { product: 'Online course platform', value: 600, fill: 'var(--chart-5)' },
  { product: 'Digital illustration pack', value: 300, fill: 'var(--chart-5)' },
  { product: 'Productivity app', value: 200, fill: 'var(--chart-5)' },
  { product: 'Music licensing site', value: 100, fill: 'var(--chart-5)' },
]

const chartConfig = {
  value: {
    label: 'Value',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

export function ChartBarInteractive() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)
  const [selectedBar, setSelectedBar] = useState<number>(0) // Default to first bar (Figma)

  const handleMouseEnter = (data: unknown, index: number) => {
    setHoveredBar(index)
  }

  const handleMouseLeave = () => {
    setHoveredBar(null)
  }

  const handleClick = (data: unknown, index: number) => {
    setSelectedBar(index)
  }

  // Create dynamic chart data based on hover and selected state
  const dynamicChartData = chartData.map((item, index) => ({
    ...item,
    fill:
      selectedBar === index
        ? 'var(--chart-1)'
        : hoveredBar === index
        ? 'var(--chart-2)'
        : item.fill,
  }))

  // Get selected product info
  const selectedProduct = chartData[selectedBar]

  return (
    <Card className='h-full justify-between'>
      <CardContent className='flex flex-row justify-between gap-4 p-0 h-full sm:flex-col lg:flex-row'>
        <div className='flex flex-col lg:w-1/2 h-full justify-between'>
          <div className='flex flex-col gap-0'>
            <p className='text-xs text-foreground'>Best performers</p>
            <p className='font-bold text-[16px] text-foreground'>
              {selectedProduct.product}
            </p>
          </div>

          <div className='flex flex-col gap-0'>
            <p className='text-2xl font-bold text-foreground'>
              ${selectedProduct.value.toLocaleString()}
            </p>
            <div className='flex flex-row'>
              <p className='text-chart-green font-bold text-xs'>+$500</p>
              <p className='text-chart-green text-xs'>(20%)</p>
            </div>
            <p className='text-[10px] text-muted-foreground'>
              VS previous month
            </p>
          </div>
        </div>
        <ChartContainer
          config={chartConfig}
          className='lg:w-1/2 flex items-end'
          // style={{ height: 196 }}
        >
          <BarChart
            accessibilityLayer
            data={dynamicChartData}
            height={196}
            style={{ width: '100%' }}
            barCategoryGap={14} // spacing between bars
            barGap={14} // gap between bars
          >
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value, name, props) => [
                    `${props.payload.product} ${value}`,
                    '',
                  ]}
                />
              }
            />
            <Bar
              dataKey='value'
              fill='var(--chart-1)'
              radius={8}
              barSize={8} // set bar width to 8px
              className=''
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
