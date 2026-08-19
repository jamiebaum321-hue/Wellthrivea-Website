'use client'

import { useId } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

interface Checkbox16Props {
  label: string
  description?: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  required?: boolean
  name?: string
}

const Checkbox16 = ({
  label,
  description,
  checked,
  onCheckedChange,
  required,
  name,
}: Checkbox16Props) => {
  const id = useId()

  return (
    <div className='flex items-start gap-3.5'>
      <Checkbox
        id={id}
        name={name}
        required={required}
        checked={checked}
        onCheckedChange={(value) => onCheckedChange(value === true)}
        className='mt-0.5 data-checked:border-brand-green data-checked:bg-brand-green data-[state=checked]:border-brand-green data-[state=checked]:bg-brand-green'
      />
      <div className='grid gap-1.5'>
        <Label htmlFor={id} className='text-sm leading-4 font-medium'>
          {label}
        </Label>
        {description && (
          <p className='text-muted-foreground text-[13px] leading-5'>{description}</p>
        )}
      </div>
    </div>
  )
}

export default Checkbox16
