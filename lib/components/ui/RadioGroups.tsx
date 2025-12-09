import { Label } from '@/lib/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/lib/components/ui/radio-group'

const RadioGroups = () => {
  return (
    <RadioGroup defaultValue='option-one'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-one' id='option-one' />
        <Label htmlFor='option-one'>Only active products</Label>
      </div>
      {/* <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-two' id='option-two' />
        <Label htmlFor='option-two'>All</Label>
      </div> */}
    </RadioGroup>
  )
}

export default RadioGroups
