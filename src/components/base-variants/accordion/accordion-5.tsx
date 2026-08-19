import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { ReactNode } from 'react'

export interface Accordion5Item {
  value: string
  title: string
  content: ReactNode
}

interface Accordion5Props {
  items: readonly Accordion5Item[]
  defaultOpenFirst?: boolean
  className?: string
}

const Accordion5 = ({ items, defaultOpenFirst = false, className }: Accordion5Props) => {
  return (
    <Accordion
      className={className ?? 'w-full'}
      type="multiple"
      defaultValue={defaultOpenFirst && items.length > 0 ? [items[0].value] : []}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className='has-[button[aria-expanded=true]]:border-brand-blue not-last:has-[button[aria-expanded=true]]:border-b-2'
        >
          <AccordionTrigger className='font-heading font-semibold text-brand-navy hover:no-underline aria-expanded:text-brand-blue [&[aria-expanded=true]>svg]:text-brand-blue'>
            {item.title}
          </AccordionTrigger>
          <AccordionContent className='text-muted-foreground'>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default Accordion5
