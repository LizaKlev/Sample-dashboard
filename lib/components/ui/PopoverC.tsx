import { Popover, PopoverContent, PopoverTrigger } from './popover'

const PopoverC = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </div>
  )
}

export default PopoverC
